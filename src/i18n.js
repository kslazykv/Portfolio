import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";
import translationNO from "./locales/no/translation.json";
import translationPL from "./locales/pl/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
  no: {
    translation: translationNO,
  },
  pl: {
    translation: translationPL,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
