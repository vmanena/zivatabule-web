const installGuide = 'https://blog.zivatabule.cz/clanky/ziva-tabule-zije-i-ve-vasem-mobilu/';
const czechOrigin = 'https://web.zivatabule.cz';
const internationalOrigin = 'https://web.ziwaboard.com';

export const locales = {
  cs: {
    lang: 'cs', name: 'Čeština', brand: 'Živá tabule', origin: czechOrigin, path: '/',
    ogLocale: 'cs_CZ', app: 'https://ziwaboard.com/', appText: 'Aplikace',
    title: 'Živá tabule – nástroje pro učitele, které stojí za podporu',
    description: 'Živá tabule – praktické nástroje pro výuku bez účtu, reklam a sledování. Podpořte její provoz a rozvoj.',
    socialTitle: 'Živá tabule – praktické nástroje pro výuku',
    tagline: 'Bez účtu. Bez reklam. Bez sledování. Pro všechny zdarma.',
    socialDescription: 'Bez účtu. Bez reklam. Bez sledování. Pro všechny zdarma. Poznejte Živou tabuli a pomozte nám s jejím provozem a rozvojem.',
    logoAlt: 'Logo Živé tabule', appLabel: 'Živá tabule – aplikace',
    navLabel: 'Hlavní navigace', languageLabel: 'Jazyk webu', footer: 'Živá tabule · Pro učitele a školy',
    navLinks: '<a href="https://tipy.zivatabule.cz">Návody a inspirace</a><a href="https://blog.zivatabule.cz">Blog</a>',
    device: 'Stylizovaný náhled Živé tabule na notebooku a mobilu',
    tools: ['Hlasování', 'Časovač', 'Losování', 'Skupiny', 'QR kódy', 'Přenos souborů', 'Poznámky', 'Bzučák', 'Hodiny'],
    benefitsLabel: 'Výhody Živé tabule',
    benefits: [
      ['Funguje všude', 'Na tabuli, notebooku, tabletu i mobilu.'],
      ['Bez instalace z obchodu', `Funguje v prohlížeči. Na mobilu či tabletu ji přidáte na plochu. <a href="${installGuide}">Jak na to →</a>`],
      ['Bez registrace', 'Okamžitě a bez zbytečných kroků.'],
      ['Bez reklam', 'Čisté a přehledné prostředí.'],
    ],
  },
  en: {
    lang: 'en', name: 'English', brand: 'ZiwaBoard', origin: internationalOrigin, path: '/',
    ogLocale: 'en_GB', app: 'https://ziwaboard.com/', appText: 'Open ZiwaBoard',
    title: 'ZiwaBoard – classroom tools for teachers and trainers',
    description: 'Free classroom tools for teachers and trainers. Run polls, set timers and organise groups in your browser.',
    socialTitle: 'ZiwaBoard – practical classroom tools',
    tagline: 'No account. No ads. No tracking. Free for everyone.',
    socialDescription: 'Free classroom tools you can use in your browser, without an account.',
    logoAlt: 'ZiwaBoard logo', appLabel: 'Open the ZiwaBoard app',
    navLabel: 'Main navigation', languageLabel: 'Site language', footer: 'ZiwaBoard · For teachers and schools',
    navLinks: '',
    device: 'Illustration of ZiwaBoard on a laptop and a phone',
    tools: ['Polls', 'Timer', 'Random picks', 'Groups', 'QR codes', 'File sharing', 'Notes', 'Buzzer', 'Clock'],
    benefitsLabel: 'ZiwaBoard features',
    benefits: [
      ['Works across devices', 'Use it on a classroom display, laptop, tablet or phone.'],
      ['Runs in your browser', 'Add it to the home screen on your phone or tablet.'],
      ['No sign-up', 'Open ZiwaBoard and get started.'],
      ['Ad-free', 'A clear interface for the classroom.'],
    ],
  },
  sk: {
    lang: 'sk', name: 'Slovenčina', brand: 'Živá tabula', origin: internationalOrigin, path: '/sk/',
    ogLocale: 'sk_SK', app: 'https://ziwaboard.com/', appText: 'Otvoriť Živú tabulu',
    title: 'Živá tabula – praktické nástroje pre učiteľov a lektorov',
    description: 'Bezplatné nástroje na vyučovanie. Hlasovanie, časovač a rozdelenie do skupín priamo v prehliadači.',
    socialTitle: 'Živá tabula – praktické nástroje na vyučovanie',
    tagline: 'Bez účtu. Bez reklám. Bez sledovania. Pre všetkých zadarmo.',
    socialDescription: 'Praktické nástroje na vyučovanie zadarmo, priamo v prehliadači a bez registrácie.',
    logoAlt: 'Logo Živej tabule', appLabel: 'Otvoriť aplikáciu Živá tabula',
    navLabel: 'Hlavná navigácia', languageLabel: 'Jazyk webu', footer: 'Živá tabula · Pre učiteľov a školy',
    navLinks: '',
    device: 'Ilustrácia Živej tabule na notebooku a mobile',
    tools: ['Hlasovanie', 'Časovač', 'Žrebovanie', 'Skupiny', 'QR kódy', 'Prenos súborov', 'Poznámky', 'Bzučiak', 'Hodiny'],
    benefitsLabel: 'Výhody Živej tabule',
    benefits: [
      ['Funguje na rôznych zariadeniach', 'Na tabuli, notebooku, tablete aj mobile.'],
      ['Priamo v prehliadači', 'Na mobile alebo tablete si ju môžete pridať na plochu.'],
      ['Bez registrácie', 'Otvorte Živú tabulu a môžete začať.'],
      ['Bez reklám', 'Jednoduché a prehľadné prostredie.'],
    ],
  },
  de: {
    lang: 'de', name: 'Deutsch', brand: 'ZiwaBoard', origin: internationalOrigin, path: '/de/',
    ogLocale: 'de_DE', app: 'https://ziwaboard.com/', appText: 'ZiwaBoard öffnen',
    title: 'ZiwaBoard – praktische Werkzeuge für den Unterricht',
    description: 'Kostenlose Unterrichtswerkzeuge im Browser. Starte Abstimmungen, stelle Timer und teile Gruppen ein.',
    socialTitle: 'ZiwaBoard – praktische Unterrichtswerkzeuge',
    tagline: 'Ohne Konto. Ohne Werbung. Ohne Tracking. Kostenlos für alle.',
    socialDescription: 'Kostenlose Unterrichtswerkzeuge direkt im Browser.',
    logoAlt: 'Logo von ZiwaBoard', appLabel: 'ZiwaBoard öffnen',
    navLabel: 'Hauptnavigation', languageLabel: 'Sprache der Website', footer: 'ZiwaBoard · Für Lehrkräfte und Schulen',
    navLinks: '',
    device: 'Illustration von ZiwaBoard auf einem Laptop und einem Smartphone',
    tools: ['Abstimmung', 'Timer', 'Zufallsauswahl', 'Gruppen', 'QR-Codes', 'Dateifreigabe', 'Notizen', 'Buzzer', 'Uhr'],
    benefitsLabel: 'Vorteile von ZiwaBoard',
    benefits: [
      ['Für verschiedene Geräte', 'Am Klassendisplay, Laptop, Tablet oder Smartphone.'],
      ['Direkt im Browser', 'Auf Tablet und Smartphone kannst du ZiwaBoard zum Startbildschirm hinzufügen.'],
      ['Ohne Registrierung', 'ZiwaBoard öffnen und loslegen.'],
      ['Werbefrei', 'Eine übersichtliche Oberfläche für den Unterricht.'],
    ],
  },
  pl: {
    lang: 'pl', name: 'Polski', brand: 'ZiwaBoard', origin: internationalOrigin, path: '/pl/',
    ogLocale: 'pl_PL', app: 'https://ziwaboard.com/', appText: 'Otwórz ZiwaBoard',
    title: 'ZiwaBoard – praktyczne narzędzia do prowadzenia lekcji',
    description: 'Bezpłatne narzędzia do prowadzenia zajęć. Głosowania, minutnik i podział na grupy w przeglądarce.',
    socialTitle: 'ZiwaBoard – praktyczne narzędzia do lekcji',
    tagline: 'Bez konta. Bez reklam. Bez śledzenia. Za darmo dla wszystkich.',
    socialDescription: 'Bezpłatne narzędzia do prowadzenia zajęć prosto w przeglądarce.',
    logoAlt: 'Logo ZiwaBoard', appLabel: 'Otwórz aplikację ZiwaBoard',
    navLabel: 'Menu główne', languageLabel: 'Język strony', footer: 'ZiwaBoard · Dla nauczycieli i szkół',
    navLinks: '',
    device: 'Ilustracja przedstawiająca ZiwaBoard na laptopie i telefonie',
    tools: ['Głosowanie', 'Minutnik', 'Losowanie', 'Grupy', 'Kody QR', 'Przesyłanie plików', 'Notatki', 'Brzęczyk', 'Zegar'],
    benefitsLabel: 'Zalety ZiwaBoard',
    benefits: [
      ['Na różnych urządzeniach', 'Na tablicy interaktywnej, laptopie, tablecie i telefonie.'],
      ['Prosto w przeglądarce', 'Na telefonie lub tablecie możesz dodać ZiwaBoard do ekranu głównego.'],
      ['Bez rejestracji', 'Otwórz ZiwaBoard i zacznij korzystać.'],
      ['Bez reklam', 'Przejrzysty interfejs do pracy z klasą.'],
    ],
  },
  uk: {
    lang: 'uk', name: 'Українська', brand: 'ZiwaBoard', origin: internationalOrigin, path: '/uk/',
    ogLocale: 'uk_UA', app: 'https://ziwaboard.com/', appText: 'Відкрити ZiwaBoard',
    title: 'ZiwaBoard – практичні інструменти для занять',
    description: 'Безкоштовні інструменти для занять. Голосування, таймер і поділ на групи прямо в браузері.',
    socialTitle: 'ZiwaBoard – практичні інструменти для навчання',
    tagline: 'Без облікового запису. Без реклами. Без відстеження. Безкоштовно для всіх.',
    socialDescription: 'Безкоштовні інструменти для занять прямо в браузері.',
    logoAlt: 'Логотип ZiwaBoard', appLabel: 'Відкрити застосунок ZiwaBoard',
    navLabel: 'Головне меню', languageLabel: 'Мова сайту', footer: 'ZiwaBoard · Для вчителів і шкіл',
    navLinks: '',
    device: 'Ілюстрація ZiwaBoard на ноутбуці та телефоні',
    tools: ['Голосування', 'Таймер', 'Випадковий вибір', 'Групи', 'QR-коди', 'Обмін файлами', 'Нотатки', 'Зумер', 'Годинник'],
    benefitsLabel: 'Переваги ZiwaBoard',
    benefits: [
      ['На різних пристроях', 'На інтерактивній дошці, ноутбуці, планшеті й телефоні.'],
      ['Прямо в браузері', 'На телефоні або планшеті можна додати ZiwaBoard на головний екран.'],
      ['Без реєстрації', 'Відкрийте ZiwaBoard і починайте роботу.'],
      ['Без реклами', 'Зрозумілий інтерфейс для роботи в класі.'],
    ],
  },
};

for (const locale of Object.values(locales)) {
  locale.url = locale.origin + locale.path;
}

export function languageLinks(language) {
  return `<nav class="language-nav" aria-label="${locales[language].languageLabel}">${Object.values(locales).map((locale) => {
    const href = locale.origin === locales[language].origin ? locale.path : locale.url;
    const current = locale.lang === language ? ' aria-current="page"' : '';
    return `<a href="${href}" lang="${locale.lang}" hreflang="${locale.lang}"${current}>${locale.name}</a>`;
  }).join('')}</nav>`;
}

export const alternates = Object.values(locales)
  .map((locale) => `<link rel="alternate" hreflang="${locale.lang}" href="${locale.url}">`)
  .join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${locales.en.url}">`;
