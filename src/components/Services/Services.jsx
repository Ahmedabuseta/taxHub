import "./Services.css";
import image from "../images/hand.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Footer from "../footer/Footer";
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation("Services");

  useEffect(()=>{
    AOS.init({duration:1200})
  },[])

  return (
    <>
      <div data-aos="fade-up"  className="p-5 text-center services">
        <h2 className="mb-3">{t("ServicesTitle")}</h2>
        <h5 className="mb-3">
        {t("ServicesLable")}
        </h5>
      </div>

      <div className="container">
        <div data-aos="fade-right" className="container card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body card-info">
                <h2 className="card-title">{t("TaxServicesTitle")}</h2>

                <p className="card-text">
                {t("TaxServicesLable")}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-start img-card"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="container card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-start img-card"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body card-info">
                <h2 className="card-title">{t("AuditingServicesTitle")}</h2>
                <p className="card-text">
                {t("AuditingServicesLable")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid tow-card ">
        <div data-aos="fade-right" className=" card-one Bookkeeping">
          <div className="card-parent">
            <div className="title">
              <div className=" Bookkeeping-title">
                <h2>{t("BookkeepingServicesTitle")}</h2>

                <p>
                {t("BookkeepingServicesLable")}
                </p>
              </div>
            </div>

            <div className="title-image image-right ">
              <img src={image} className="img-card img-right" alt="..." />
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="container-fluid ">
          <div className=" card-one Investment">
            <div className="card-parent card-left">
              <div className="title">
                <div className="title-left ">
                  <h2>{t("InvestmentServicesTitle")}</h2>

                  <p>
                  {t("InvestmentServicesLable")}
                  </p>
                </div>
              </div>
              <div className="title-image img-left">
                <img className="image-left img-card" src={image} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  data-aos="fade-right" className="container card mb-3 pt-5">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body card-info">
              <h2 className="card-title">{t("SocialServicesTitle")}</h2>

              <p className="card-text">
              {t("SocialServicesLable")}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start img-card"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className="container card mb-3 pb-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start img-card"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body card-info">
              <h2 className="card-title">{t("TrainingServicesTitle")}</h2>

              <p className="card-text">
              {t("TrainingServicesLable")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Services;
