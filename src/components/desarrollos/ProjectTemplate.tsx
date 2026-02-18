import "bootstrap/dist/css/bootstrap.min.css";
import SlideshowGalleryDesarrollo from "./SlideshowGalleryDesarrollo";
import "@material/banner/dist/mdc.banner.min.css";

import { JSX, ReactNode, useLayoutEffect, useState } from "react";
import { useTranslation } from "../../i18n.tsx";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import {
  caracteristicas,
  ProjectParams,
} from "../../models/desarrollos/ProjectParams.tsx";
import ContactFormComponent from "../../components/ContactFormComponent.tsx";
import AreasComponent from "../../components/AreasComponent.tsx";
import { getDesarrollosForArea } from "../../objects/desarrollos/Desarrollos.ts";
import * as React from "react";

export default function ProjectTemplate(paramz: ProjectParams) {
  const { t, lang } = useTranslation();
  const params = paramz.desarrollo;
  const [nombre] = useState(params.nombre);
  const [area] = useState(params.area);
  const [desarrollosArea] = useState(getDesarrollosForArea(area));
  const [numberOfImages] = useState(params.numberOfImages);
  const [tabVisible, setTabVisible] = useState("brochure");
  const vid: string | ReactNode = params.video
    ? params.video
    : `https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/video.mp4`;
  const [video] = useState<string | JSX.Element>(vid as JSX.Element);

  const [caract] = useState(params.caracteristicas as caracteristicas);
  const [banner] = useState(params.banner);
  // compute localized values for titulo and subtitulo to avoid passing Record types into JSX
  const getLocalized = (field: any) => {
    if (!field) return "";
    if (typeof field === "object") {
      return field[lang] || field["es"] || Object.values(field)[0] || "";
    }
    return field;
  };
  const localizedTitulo: string = String(getLocalized(params.titulo));
  const localizedSubtitulo: string = String(getLocalized(params.slogan));
  const bannerAlt = String(t("pages.project.bannerAlt")).replace("{title}", localizedTitulo || nombre);
  const [introduccion] = useState(params.introduccion);
  const [CaracteristicasAmenidades] = useState(() => caract.amenidades);
  const [CaracteristicasEdificio] = useState(() => caract.edificio);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [CaracteristicasResidencias] = useState(() => caract.residencias);
  const [pdfUrl] = useState(
    `https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`
  );
  window.onresize = () => {
    setInnerWidth(window.innerWidth);
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function openTab(docType: string) {
    switch (docType) {
      case "brochure":
        tabVisible === "brochure"
          ? setTabVisible("none")
          : setTabVisible("brochure");
        break;

      case "hoja":
        tabVisible === "hoja" ? setTabVisible("none") : setTabVisible("hoja");
        break;
      case "planos":
        tabVisible === "planos"
          ? setTabVisible("none")
          : setTabVisible("planos");
        break;
      default:
        setTabVisible("none");
        break;
    }
  }

  return (
    <>
      <a id="top" href="#top">
        <MDBContainer
          fluid
          id={"banner"}
          className={"jumbotron"}
          style={{ height: "fit-content" }}
        >
          {banner && (
            <img
              src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner.jpg`}
              width="100%"
              height="auto"
              alt={bannerAlt}
            />
          )}

          {!banner && (
            <>
              <div
                autoFocus
                className="col-4 m-0 p-0 responsive"
                style={{
                  height: "250px",
                  backgroundImage: `url(../../..https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner-left.jpg)`,
                  backgroundSize: "cover",
                }}
              />
              <div
                autoFocus
                style={{
                  height: "250px",
                  backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner-center.jpg')`,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                  backgroundPositionY: "top",
                }}
                className="col-4"
              />
              <div
                autoFocus
                style={{
                  height: "250px",
                  backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner-right.jpg')`,
                  backgroundSize: "cover",
                }}
                className="col-4 m-0 p-0 responsive"
              />
            </>
          )}
        </MDBContainer>
      </a>
      <div className="skew-c"></div>

      <section className="colour-block">
        <MDBContainer>
          {innerWidth < 768 && (
            <div>
              <br />
              <br />
              <br />
            </div>
          )}
          <h2 className=" text-center animate-charcter" style={{}}>
            {localizedTitulo}
          </h2>

          <hr className="hr hr-blurry w-50 mx-auto" />
          {<h4 className="mt-0 text-center">{localizedSubtitulo}</h4>}
          <div className="p-xl-5 p-lg-5 p-md-4 p-sm-4 p-xs-3    text-justify responsive">
            <div className=" mx-lg-5 mx-xl-5 mx-md-1 mx-sm-1 mx-xs-1 px-5 font-16 text-center">
              {(introduccion as Array<string>).map((par: string, idx: number) => (
                <p key={`intro-${idx}`}>{par}</p>
              ))}
            </div>
          </div>
        </MDBContainer>
      </section>
      <div className="skew-cc"></div>
      <section className="white-block">
        {typeof video !== "string" || !video ? (
          video
        ) : (
          <video
            width="auto"
            height="500"
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="mx-auto my-0 p-0 d-flex flex-row justify-content-center"
          >
            <source
              src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/video.mp4`}
              type="video/mp4"
            />
            {t("common.videoUnsupported")}
          </video>
        )}
      </section>
      <div className="skew-c"></div>
      <section className="colour-block">
        <MDBContainer className="embed-responsive small responsive centered">
          <br></br>
          <div>
            <h3 className="text-center">{t("pages.project.pdfUI.documentsTitle")}</h3>
          </div>
          <hr className="hr hr-blurry w-50 mx-auto" />

          <br></br>
          <MDBTabs>
            <MDBTabsItem
              style={{ color: "#2b2a2e!important" }}
              title={t("pages.project.pdf.brochure")}
            >
              <MDBTabsLink onClick={() => openTab("brochure")} href="#docs">
                {" "}
                {t("pages.project.pdf.brochure")}
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                style={{ color: "#2b2a2e!important" }}
                onClick={() => openTab("hoja")}
                href="#docs"
              >
                {t("pages.project.pdf.hoja")}
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                style={{ color: "#2b2a2e!important" }}
                aria-keyshortcuts=""
                href="#docs"
                onClick={() => openTab("planos")}
              >
                {t("pages.project.pdf.planos")}
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
          {/*{tabVisible === "none" &&*/}
          {/*    (<><h1 className="display-6 text-center"><small className={"text-muted "}>Aprenda mas sobre este maravilloso proyecto!</small></h1>*/}
          {/*    <br></br>*/}
          {/*    <h1 className="display-3 text-center">Selecciona una de las fichas en la esquina izquierda de esta seccion </h1></>)*/}
          {/*}*/}
          {/* {(tabVisible === "brochure" ||
            tabVisible === "hoja" ||
            tabVisible === "planos") && (
            <object
              height={"100%"}
              //   {/* const file =
              //   fs.readFileSync(path.resolve("public/assets/Bonus_1.pdf")).toString("base64"); */}

          {/* <PDFV
              //     url={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}

        {/* <embed
              //     src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
              //     width="800px"
              //     height="2100px" */}
          {/* //   /> */}
          {/* // </object> */}
          {/* data={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
              style={{ width: "100%", height: 500 }}
            > */}
          <MDBTabsContent>
            <MDBTabsPane show={tabVisible === "brochure"}>
              <object
                data={pdfUrl}
                type="application/pdf"
                width="100%"
                height="500px"
              >
                <big>
                  <p>
                    {t("pages.project.pdfUI.cantDisplay")}{" "}
                    <Link
                      target="_blank"
                      className="text-decoration-underline"
                      download
                      to={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                    >
                      {t("pages.project.pdfUI.download")}
                    </Link>{" "}
                    {t("pages.project.pdfUI.instead")}
                  </p>
                </big>
              </object>
            </MDBTabsPane>
            <MDBTabsPane show={tabVisible === "hoja"}>
              <object
                data={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                type="application/pdf"
                width="100%"
                height="500px"
              >
                <big>
                  <p>
                    {t("pages.project.pdfUI.cantDisplay")}{" "}
                    <Link
                      target="_blank"
                      className="text-decoration-underline"
                      download
                      to={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                    >
                      {t("pages.project.pdfUI.download")}
                    </Link>{" "}
                    {t("pages.project.pdfUI.instead")}
                  </p>
                </big>
              </object>
            </MDBTabsPane>
            <MDBTabsPane show={tabVisible === "planos"}>
              <object
                data={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                type="application/pdf"
                width="100%"
                height="500px"
              >
                <big>
                  <p>
                    {t("pages.project.pdfUI.cantDisplay")}{" "}
                    <Link
                      target="_blank"
                      className="text-decoration-underline"
                      download
                      to={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                    >
                      {t("pages.project.pdfUI.download")}
                    </Link>{" "}
                    {t("pages.project.pdfUI.instead")}
                  </p>
                </big>
              </object>
            </MDBTabsPane>
            <MDBTabsPane show>
              <div className="d-flex justify-content-center font-size-lg">
                <Link
                  className="btn btn-outline-secondary btn-small"
                  type="button"
                  target="#top"
                  to={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                  download
                >
                  {t("pages.project.pdfUI.downloadBtn")}
                </Link>
              </div>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </section>
      <div className="skew-cc"></div>
      <section className="white-block">
        <MDBContainer>
          <br />
          <br></br>
          <div>
            <h3 className="text-center mb-1">{t("pages.project.propertiesInArea")}</h3>
          </div>
          <hr className="hr hr-blurry w-50 mx-auto" />

          <br></br>
          {/*<MDBRow className="d-flex flex-row flex-wrap justify-content-between mt-3 mx-auto">*/}

          {/*    {[...desarrollosArea].map((des) => {*/}
          {/*        return (<MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>*/}
          {/*            <MDBCard>*/}
          {/*                <MDBCardHeader><MDBCardTitle>{des.titulo}</MDBCardTitle></MDBCardHeader>*/}
          {/*                <MDBCardSubTitle>{des.subtitulo}</MDBCardSubTitle>*/}
          {/*                <MDBCardImage className="img-thumbnail img-fluid"*/}
          {/*                              src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${des.nombre}.webp)`}></MDBCardImage>*/}

          {/*            </MDBCard>*/}
          {/*        </MDBCol>);*/}
          {/*    })}*/}

          {/*</MDBRow>*/}
          <MDBRow>
            {[...desarrollosArea.values()].map((desarrollo, idx) => {
              return (
                <MDBCol key={desarrollo.nombre ?? idx} xs={12} sm={12} md={6} lg={4} xl={4}>
                  <Link to={`/desarrollos/${desarrollo.nombre}/`}>
                    <div
                      className="propiedades-img p-0 m-0"
                      style={{
                        background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${desarrollo.nombre}.webp')`,
                        backgroundSize: "cover",
                      }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">
                      {getLocalized(desarrollo.titulo) || (desarrollo.nombre || "").split("-").map((word, idx) => (
                        <span key={`word-${idx}`}>{word.charAt(0).toUpperCase() + word.substring(1)} </span>
                      ))}
                    </h4>
                  </Link>
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer>
        {/* <div> */}
        {/* <h3 className="text-center">Otras Áreas</h3> */}
        {/* </div> */}
        <br></br>
      </section>
      <div className="skew-c"></div>
      <section className="colour-block">
        <AreasComponent />
      </section>
      <div className="skew-cc"></div>
      <section className="white-block">
          <h2 className={""}>{t("pages.project.contactUsToday")}</h2>
        {innerWidth <= 768 && (
          <MDBContainer>

            <ContactFormComponent />
          </MDBContainer>
        )}
        {innerWidth > 768 && (
          <MDBContainer
            fluid
            className="d-flex justify-content-center w-100 p-0 m-0"
          >

            <ContactFormComponent  />
          </MDBContainer>
        )}
      </section>
      <div className="skew-c"></div>
    </>
  );
}
