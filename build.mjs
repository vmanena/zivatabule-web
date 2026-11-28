import {readFile,writeFile,mkdir,copyFile,rm} from 'node:fs/promises';
import {marked} from 'marked';
import {locales, languageLinks, alternates} from './locales.mjs';
const international = process.argv.includes('--international');
const languages = international ? Object.keys(locales).filter((language) => language !== 'cs') : ['cs'];

const template=await readFile('template.html','utf8');
marked.setOptions({gfm:true,breaks:false});
async function renderPage(language) {
  const locale = locales[language];
  const markdown = await readFile(language === 'cs' ? 'index.md' : `locales/${language}.md`, 'utf8');
  const rendered=marked.parse(markdown);
  const chunks=rendered.split(/(?=<h2>)/);
  const tools=['▥','◴','⚄','♧','▦','⇧','✎','♫','◷'].map((symbol, index) => [symbol, locale.tools[index]]);
  const tiles=(items)=>items.map(([symbol,name])=>'<span class="device-tool"><b aria-hidden="true">'+symbol+'</b><small>'+name+'</small></span>').join('');
  const device='<div class="device-stage" role="img" aria-label=""+locale.device+""><div class="laptop"><div class="laptop-screen"><div class="device-appbar"><span>▣ '+locale.brand+'</span><span>⚙</span></div><div class="device-tools">'+tiles(tools)+'</div></div><div class="laptop-base"></div></div><div class="phone"><div class="phone-notch"></div><div class="phone-screen"><div class="device-appbar"><span>'+locale.brand+'</span><span>☰</span></div><div class="device-tools">'+tiles(tools.slice(0,6))+'</div></div></div></div>';
  const hero='<section class="hero"><div class="hero-copy">'+chunks.shift()+'</div>'+device+'</section>';
  const icon=(paths)=>'<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths+'</svg>';
  const benefitItems=[
   [icon('<rect x="2" y="5" width="15" height="11" rx="2"/><path d="M7 20h5m-2-4v4"/><rect x="17" y="9" width="5" height="10" rx="1"/>'), ...locale.benefits[0]],
   [icon('<path d="M12 3v12m-4-4 4 4 4-4"/><path d="M4 17v3h16v-3"/>'), ...locale.benefits[1]],
   [icon('<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/><path d="M18 5l2 2 3-3"/>'), ...locale.benefits[2]],
   [icon('<path d="M4 4h16v16H4z"/><path d="M4 4l16 16"/><path d="M8 9h8m-8 4h4"/>'), ...locale.benefits[3]],
  ];
  const benefits='<div class="benefits" aria-label=""+locale.benefitsLabel+"">'+benefitItems.map(([symbol,title,description])=>'<div class="benefit"><span class="benefit-icon">'+symbol+'</span><p><strong>'+title+'</strong><small>'+description+'</small></p></div>').join('')+'</div>';
  const cardIcon=(kind)=>kind==='school'
  ?'<svg viewBox="0 0 32 32" width="26" height="26" style="width:26px;height:26px;display:block;flex:none" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 27V12l11-6 11 6v15"/><path d="M10 27V15h12v12M13 27v-7h6v7M3 27h26"/><path d="M14 12h4"/></svg>'
  :'<svg viewBox="0 0 32 32" width="26" height="26" style="width:26px;height:26px;display:block;flex:none" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="11" r="3"/><circle cx="22" cy="11" r="3"/><path d="M3 25v-3a7 7 0 0 1 12-5M29 25v-3a7 7 0 0 0-12-5"/><path d="m12 22 4-4 4 4m-4-4v10"/></svg>';
  const supporterGallery=language === 'cs' ? '<div class="supporter-logos" aria-label="Podporovatelé Živé tabule">'+supporterLogos.map(([file,name,url])=>
    `<a class="supporter-logo" href="${url}" target="_blank" rel="noopener noreferrer"><img src="/assets/supporters/${file}" alt="" loading="lazy"><span>${name}</span></a>`
  ).join('')+'</div>' : '';
  const sections=chunks.map((chunk,i)=>'<section class="content-section section-'+i+'">'+((language === 'cs' && (i===2||i===3))?'<div class="support-card-icon" aria-hidden="true" style="width:46px;height:46px;flex:0 0 46px;display:grid;place-items:center;overflow:hidden">'+cardIcon(i===2?'school':'company')+'</div>':'')+chunk+(i===4?supporterGallery:'')+'</section>');
  const languageDetection = international ? '<script src="/language-detection.js"></script>' : '';
  const values = { ...locale, alternates, languageDetection, links: languageLinks(language), CONTENT: hero+benefits+'<div class="content-sections">'+sections.join('')+'</div>' };
  return template.replace(/{{(\w+)}}/g, (_, key) => values[key]);
}

const supporterLogos=[
 ['zsuprkova-logo.png','ZŠ Úprkova, Hradec Králové','https://zsuprkova.cz/'],
 ['zs-kadanska-logo.png','ZŠ Kadaňská, Cheb','https://www.4zscv.cz/'],
 ['zs-brezova-logo.png','ZŠ a MŠ Březová','https://skolybrezova.eu/'],
 ['zs-kresice-logo.png','ZŠ Křešice','https://www.zskresice.cz/'],
 ['zs-ms-dolni-bela-logo.png','ZŠ a MŠ Dolní Bělá','https://www.zsamsdolnibela.cz/'],
 ['pdf-upol-logo.png','Pedagogická fakulta Univerzity Palackého','https://www.pdf.upol.cz/'],
 ['ms-trebechovicka-logo.png','MŠ Třebechovická','https://www.mstrebechovicka.cz/'],
 ['boit-logo.png','BOIT','https://boit.cz/'],
 ['khanova-skola-logo.png','Khanova škola','https://khanovaskola.cz/'],
 ['daniel-prazak-photo.jpg','Daniel Pražák','https://danielprazak.cz/']
];
await rm('dist', {recursive: true, force: true});
await mkdir('dist/assets', {recursive: true});
if (!international) {
 await mkdir('dist/assets/supporters', {recursive: true});
 for (const [file] of supporterLogos) {
  await copyFile('assets/supporters/'+file, 'dist/assets/supporters/'+file);
 }
}
for (const language of languages) {
 const folder = 'dist' + locales[language].path;
 await mkdir(folder, {recursive: true});
 await writeFile(folder+'index.html', await renderPage(language));
}
if (international) {
  await copyFile('language-detection.js', 'dist/language-detection.js');
  const supportPath = '/uk/pidtrymka/';
  const title = 'ZiwaBoard підтримує українських учителів';
  const description = 'ZiwaBoard доступний українською та безкоштовно. Користуйтеся інструментами на заняттях без реєстрації.';
  const markdown = await readFile('locales/uk-support.md', 'utf8');
  const values = {
    ...locales.uk,
    url: locales.uk.origin + supportPath,
    title,
    description,
    socialTitle: title,
    socialDescription: description,
    tagline: description,
    alternates: '',
    languageDetection: '',
    links: languageLinks('uk'),
    CONTENT: `<article class="content-section section-0">${marked.parse(markdown)}</article>`,
  };
  await mkdir('dist' + supportPath, {recursive: true});
  await writeFile('dist' + supportPath + 'index.html', template.replace(/{{(\w+)}}/g, (_, key) => values[key]));
}
await copyFile('style.css','dist/style.css');
await copyFile('assets/ziva_tabule_logo.png','dist/assets/ziva_tabule_logo.png');
console.log('Built ' + languages.join(', ') + ' in dist');

// Serve an actual robots.txt instead of the Pages HTML fallback.
await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n');
