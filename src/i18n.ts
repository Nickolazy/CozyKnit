import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import enMenu from "./locales/en/menu.json"
import ruMenu from "./locales/ru/menu.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { menu: enMenu },
      ru: { menu: ruMenu }
    },
    lng: "ru",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  })

export default i18n
