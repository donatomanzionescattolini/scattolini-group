import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "../i18n";

export default function AliadosComponent() {
  const { t } = useTranslation();

  return (
    <>
      {innerWidth <= 560 && (
        <>
          <br />
          <br />
        </>
      )}
      <br />
      <h2 className="text-center mt-5 display-6">{t("nav.aliados")}</h2>
      <hr className="hr hr-blurry w-50 mx-auto" />
      <Row
        style={{ width: "60vw", marginInline: "auto" }}
        className="p-5 d-flex flex-row flex-nowrap justify-content-center align-items-center"
      >
        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
          <Link to="#">
            <img
              src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/hue-house.png"
              alt={String(t("pages.aliados.hueHouseAlt") || "")}
              width="100%"
            />
          </Link>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
          <a href="https://www.manzionesdesign.com/">
            <img
              src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzionesdesign.png"
              alt={String(t("pages.aliados.manzioneDesignAlt") || "")}
              width="100%"
            />
          </a>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
          <a href="/manzione-properties/">
            <img
              src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzioneproperties.webp"
              alt={String(t("pages.aliados.manzionePropertiesAlt") || "")}
              width="100%"
            />
          </a>
        </Col>
      </Row>
    </>
  );
}
