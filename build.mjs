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
const sections=chunks.map((chunk,i)=>'<section class="content-section section-'+i+'">'+chunk+'</section>');
const html=template.replace('{{CONTENT}}',hero+benefits+'<div class="audience-strip"><span>Základní školy</span><span>Střední školy</span><span>Kurzy a firemní vzdělávání</span></div><div class="content-sections">'+sections.join('')+'</div>');
await mkdir('dist/assets',{recursive:true});
await writeFile('dist/index.html',html);
await copyFile('style.css','dist/style.css');
await copyFile('assets/ziva_tabule_logo.png','dist/assets/ziva_tabule_logo.png');
console.log('Built dist/index.html');
