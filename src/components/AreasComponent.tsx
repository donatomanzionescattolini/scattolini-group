import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { desarrolloMap} from "../objects/desarrollos/Desarrollos.ts";
import { useTranslation } from "../i18n.tsx";

export default function AreasComponent(): React.ReactElement {
  const { t, lang } = useTranslation();
  const getLocalized = (field: any) => {
    if (!field) return "";
    if (typeof field === "object") return field[lang] || field.es || Object.values(field)[0] || "";
    return field;
  };

  const areas = [...desarrolloMap.values()].map((x: any) => x.area);

  return (
    <MDBContainer>
      <br />
      <br />
      <div>
        <h3 className="text-center mb-1">{t("pages.areas.title")}</h3>
      </div>
      <hr className="hr hr-blurry w-50 mx-auto" />

      <MDBRow>
        {areas.map((area) => (
          <MDBCol key={area.name} xs={12} sm={12} md={6} lg={4} xl={4}>
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
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
