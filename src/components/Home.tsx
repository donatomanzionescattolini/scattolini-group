import { useEffect, useLayoutEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AboutUs } from "../AboutUs";
import { useTranslation } from "../i18n";
import { quotes } from "../models/Quote";
import Quote from "../models/Quote";
import AliadosComponent from "./AliadosComponent";
import AreasComponent from "./AreasComponent";
import AsociadosSmallComponent from "./AsociadosSmallComponent";
import Quotes from "./Quotes";
import Servicios from "./Servicios";
import DesarrollosComponent from "./desarrollos/DesarrollosComponent";

export function Home() {
  const { t } = useTranslation();
  const [width, setWidth] = useState(window.innerWidth);
  const [quotez] = useState<Quote[]>(quotes);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container fluid>
        <div className="video-container">
          <video autoPlay loop muted playsInline className="m-0 p-0">
            <source src="https://pagina-mama.s3.amazonaws.com/assets2/video-homepage.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>

          <div className="content text-center">
            <h1 className="display-2" id="hero-heading">
              {t("hero.title", "SCATTOLINI GROUP")}
            </h1>
            <p className="lead" id="hero-subheading">
              {t("hero.subtitle", "Real Estate Agency")}
            </p>
            <a className="btn btn-large btn-outline-secondary mt-3" href="mailto:elda.scattolini@scattolinigroup.com">
              {t("hero.cta", "Contact us today")}
            </a>
          </div>
        </div>
      </Container>

      {width < 768 && <br />}
      <section className="white-block pb-0 mb-0 pt-5">
        <AboutUs />
      </section>
      <div className="skew-c"></div>

      <section className="colour-block">
        <AreasComponent />
      </section>

      <div className="skew-cc"></div>
      <section className="white-block">
        <Container>
          <AsociadosSmallComponent />
        </Container>
      </section>
      <div className="skew-c"></div>
      <br />
      <section className="colour-block">
        <Container>
          <Servicios />
        </Container>
        <br />
      </section>
      <div className="skew-cc"></div>
      <section className="white-block">
        <Container>
          <DesarrollosComponent />
        </Container>
      </section>
      <div className="skew-c"></div>
      <section className="colour-block">
        <Container>
          <AliadosComponent />
        </Container>
      </section>
      <div className="skew-cc"></div>
      <section className="white-block">
        <Quotes quotes={quotez} />
      </section>
    </>
  );
}
