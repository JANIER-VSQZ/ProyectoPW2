import i18next from 'https://cdn.jsdelivr.net/npm/i18next@23.7.6/+esm';
import LanguageDetector from 'https://cdn.jsdelivr.net/npm/i18next-browser-languagedetector@7.2.0/+esm';

async function initI18n() {
  const [enRes, esRes] = await Promise.all([
    fetch('/locales/en/translation.json').then(res => res.json()),
    fetch('/locales/es/translation.json').then(res => res.json())
  ]);

  i18next
    .use(LanguageDetector)
    .init({
      resources: {
        en: { translation: enRes },
        es: { translation: esRes }
      },
      fallbackLng: 'es',
      detection: {
        order: ['navigator', 'htmlTag'],
        caches: ['localStorage', 'cookie']
      }
    }, function(err, t) {
      // Detect location and change language
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          let lng = 'es';
          if (data.country_code === 'US' || data.country_code === 'GB' || data.country_code === 'CA') {
            lng = 'en';
          }
          i18next.changeLanguage(lng, updateContent);
        })
        .catch(() => {
          updateContent();
        });
    });
}

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = i18next.t(key);
  });
}

window.changeLanguage = function(lng) {
  i18next.changeLanguage(lng, updateContent);
};

initI18n();