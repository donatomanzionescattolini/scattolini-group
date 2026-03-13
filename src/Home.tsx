import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AboutUs } from "./AboutUs";
import AliadosComponent from "./components/AliadosComponent.tsx";
import AsociadosSmallComponent from "./components/AsociadosSmallComponent.tsx";
import Quotes from "./components/Quotes";
import Servicios from "./components/Servicios.tsx";
import AreasComponent from "./components/areas/AreasComponent.tsx";
import DesarrollosTodos from "./components/desarrollos/DesarrollosComponent.tsx";
import Quote, { quotes } from "./models/Quote";
import { useTranslation } from "./i18n.tsx";

export function Home() {
  const { t } = useTranslation();
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const [quotez] = useState<Quote[]>(quotes);
  return (
    <>
      <style>
        {`
          .sticky-subnav {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(5px);
            border-bottom: 1px solid #eee;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
          }
          .subnav-link {
            color: #555;
            text-decoration: none;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 1rem 0.5rem;
            transition: color 0.3s;
          }
          .subnav-link:hover {
            color: #8a6944;
          }
          @media (max-width: 768px) {
            .sticky-subnav .container {
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: thin;
            }
            .sticky-subnav .container > div {
              flex-wrap: nowrap !important;
              justify-content: flex-start !important;
              min-width: max-content;
              gap: 0.35rem;
            }
            .subnav-link {
              font-size: 0.75rem;
              padding: 0.8rem 0.7rem;
              white-space: nowrap;
              min-height: 44px;
              display: inline-flex;
              align-items: center;
            }
          }
        `}
      </style>
      <Container fluid className="jumbotron">
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={" m-0 p-0"}
            preload="auto"
          >
            <source
              src="https://pagina-mama.s3.amazonaws.com/assets2/video-homepage.mp4"
              type="video/mp4"
            />
            <source
              src="https://pagina-mama.s3.amazonaws.com/assets2/video-homepage.mp4"
              type="video/webm"
            />
            {t("common.videoUnsupported")}
          </video>
          <div className="overlay"></div>

          <div className="content text-center ">
            <h1 className="display-2" id="hero-heading">
              {t("hero.title")}
            </h1>
            <p className="lead" id="hero-subheading">
              {t("hero.subtitle")}
            </p>
            {/*<p className="hero-tagline">{t("hero.tagline")}</p>*/}
            <div className="hero-ctas d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
              <a
                className="btn btn-hero-primary"
                href="https://wa.me/13056139338?text=Hola,%20me%20interesa%20información%20sobre%20propiedades"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="btn btn-hero-outline"
                href="mailto:elda.scattolini@scattolinigroup.com"
              >
                <i className="fas fa-envelope me-2"></i>
                {t("hero.cta")}
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="sticky-subnav">
        <Container>
          <div className="d-flex justify-content-around flex-wrap">
            <a href="#about-us" className="subnav-link">{t("nav.liderazgo")}</a>
            <a href="#areas" className="subnav-link">{t("nav.areas")}</a>
            <a href="#associates" className="subnav-link">{t("nav.asociados")}</a>
            <a href="#services" className="subnav-link">{t("nav.servicios")}</a>
            <a href="#projects" className="subnav-link">{t("nav.desarrollos")}</a>
            <a href="#allies" className="subnav-link">{t("nav.aliados")}</a>
            <a href="#quotes-section" className="subnav-link">{t("nav.quotes")}</a>
          </div>
        </Container>
      </div>
      {/* <TrustSignals /> */}
      {width < 768 && <br></br>}
      <section className="white-block pb-0 mb-0 pt-5" id="about-us">
        <AboutUs />
      </section>
      {/* <div> */}
      {/* <h3 className="text-center">Otras Áreas</h3> */}
      {/* </div> */}
      <div className="skew-c"></div>

      <section className="colour-block" id="areas">
        <AreasComponent />
      </section>

      <div className="skew-cc"></div>
      <section className="white-block" id="associates">
        <Container>
          <AsociadosSmallComponent />
        </Container>
      </section>
      <div className="skew-c"></div>
      {/* <DividerSecondComponent /> */}
      <br />
      <section className="colour-block" id="services">
        <Container>
          <Servicios />
        </Container>
        <br />
      </section>
      <div className="skew-cc"></div>
      <section className="white-block" id="projects">
        <Container>
          <DesarrollosTodos />
        </Container>
      </section>
      <div className="skew-c"></div>
      <section className="colour-block" id="allies">
        <Container>
          <AliadosComponent />
        </Container>
      </section>
      <div className="skew-cc"></div>
      <section className="white-block" id="quotes-section">
        <Quotes quotes={quotez} />
      </section>
    </>
  );
}

export default Home;
