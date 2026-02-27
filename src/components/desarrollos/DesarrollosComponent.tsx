import { Container, Row, Col } from "react-bootstrap";
import Areas from "../../objects/areas/Areas";
import { getDesarrollosForArea } from "../../objects/desarrollos/Desarrollos";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n.tsx";
import Desarrollo from "../../models/desarrollos/Desarrollo";
import "./DesarrollosComponent.css";

export default function DesarrollosComponent() {
  const { t, lang } = useTranslation();
  const getLocalized = (field: string | Record<string, unknown> | undefined): string => {
    if (!field) return "";
    const isPlaceholder = (value: unknown) =>
      typeof value === "string" && value.trim().toLowerCase() === "latest";
    if (typeof field === "object") {
      const preferred = field[lang];
      if (preferred && !isPlaceholder(preferred)) return String(preferred);
      const spanish = field.es;
      if (spanish && !isPlaceholder(spanish)) return String(spanish);
      const firstValid = Object.values(field).find(
        (value) => value && !isPlaceholder(value)
      );
      return firstValid ? String(firstValid) : "";
    }
    if (isPlaceholder(field)) return "";
    return field;
  };

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
            <h4 className="text-center">{getLocalized(area.titulo) || area.name}</h4>
            <Row>
              {Array.from(desarr).map((desarrollo, idx: number) => {
                const dev = desarrollo as unknown as Desarrollo;
                return (
                  <Col key={dev.nombre ?? `${area.name}-${idx}`} xs={12} sm={6} md={6} lg={4} xl={4} className="gallery-item">
                    <Link to={`/desarrollos/${dev.nombre}/`}>
                      <div
                        className="gallery-card"
                        style={{
                          backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${dev.nombre}.webp')`,
                        }}
                      />
                      <h4 className="text-center">
                        {getLocalized(dev.titulo) || dev.nombre}
                      </h4>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
    </Container>
  );
}
