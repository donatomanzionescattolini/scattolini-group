import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Areas from "../../objects/areas/Areas";
import { getDesarrollosForArea } from "../../objects/desarrollos/Desarrollos";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n.tsx";

export default function DesarrollosComponent() {
  const { t, lang } = useTranslation();
  const getLocalized = (field: any) => {
    if (!field) return "";
    if (typeof field === "object") return field[lang] || field.es || Object.values(field)[0] || "";
    return field;
  };

  const areas = Areas();

  return (
    <MDBContainer>
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
            <MDBRow>
              {[...desarr].map((desarrollo: any, idx: number) => (
                <MDBCol key={desarrollo.nombre ?? `${area.name}-${idx}`} xs={12} sm={12} md={6} lg={4} xl={4}>
                  <Link to={`/desarrollos/${desarrollo.nombre}/`}>
                    <div
                      className="propiedades-img p-0 m-0"
                      style={{
                        background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${desarrollo.nombre}.webp')`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <h5 className="text-center mt-2">
                      {getLocalized(desarrollo.titulo) || desarrollo.nombre}
                    </h5>
                  </Link>
                </MDBCol>
              ))}
            </MDBRow>
          </div>
        );
      })}
    </MDBContainer>
  );
}
