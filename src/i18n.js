// i18n.js
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Homearabic from './Languages/homepage Arabic.json';
import Homeen from './Languages/homepage English.json';
import ServicesArbicar from "./Languages/Services_Arbic.json"
import ServicesEnglish from"./Languages/Services_English.json"
import BlogsEnglish from"./Languages/Blogsen.json"
import Blogsarabic from"./Languages/Blogsar.json"
import contactEnglish from"./Languages/Contactusen.json"
import contactarabic from"./Languages/contactusar.json"
import loginar from"./Languages/Loginar.json"
import loginen from"./Languages/Lpginen.json"
import signupen from"./Languages/Signupen.json"
import signupar from"./Languages/Signupar.json"
import aboutar from"./Languages/Aboutar.json"
import abouten from "./Languages/Abouten.json"
import haveQEn from "./Languages/haveQEn.json"
import haveQAr from "./Languages/haveQAr.json"

const resources = {
  en: {
    Home: Homeen,
    Services:ServicesEnglish,
    Blogs:BlogsEnglish,
    Contact:contactEnglish,
    login:loginen,
    Signu:signupen,
    about:abouten,
    haveQ:haveQEn
  },
  ar: {
    Home: Homearabic,
    Services:ServicesArbicar,
    Blogs:Blogsarabic,
    Contact:contactarabic,
    login:loginar,
    Signu:signupar,
    about:aboutar,
    haveQ:haveQAr

  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
