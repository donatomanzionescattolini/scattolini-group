import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Areas from "../../objects/areas/Areas";
import { useTranslation } from "../../i18n.tsx";

function AreasComponent() {
  const { t, lang } = useTranslation();
  const getLocalized = (field: any) => {
    if (!field) return "";
    if (typeof field === "object") return field[lang] || field.es || Object.values(field)[0] || "";
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
          <Col key={area.name} xs={12} sm={12} md={6} lg={4} xl={4}>
            <Link to={`/areas/${area.name}/`}>
              <div
                className="propiedades-img p-0 m-0 w-100"
                style={{
                  background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/thumbnail.webp')`,
                  backgroundSize: "cover",
                }}
              ></div>

              <h4 className="text-center card-title m-2 ">
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
