import { Col, Row } from "react-bootstrap";
import { useTranslation } from "../i18n.tsx";
import { RevealSection } from "../hooks/useScrollReveal.tsx";

export default function Liderazgo() {
  const { t } = useTranslation();
  return (
    <Row className="row p-0 m-auto align-items-center">
      <RevealSection direction="left" delay={100} className="col-12 col-md-6 justify-content-center p-5 text-center">
        <img
          src={"https://pagina-mama.s3.amazonaws.com/assets2/elda/elda.jpg"}
          alt={String(t("pages.liderazgo.imageAlt") || "")}
          className="w-75 m-auto img-thumbnail"
          style={{
            border: "3px solid var(--color-gold)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        />
      </RevealSection>

      <RevealSection direction="right" delay={200} className="col-12 col-md-6 px-auto py-5">
        <h4 className="text-center mt-4">
          {t("pages.liderazgo.title", "Expert team, personalized service")}
        </h4>
        <div style={{
          width: "3rem",
          height: "3px",
          background: "var(--color-gold)",
          margin: "1rem auto 1.5rem auto",
        }} />
        <p style={{ textIndent: "2em", lineHeight: "1.8" }} className="mt-3">
          {t(
            "pages.liderazgo.paragraph1",
            "Scattolini Group is led by Elda Scattolini, a real estate agent with 20 years of experience in the South Florida market. Elda has helped hundreds of clients from around the world reach their real estate goals with professionalism, integrity, and dedication.",
          )}
        </p>
        <p className="text-muted" style={{ textIndent: "2em", lineHeight: "1.8" }}>
          {t(
            "pages.liderazgo.paragraph2",
            "Elda and her team are experts in South Florida, with deep knowledge of neighborhoods, schools, amenities, and market trends. They will guide you through every step of the process, from finding the right property to negotiating the best price and closing efficiently.",
          )}
        </p>
      </RevealSection>
    </Row>
  );
}
