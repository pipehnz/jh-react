import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const languages = ['es', 'en'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    whitelist: languages
  });

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('..', true, /i18n\.(js|ts)$/));

export default i18n;
