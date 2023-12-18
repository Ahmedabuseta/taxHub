import "./Home.css";
import image from "../images/67f541fabe9cb675c89c649e827cbaaa.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Number } from "../Number";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import HaveQ from "../have_Q/haveQ";
import { useTranslation } from "react-i18next";
function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const { t } = useTranslation("Home");
  const navigate =useNavigate()
  return (
    <>
      <div data-aos="fade-up" className="container-fluid-parent home-sec">
        <div className="home-overlay">
          <div className="home-overlay-content">
            <h2 className="home-header display-3 mb-4">
              {t("herosectitle")}
              <pre className="home-header">
                &{" "}
                <h2 className="home-header display-3 text-primary d-inline">
                  {t("hero-sec-title")}
                </h2>
              </pre>
            </h2>
            <p className="fs-3 mt-3 mt-lg-5 mt-md-5 lh-1 header-p">
              {t("hero-sec-paragraph")}
            </p>
            <div className="home-btns mt-5 gap-3 d-flex flex-wrap">
              <button
                type="button"
                onClick={()=>navigate('/dashboard/requestServ')}
                className="btn btn-primary fs-5  ps-4 p-3 pe-4 home-btns fw-bold rounded-pill text-black mr-0 mr-lg-3 mr-md-3 pt-1 pb-1 pl-3 pr-3 mb-3"
              >
                {t("hero-sec-firstbtn")}
              </button>
              <button
                type="button"
                onClick={()=>navigate('/blog')}
                className="btn btn-transparent fs-5 ps-4 p-3 pe-4 home-btns fw-bold rounded-pill text-primary border-primary pt-1 pb-1 pl-3 pr-3 mb-3"
              >
                {t("hero-sec-secondbtn")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-down" className="container mx-auto mb-5 mt-5">
        <div className="stats-sec d-flex justify-content-around text-center row">
          <div className="stats-items col-12 col-md-4 col-lg-4 mb-3">
            <h3 className="stats-h display-1">
              <Number n={70} />+
            </h3>
            <p className="fs-4 stats-p fw-bold">{t("stats-sec-first")}</p>
          </div>
          <div className="stats-items col-12 col-md-4 col-lg-4 mb-3">
            <h3 className="stats-h display-1">
              <Number n={20} />+
            </h3>
            <p className="fs-4 stats-p fw-bold">{t("stats-sec-second")}</p>
          </div>
          <div className="stats-items col-12 col-md-4 col-lg-4 mb-3">
            <h3 className="stats-h display-1">
              <Number n={300} />+
            </h3>
            <p className="fs-4 stats-p fw-bold">{t("stats-sec-third")}</p>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="container d-flex align-items-center justify-content-center"
      >
        <div className="left p-5 rounded-5 border border-primary h-100">
          <h2 className="values-header mb-3 display-6 fw-500">
            {t("values-sec-header")}
          </h2>
          <p className="values-p fs-4 fw-600 lh-1 mb-5 w-75">
            {t("values-sec-paragraph")}
          </p>
          <Link to="/blog" className="fs-4 text-decoration-none">
            {t("values-sec-link")} <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="right rounded-5 "></div>
      </div>

      <div className="container services-container p-5 mt-5">
        <h4 className="services-header text-center mb-4 display-5 fw-500">
          {t("services-sec-title")}
        </h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div data-aos="fade-down-right" className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
                {t("services-sec-item 1 title")}
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
                {t("services-sec-item 1 component")}
              </p>
              <Link to="/blog" className="serv-overlay-a text-primary fs-4">
                {t("services-sec-link")}
              </Link>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">01</h2>
              </div>
            </div>
          </div>

          <div data-aos="flip-left" className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
              {t("services-sec-item 2 title")}
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
              {t("services-sec-item 2 component")}
              </p>
              <Link to="/blog" className="serv-overlay-a text-primary fs-4">
              {t("services-sec-link")}
              </Link>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">02</h2>
              </div>
            </div>
          </div>

          <div data-aos="fade-down-left" className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
              {t("services-sec-item 3 title")}
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
               {t("services-sec-item 3 component")}
              </p>
              <Link to="/blog" className="serv-overlay-a text-primary fs-4">
              {t("services-sec-link")}
              </Link>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">03</h2>
              </div>
            </div>
          </div>

          <div data-aos="fade-down-right" className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
              {t("services-sec-item 4 title")}
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
              {t("services-sec-item 4 component")}
              </p>
              <Link to="/blog" className="serv-overlay-a text-primary fs-4">
              {t("services-sec-link")}
              </Link>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">04</h2>
              </div>
            </div>
          </div>

          <div data-aos="flip-left" className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
              {t("services-sec-item 5 title")}
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
              {t("services-sec-item 5 component")}
              </p>
              <Link to="/blog" className="serv-overlay-a text-primary fs-4">
              {t("services-sec-link")}
              </Link>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">05</h2>
              </div>
            </div>
          </div>

          <div data-aos="fade-down-left"  className="col services-items">
            <div className="p-3 border border-primary rounded-4 d-flex flex-column justify-content-between serv-info h-100 ">
              <h2 className="serv-overlay-h display-7 fw-bold mb-3">
              {t("services-sec-item 6 title")}
              </h2>
              <p className="serv-overlay-p fs-6 lh-1 mb-3">
              {t("services-sec-item 6 component")}
              </p>
              <Link to="/blog" className="serv-overlay-a text-primary fs-4">
              {t("services-sec-link")}
              </Link>
              <div className="services-items-overlay p-3">
                <h2 className="nums-bg fw-bold">06</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  mt-5">
        <div className="ourclients-sec  d-flex flex-row gap-3 flex-wrap container justify-content-center  align-items-center ">
          <h2 className="clients-header col-xs-12 col-md-3">{t("clients-sec-title")}</h2>
          <div className=" justify-content-center align-items-center d-flex flex-row flex-wrap gap-3 rounded">
            <img
              data-aos="flip-left"
              className="clients-logos col-xs-12 col-md-2"
              src={image}
            />
            <img
              data-aos="flip-left"
              className="clients-logos col-xs-12 col-md-2"
              src={image}
            />
            <img
              data-aos="flip-left"
              className="clients-logos col-xs-12 col-md-2"
              src={image}
            />
            <img
              data-aos="flip-left"
              className="clients-logos col-xs-12 col-md-2"
              src={image}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <div className="blogs-sec">
          <h2 className="blogs-header fw-bold mb-4 display-5">
          {t("blogs-sec-title")}
          </h2>
          <div className="blogs-items d-flex justify-content-around flex-wrap">
            <div
              data-aos="fade-down-right"
              className="card blogs-card p-3 border border-none"
            >
              <img
                src={image}
                className="card-img-top w-100  rounded-3"
                style={{ height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title blogc-title mt-4 mb-4 fw-bold">
                  Lorem ipsum dolor sit amet
                </h5>
                <p className="card-text blogp-card mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in volu
                </p>
                <Link to="/blog" className="text-black fw-bold blog-link">
                {t("blogs-sec-link")}
                </Link>
              </div>
            </div>
            <div
              data-aos="flip-left"
              className="card blogs-card p-3 border border-none"
            >
              <img
                src={image}
                className="card-img-top w-100  rounded-3"
                style={{ height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title blogc-title mt-4 mb-4 fw-bold">
                  Lorem ipsum dolor sit amet
                </h5>
                <p className="card-text blogp-card mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in volu
                </p>
                <Link to="/blog" className="text-black fw-bold blog-link">
                {t("blogs-sec-link")}
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-down-left"
              className="card blogs-card p-3 border border-none d-none d-md-none d-sm-none d-lg-block"
            >
              <img
                src={image}
                className="card-img-top w-100 rounded-3"
                style={{ height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title blogc-title mt-4 mb-4 fw-bold">
                  Lorem ipsum dolor sit amet
                </h5>
                <p className="card-text blogp-card mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in volu
                </p>
                <Link to="/blog" className="text-black fw-bold blog-link">
                {t("blogs-sec-link")}
                </Link>
              </div>
            </div>
          </div>
          <div className="container d-flex mt-2 align-items-end flex-column">
            <Link to="/blog" className="blog-a text-black fw-bold">
              View All
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
        </div>
      </div>

      {/* <div data-aos="fade-down" className="container mb-4 mt-5 question-sec p-3  mx-auto rounded-4 d-flex justify-content-between flex-wrap col-xs-12 w-100 align-items-center ">
        <div className="quest-info">
          <h4 className="quest-h text-light display-5">Have A Question?</h4>
          <p className="quest-p text-light display-5">
            Let s Have A Talk Together
          </p>
        </div>
        <div className="questbtn ">
          <button
            type="button"
            className="quest-btn btn btn-primary fs-4 rounded-pill p-1"
          >
           <Link className="quest-btn btn btn-primary fs-4 rounded-pill p-1" to={"/contactus"}>Contact us</Link>
          </button>
        </div>
      </div> */}
      <HaveQ />
      <Footer />
    </>
  );
}

export default Homepage;
