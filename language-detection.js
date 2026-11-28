(() => {
  const language = document.documentElement.lang;
  const current = new URL(window.location.href);
  const destinations = new Map(
    Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]'), (link) => [
      link.hreflang, new URL(link.href),
    ]),
  );
  destinations.delete('x-default');

  const preferenceKey = 'ziwaboard-web-language';
  let preferredLanguage;
  try {
    preferredLanguage = sessionStorage.getItem(preferenceKey);
    if (language !== 'en' || current.searchParams.get('lang') === 'en') {
      sessionStorage.setItem(preferenceKey, language);
    }
  } catch {
    // Language detection also works when the browser disables session storage.
  }

  if (language !== 'en' || current.pathname !== '/' || current.searchParams.get('lang') === 'en') return;

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const detectedLanguage = browserLanguages
    .map((tag) => tag?.toLowerCase().split('-')[0])
    .find((code) => destinations.has(code));
  const selectedLanguage = destinations.has(preferredLanguage) ? preferredLanguage : detectedLanguage;
  if (!selectedLanguage || selectedLanguage === 'en') return;

  const target = destinations.get(selectedLanguage);
  current.searchParams.forEach((value, key) => target.searchParams.append(key, value));
  target.hash = current.hash;
  window.location.replace(target.href);
})();
