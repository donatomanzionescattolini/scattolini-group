import React from "react";
import Areas from "../../objects/areas/Areas";
import { getDesarrollosForArea } from "../../objects/desarrollos/Desarrollos";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n.tsx";
import { Col, Container, Row } from "react-bootstrap";

export default function DesarrollosComponent() {
  const { t } = useTranslation();

  const areas = Areas();

  return (
    <Container>
      <br />
      <div>
        <h3 className="text-center mb-1">{t("pages.desarrollos.title")}</h3>
      </div>
      <hr className="hr hr-blurry w-50 mx-auto" />

      {areas.map((area) => {
        const desarr = getDesarrollosForArea(area) ?? new Set();
        return (
          <div key={area.name} className="mb-5">
            <h4 className="text-center">{area.name}</h4>
            <Row>
              {[...desarr].map((desarrollo: any, idx: number) => (
                <Col key={desarrollo.nombre ?? `${area.name}-${idx}`} xs={12} sm={12} md={6} lg={4} xl={4}>
                  <Link to={`/desarrollos/${desarrollo.nombre}/`}>
                    <div
                      className="propiedades-img p-0 m-0"
                      style={{
                        background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${desarrollo.nombre}.webp')`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <h5 className="text-center mt-2">{desarrollo.nombre}</h5>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        );
      })}
    </Container>
  );
}
