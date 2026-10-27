import {readFile,writeFile,mkdir,copyFile} from 'node:fs/promises';
import {marked} from 'marked';
const markdown=await readFile('index.md','utf8');
const template=await readFile('template.html','utf8');
marked.setOptions({gfm:true,breaks:false});
const rendered=marked.parse(markdown);
const chunks=rendered.split(/(?=<h2>)/);
const tools=[['▥','Hlasování'],['◴','Časovač'],['⚄','Losování'],['♧','Skupiny'],['▦','QR kódy'],['⇧','Přenos souborů'],['✎','Poznámky'],['♫','Bzučák'],['◷','Hodiny']];
const tiles=(items)=>items.map(([symbol,name])=>'<span class="device-tool"><b aria-hidden="true">'+symbol+'</b><small>'+name+'</small></span>').join('');
const device='<div class="device-stage" role="img" aria-label="Stylizovaný náhled Živé tabule na notebooku a mobilu"><div class="laptop"><div class="laptop-screen"><div class="device-appbar"><span>▣ Živá tabule</span><span>⚙</span></div><div class="device-tools">'+tiles(tools)+'</div></div><div class="laptop-base"></div></div><div class="phone"><div class="phone-notch"></div><div class="phone-screen"><div class="device-appbar"><span>Živá tabule</span><span>☰</span></div><div class="device-tools">'+tiles(tools.slice(0,6))+'</div></div></div></div>';
const hero='<section class="hero"><div class="hero-copy">'+chunks.shift()+'</div>'+device+'</section>';
const icon=(paths)=>'<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths+'</svg>';
const benefitItems=[
 [icon('<rect x="2" y="5" width="15" height="11" rx="2"/><path d="M7 20h5m-2-4v4"/><rect x="17" y="9" width="5" height="10" rx="1"/>'),'Funguje všude','Na tabuli, notebooku, tabletu i mobilu.'],
 [icon('<path d="M12 3v12m-4-4 4 4 4-4"/><path d="M4 17v3h16v-3"/>'),'Bez instalace','Stačí otevřít v prohlížeči.'],
 [icon('<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/><path d="M18 5l2 2 3-3"/>'),'Bez registrace','Okamžitě a bez zbytečných kroků.'],
 [icon('<path d="M4 4h16v16H4z"/><path d="M4 4l16 16"/><path d="M8 9h8m-8 4h4"/>'),'Bez reklam','Čisté a přehledné prostředí.']
];
const benefits='<div class="benefits" aria-label="Výhody Živé tabule">'+benefitItems.map(([symbol,title,description])=>'<div class="benefit"><span class="benefit-icon">'+symbol+'</span><p><strong>'+title+'</strong><small>'+description+'</small></p></div>').join('')+'</div>';
const installNote='<p class="install-note-inline"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M10 5h4"/><path d="M11 19h2"/></svg><span>Živou tabuli si můžete přidat na plochu mobilu nebo tabletu.</span> <a href="https://blog.zivatabule.cz/clanky/ziva-tabule-zije-i-ve-vasem-mobilu/">Jak na to →</a></p>';
const cardIcon=(kind)=>kind==='school'
?'<svg viewBox="0 0 32 32" width="26" height="26" style="width:26px;height:26px;display:block;flex:none" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 27V12l11-6 11 6v15"/><path d="M10 27V15h12v12M13 27v-7h6v7M3 27h26"/><path d="M14 12h4"/></svg>'
:'<svg viewBox="0 0 32 32" width="26" height="26" style="width:26px;height:26px;display:block;flex:none" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="11" r="3"/><circle cx="22" cy="11" r="3"/><path d="M3 25v-3a7 7 0 0 1 12-5M29 25v-3a7 7 0 0 0-12-5"/><path d="m12 22 4-4 4 4m-4-4v10"/></svg>';
const sections=chunks.map((chunk,i)=>'<section class="content-section section-'+i+'">'+((i===2||i===3)?'<div class="support-card-icon" aria-hidden="true" style="width:46px;height:46px;flex:0 0 46px;display:grid;place-items:center;overflow:hidden">'+cardIcon(i===2?'school':'company')+'</div>':'')+chunk+'</section>');
const html=template.replace('{{CONTENT}}',hero+benefits+installNote+'<div class="content-sections">'+sections.join('')+'</div>');
await mkdir('dist/assets',{recursive:true});
await writeFile('dist/index.html',html);
await copyFile('style.css','dist/style.css');
await copyFile('assets/ziva_tabule_logo.png','dist/assets/ziva_tabule_logo.png');
console.log('Built dist/index.html');
