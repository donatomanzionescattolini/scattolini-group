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
import { RevealSection, useScrollReveal } from "./hooks/useScrollReveal.tsx";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="stat-item text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

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
      {/* ── Hero ── */}
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

          {/* Scroll-down indicator */}
          <a href="#stats" className="scroll-down-indicator" aria-label="Scroll down">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </Container>

      {/* ── Sticky sub-navigation ── */}
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

      {/* ── Stats ── */}
      <section className="colour-block stats-section" id="stats">
        <Container>
          <RevealSection direction="fade">
            <div className="stats-grid">
              <StatItem value={20} suffix="+" label={t("stats.experience", "Years of Experience") as string} delay={0} />
              <StatItem value={500} suffix="+" label={t("stats.clients", "Happy Clients") as string} delay={150} />
              <StatItem value={1000} suffix="+" label={t("stats.properties", "Properties Sold") as string} delay={300} />
              <StatItem value={11} suffix="+" label={t("stats.areas", "Areas Served") as string} delay={450} />
            </div>
          </RevealSection>
        </Container>
      </section>

      {/* ── About Us ── */}
      {/* <TrustSignals /> */}
      {width < 768 && <br></br>}
      <div className="skew-cc"></div>
      <section className="white-block" id="about-us">
        <RevealSection direction="up">
          <AboutUs />
        </RevealSection>
      </section>

      {/* ── Areas ── */}
      {/* <div> */}
      {/* <h3 className="text-center">Otras Áreas</h3> */}
      {/* </div> */}
      <div className="skew-c"></div>
      <section className="colour-block" id="areas">
        <RevealSection direction="fade">
          <AreasComponent />
        </RevealSection>
      </section>

      {/* ── Associates ── */}
      <div className="skew-cc"></div>
      <br></br>
      <section className="white-block" id="associates">
        <Container>
          <RevealSection direction="up">
            <AsociadosSmallComponent />
          </RevealSection>
        </Container>
      </section>

      {/* ── Services ── */}
      <div className="skew-c"></div>
      {/* <DividerSecondComponent /> */}
      <section className="colour-block" id="services">
        <Container>
          <RevealSection direction="left">
            <Servicios />
          </RevealSection>
        </Container>
        <br />
      </section>

      {/* ── Developments ── */}
      <div className="skew-cc"></div>
      <section className="white-block" id="projects">
        <Container>
          <RevealSection direction="right">
            <DesarrollosTodos />
          </RevealSection>
        </Container>
      </section>

      {/* ── Allies ── */}
      <div className="skew-c"></div>
      <section className="colour-block" id="allies">
        <Container>
          <RevealSection direction="left" delay={100}>
            <AliadosComponent />
          </RevealSection>
        </Container>
      </section>

      {/* ── Testimonials ── */}
      <div className="skew-cc"></div>
      <section className="white-block" id="quotes-section">
        <RevealSection direction="up" delay={50}>
          <Quotes quotes={quotez} />
        </RevealSection>
      </section>
      <div className="skew-c"></div>
    </>
  );
}

export default Home;
