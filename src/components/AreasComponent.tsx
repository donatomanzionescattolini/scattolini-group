import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { desarrolloMap} from "../objects/desarrollos/Desarrollos.ts";
import { useTranslation } from "../i18n.tsx";

export default function AreasComponent(): React.ReactElement {
  const { t } = useTranslation();
  const lang = (localStorage.getItem("lang") as string) || "es";
  const getLocalized = (field: any) => {
    if (!field) return "";
    if (typeof field === "object") return field[lang] || field.es || Object.values(field)[0] || "";
    return field;
  };

  const areas = [...desarrolloMap.values()].map((x: any) => x.area);

  return (
    <Container>
      <br />
      <br />
      <div>
        <h3 className="text-center mb-1">{t("areas.title", "Áreas")}</h3>
      </div>
      <hr className="hr hr-blurry w-50 mx-auto" />

      <Row>
        {areas.map((area) => (
          <Col key={area.name} xs={12} sm={12} md={6} lg={4} xl={4}>
            <Link to={`/areas/${area.name}/`}>
              <div
                className="propiedades-img p-0 m-0"
                style={{
                  background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/thumbnail.webp')`,
                  backgroundSize: "cover",
                }}
              />

              <h4 className="text-center card-title m-2">{getLocalized(area.titulo)}</h4>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
