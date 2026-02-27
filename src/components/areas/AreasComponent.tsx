import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Areas from "../../objects/areas/Areas";
import { useTranslation } from "../../i18n.tsx";

function AreasComponent() {
  const { t, lang } = useTranslation();
  const getLocalized = (field: any) => {
    if (!field) return "";
    const isPlaceholder = (value: unknown) =>
      typeof value === "string" && value.trim().toLowerCase() === "latest";
    if (typeof field === "object") {
      const preferred = field[lang];
      if (preferred && !isPlaceholder(preferred)) return preferred;
      const spanish = field.es;
      if (spanish && !isPlaceholder(spanish)) return spanish;
      const firstValid = Object.values(field).find(
        (value) => value && !isPlaceholder(value)
      );
      return firstValid || "";
    }
    if (isPlaceholder(field)) return "";
    return field;
  };
  return (
    <Container>
      <br></br>
      <br></br>
      <div>
        <h3 className="text-center mb-1">{t("pages.areas.title")}</h3>
      </div>
      <hr className="hr hr-blurry w-50 mx-auto" />

      <Row>
        {Areas().map((area) => (
          <Col key={area.name} xs={12} sm={6} md={6} lg={4} xl={4} className="gallery-item">
            <Link to={`/areas/${area.name}/`}>
              <div
                className="gallery-card"
                style={{
                  backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/thumbnail.webp')`,
                }}
              />
              <h4 className="text-center">
                {getLocalized(area.titulo)}
              </h4>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AreasComponent;
