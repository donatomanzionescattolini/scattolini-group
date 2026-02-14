import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Areas from "../../objects/areas/Areas";
import { useTranslation } from "../../i18n.tsx";

function AreasComponent() {
  const { t } = useTranslation();
  return (
    <MDBContainer>
      <br></br>
      <br></br>
      <div>
        <h3 className="text-center mb-1">{t("pages.areas.title")}</h3>
      </div>
      <hr className="hr hr-blurry w-50 mx-auto" />

      <MDBRow>
        {Areas().map((area) => (
          <MDBCol key={area.name} xs={12} sm={12} md={6} lg={4} xl={4}>
            <Link to={`/areas/${area.name}/`}>
              <div
                className="propiedades-img p-0 m-0 w-100"
                style={{
                  background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/thumbnail.webp')`,
                  backgroundSize: "cover",
                }}
              ></div>

              <h4 className="text-center card-title m-2 ">
                {typeof area.titulo === 'string' ? area.titulo : area.titulo.es}
              </h4>
            </Link>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default AreasComponent;
