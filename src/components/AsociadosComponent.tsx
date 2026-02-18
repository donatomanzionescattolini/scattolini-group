import "material-components-web/dist/material-components-web.css";
import "./Asociados.scss";
import "mdb-ui-kit/css/mdb.min.css";
import { Link } from "react-router-dom";
import Asociados from "../objects/asociados/Asociados";
import { useTranslation } from "../i18n.tsx";

export default function Equipo() {
  const { t } = useTranslation();
  return (
    <section
      id="asociados"
      className="m-5 p-5 mt-0 pt-0 container-sm mx-auto justify-content-center"
    >
      <div className="page-header">
        
        <h1 className="text-center mt-5 display-6">{t("pages.asociados.title")}</h1>
        <hr className="hr hr-blurry w-50 mx-auto mb-5" />
      </div>
      <div className="row active-with-click">
        {Asociados().map((asociado) => (
          <div className="col-md-4 col-sm-6 col-xs-12">
            <article className="material-card Pink">
              <h2>
                <span>{asociado.firstName + " " + asociado.lastName}</span>
                <strong>
                  {/* <i className="fa fa-fw fa-star" /> */}
                  {asociado.role}
                </strong>
              </h2>
              <div className="mc-content">
                <div className="img-container w-80 h-100 mx-auto p-n-5">
                  <img
                   
              
                    className="img-fluid object-fit-cover w-100 m-0 p-0  h-100"
                    src={`https://pagina-mama.s3.amazonaws.com/assets2/asociados/${asociado.firstName
                      .split(" ")
                      .join("-")
                      .toLowerCase()}-transparent-bg.png`}
                    
                    alt={asociado.firstName+" " + asociado.lastName}
                  />
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
      <div>
        {innerWidth > 650 && (
          <iframe
            width="320"
            height="1000"
            src="https://www.instagram.com/scattolinigroup/embed/"
            frameBorder={1}
            autoFocus
          ></iframe>
        )}
        {innerWidth < 650 && (
          <iframe
            width="320"
            height="400"
            src="https://www.instagram.com/scattolinigroup/embed/"
            frameBorder={1}
            autoFocus
          ></iframe>
        )}
      </div>
    </section>
  );
}
