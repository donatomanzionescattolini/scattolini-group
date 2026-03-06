import "bootstrap/dist/css/bootstrap.min.css";
import "@material/banner/dist/mdc.banner.min.css";

import { isValidElement, ReactNode, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { resolveLocalizedValue, useTranslation } from "../../i18n.tsx";
import { Accordion, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProjectParams } from "../../models/desarrollos/ProjectParams.tsx";
import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import ContactFormComponent from "../../components/ContactFormComponent.tsx";
import AreasComponent from "../../components/AreasComponent.tsx";
import { getDesarrollosForArea } from "../../objects/desarrollos/Desarrollos.ts";
import SlideshowGalleryDesarrollo from "./SlideshowGalleryDesarrollo.tsx";

type LocalizedCharacteristics = {
  edificio?: ReactNode;
  residencias?: ReactNode;
  amenidades?: ReactNode;
};

function hasRenderableContent(content: ReactNode): boolean {
  if (content === null || content === undefined || content === false) return false;
  if (typeof content === "string") return content.trim().length > 0;
  if (typeof content === "number") return true;
  if (Array.isArray(content)) return content.some(hasRenderableContent);
  if (isValidElement(content)) return hasRenderableContent(content.props.children);
  return false;
}

export default function ProjectTemplate({ desarrollo }: ProjectParams) {
  const { t, lang } = useTranslation();
  const params = useMemo<Desarrollo>(
    () => (typeof desarrollo === "function" ? desarrollo(lang) : desarrollo),
    [desarrollo, lang]
  );

  const {
    nombre,
    area,
    video,
    banner,
    titulo,
    slogan,
    introduccion,
    numberOfImages,
    caracteristicas,
  } = params;

  const desarrollosArea = useMemo(
    () => getDesarrollosForArea(area, lang),
    [area, lang]
  );
  const [tabVisible, setTabVisible] = useState("brochure");
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const videoUrl =
    video ||
    `https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/video.mp4`;

  const getLocalizedString = (
    field: string | Record<string, string | undefined> | undefined | null,
    fallback = ""
  ) => resolveLocalizedValue<string>(field ?? undefined, lang) || fallback;

  const getLocalizedArray = (
    field: string[] | Record<string, string[] | undefined> | undefined | null,
    fallback: string[] = []
  ) => resolveLocalizedValue<string[]>(field ?? undefined, lang) || fallback;

  const getLocalizedCharacteristics = (
    field:
      | LocalizedCharacteristics
      | Record<string, LocalizedCharacteristics | undefined>
      | undefined
      | null
  ) => resolveLocalizedValue<LocalizedCharacteristics>(field ?? undefined, lang);

  const localizedTitulo = getLocalizedString(titulo, nombre);
  const localizedSubtitulo = getLocalizedString(slogan);
  const localizedAreaTitle = getLocalizedString(area?.titulo, area?.name || "");
  const paragraphs = getLocalizedArray(introduccion).filter(
    (paragraph) => paragraph.trim().length > 0
  );
  const localizedCaracteristicas = getLocalizedCharacteristics(caracteristicas);
  const characteristicSections = [
    {
      key: "edificio",
      title: t("pages.project.edificio", "Edificio"),
      content: localizedCaracteristicas?.edificio,
    },
    {
      key: "residencias",
      title: t("pages.project.residencias", "Residencias"),
      content: localizedCaracteristicas?.residencias,
    },
    {
      key: "amenidades",
      title: t("pages.project.amenidades", "Amenidades"),
      content: localizedCaracteristicas?.amenidades,
    },
  ].filter((section) => hasRenderableContent(section.content));

  useEffect(() => {
    const onResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="top">
        <Container
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
              alt={`${t("pages.project.bannerAlt", "Project banner")}: ${localizedTitulo || nombre}`}
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
        </Container>
      </div>
      <div className="skew-c"></div>

      <section className="colour-block">
        <Container>
          <h2 className=" text-center animate-charcter">{localizedTitulo}</h2>

          <hr className="hr hr-blurry w-50 mx-auto" />
          {localizedSubtitulo && <h4 className="mt-0 text-center">{localizedSubtitulo}</h4>}
          {area && localizedAreaTitle && (
            <div className="text-center mb-3">
              <Link
                to={`/areas/${area.name}/`}
                className="text-muted text-decoration-none"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-map-marker-alt me-1"></i>
                {t("pages.project.locatedIn", "Located in")}
                <b>&nbsp;{localizedAreaTitle}</b>
              </Link>
            </div>
          )}
          <div className="p-xl-5 p-lg-5 p-md-4 p-sm-4 p-xs-3 text-justify responsive">
            <div className="mx-lg-5 mx-xl-5 mx-md-1 mx-sm-1 mx-xs-1 px-5 font-16 text-center">
              {paragraphs.map((par: string, idx: number) => (
                <p key={`intro-${idx}`}>{par}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <div className="skew-cc"></div>

      <section className="white-block">
        <div className="project-video-wrapper">
          <div className="project-video-inner">
            {typeof videoUrl !== "string" ? (
              videoUrl
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
                className="mx-auto my-0 p-0"
              >
                <source src={videoUrl} type="video/mp4" />
                {t(
                  "common.videoNotSupported",
                  "Your browser does not support the video tag."
                )}
              </video>
            )}
          </div>
        </div>
      </section>

      <section className="colour-block">
        <Container>
          <br />
          <div>
            <h3 className="text-center">
              {t("pages.project.caracteristicas", "Características")}
            </h3>
          </div>
          <hr className="hr hr-blurry w-50 mx-auto" />

          {characteristicSections.length > 0 && (
            <Accordion id="accordion" className="m-5 w-fit-content">
              {characteristicSections.map((section, idx) => (
                <Accordion.Item eventKey={String(idx)} key={section.key}>
                  <Accordion.Header>{section.title}</Accordion.Header>
                  <Accordion.Body>{section.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          )}
        </Container>
      </section>
      <div className="skew-cc"></div>

      <section className="white-block" id="galeria-proyectos">
        <Container>
          <br></br>
          <div>
            <h3 className="text-center">
              {t("pages.project.galeria", "Galería Fotográfica")}
            </h3>
          </div>
          <hr className="hr hr-blurry w-50 mx-auto" />
          <br></br>

          <SlideshowGalleryDesarrollo
            name={nombre}
            numberOfImages={numberOfImages as number}
          />
        </Container>
      </section>
      <div className="skew-c"></div>

      <section className="colour-block">
        <Container className="embed-responsive small responsive centered">
          <br></br>
          <div>
            <h3 className="text-center">
              {t("pages.project.pdfUI.documentsTitle")}
            </h3>
          </div>
          <hr className="hr hr-blurry w-50 mx-auto" />

          <br></br>
          <Tab.Container
            activeKey={tabVisible}
            onSelect={(k) => k && setTabVisible(k)}
          >
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="brochure" style={{ color: "#2b2a2e" }}>
                  {t("pages.project.pdf.brochure")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hoja" style={{ color: "#2b2a2e" }}>
                  {t("pages.project.pdf.hoja")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="planos" style={{ color: "#2b2a2e" }}>
                  {t("pages.project.pdf.planos")}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="brochure">
                <div className="pdf-container text-center">
                  <object
                    data={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/brochure.pdf`}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                  >
                    <div className="pdf-fallback p-5 bg-light rounded">
                      <i className="fas fa-file-pdf fa-4x text-danger mb-3 d-block"></i>
                      <p className="mb-3">
                        {t("pages.project.pdfUI.cantDisplay")}
                      </p>
                      <a
                        href={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/brochure.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                      >
                        <i className="fas fa-download me-2"></i>
                        {t("pages.project.pdfUI.downloadBtn")} Brochure
                      </a>
                    </div>
                  </object>
                  <div className="mt-3">
                    <a
                      href={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/brochure.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      {t("pages.project.pdfUI.downloadBtn")}
                    </a>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="hoja">
                <div className="pdf-container text-center">
                  <object
                    data={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/hoja.pdf`}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                  >
                    <div className="pdf-fallback p-5 bg-light rounded">
                      <i className="fas fa-file-pdf fa-4x text-danger mb-3 d-block"></i>
                      <p className="mb-3">
                        {t("pages.project.pdfUI.cantDisplay")}
                      </p>
                      <a
                        href={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/hoja.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                      >
                        <i className="fas fa-download me-2"></i>
                        {t("pages.project.pdfUI.downloadBtn")} {t("pages.project.pdf.hoja")}
                      </a>
                    </div>
                  </object>
                  <div className="mt-3">
                    <a
                      href={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/hoja.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      {t("pages.project.pdfUI.downloadBtn")}
                    </a>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="planos">
                <div className="pdf-container text-center">
                  <object
                    data={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/planos.pdf`}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                  >
                    <div className="pdf-fallback p-5 bg-light rounded">
                      <i className="fas fa-file-pdf fa-4x text-danger mb-3 d-block"></i>
                      <p className="mb-3">
                        {t("pages.project.pdfUI.cantDisplay")}
                      </p>
                      <a
                        href={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/planos.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                      >
                        <i className="fas fa-download me-2"></i>
                        {t("pages.project.pdfUI.downloadBtn")} {t("pages.project.pdf.planos")}
                      </a>
                    </div>
                  </object>
                  <div className="mt-3">
                    <a
                      href={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/planos.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      {t("pages.project.pdfUI.downloadBtn")}
                    </a>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
      <div className="skew-cc"></div>

      <section className="white-block">
        <Container>
          <br />
          <br></br>
          <div>
            <h3 className="text-center mb-1">
              {t("pages.project.propertiesInArea")}
            </h3>
          </div>
          <hr className="hr hr-blurry w-50 mx-auto" />

          <br></br>
          <Row className="justify-content-center">
            {[...desarrollosArea.values()].map((desarrollo, idx) => (
              <Col
                key={desarrollo.nombre ?? idx}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="gallery-item"
              >
                <Link to={`/desarrollos/${desarrollo.nombre}/`}>
                  <div
                    className="gallery-card"
                    style={{
                      backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${desarrollo.nombre}.webp')`,
                    }}
                  />
                  <h4 className="text-center">
                    {getLocalizedString(desarrollo.titulo) ||
                      (desarrollo.nombre || "")
                        .split("-")
                        .map((word: string, wordIdx: number) => (
                          <span key={`word-${wordIdx}`}>
                            {word.charAt(0).toUpperCase() + word.substring(1)}{" "}
                          </span>
                        ))}
                  </h4>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
        <br></br>
      </section>
      <div className="skew-c"></div>

      <section className="colour-block">
        <AreasComponent />
      </section>
      <div className="skew-cc"></div>

      <section className="white-block">
        <h2>{t("pages.project.contactUsToday")}</h2>
        {innerWidth <= 768 && (
          <Container>
            <ContactFormComponent />
          </Container>
        )}
        {innerWidth > 768 && (
          <Container
            fluid
            className="d-flex justify-content-center w-100 p-0 m-0"
          >
            <ContactFormComponent />
          </Container>
        )}
      </section>
      <div className="skew-c"></div>
    </>
  );
}
