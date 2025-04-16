import i18n from "i18next";
import React from "react";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import de from "./de.json";


const LANGUAGES = {
  en: {
    translation: en,
  },
  ar: {},
  de: {
    translation:de
  },
};

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
  fallbackLng: "en",
  defaultNS: "translation",
  ns: ["translation"],
  react:{
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});
export default i18n;