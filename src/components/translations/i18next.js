import  i18next  from "i18next";
import { initReactI18next } from "react-i18next";
import admin_addnewblog_ar from './admin_addnewblog_ar.json'
import admin_addnewblog_en from './admin_addnewblog_en.json'
import Homearabic from './homepage Arabic.json';
import Homeen from './homepage English.json';
import ServicesArbicar from "./Services_Arbic.json"
import ServicesEnglish from"./Services_English.json"
import BlogsEnglish from"./Blogsen.json"
import Blogsarabic from"./Blogsar.json"
import contactEnglish from"./Contactusen.json"
import contactarabic from"./contactusar.json"
import loginar from"./Loginar.json"
import loginen from"./Lpginen.json"
import signupen from"./Signupen.json"
import signupar from"./Signupar.json"
import aboutar from"./Aboutar.json"
import abouten from "./Abouten.json"
import haveQEn from "./haveQEn.json"
import haveQAr from "./haveQAr.json"
import navAr   from "./navAr.json"
import navEn   from "./navEn.json"

const languageResources={
    en:{
        translation:admin_addnewblog_en,
        Home: Homeen,
        Services:ServicesEnglish,
        Blogs:BlogsEnglish,
        Contact:contactEnglish,
        login:loginen,
        Signu:signupen,
        about:abouten,
        haveQ:haveQEn,
        nav:navEn
    },
    ar:{
        translation:admin_addnewblog_ar,
        Home: Homearabic,
        Services:ServicesArbicar,
        Blogs:Blogsarabic,
        Contact:contactarabic,
        login:loginar,
        Signu:signupar,
        about:aboutar,
        haveQ:haveQAr,
        nav:navAr
    }
}
i18next.use(initReactI18next)
.init({
    resources:languageResources,
    lng:"en",
});
export default i18next;