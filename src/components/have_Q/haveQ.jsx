 import React from 'react'
 import "../Homepage/Home.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function HaveQ() {
    const {t} =useTranslation("haveQ")
    return (
        <div data-aos="fade-down" className="container mb-4 mt-5 question-sec p-3  mx-auto rounded-4 d-flex justify-content-between flex-wrap col-xs-12 w-100 align-items-center ">
            <div className="quest-info">
                <h4 className="quest-h text-light display-5">{t("question-sec-title")}</h4>
                <p className="quest-p text-light display-5">
                {t("question-sec-p")}
                </p>
            </div>
            <div className="questbtn ">
                <button
                    type="button"
                    className="quest-btn btn btn-primary fs-4 rounded-pill p-1"
                >
                <Link 
                className="quest-btn btn btn-primary fs-5 rounded-pill p-3 ps-4 pe-4" 
                to="/contactUs">
                    {t("contact btn")}
                </Link>
                </button>
            </div>
        </div>
    )
 }
 
 export default HaveQ
 