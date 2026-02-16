import "bootstrap/dist/css/bootstrap.min.css";
import SlideshowGalleryDesarrollo from "./SlideshowGalleryDesarrollo.tsx";

import React, { ReactNode, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import ContactFormComponent from "../ContactFormComponent.tsx";
import { caracteristicas, ProjectParams } from "../../models/desarrollos/ProjectParams.tsx";
import { useTranslation } from "../../i18n.tsx";
import AreasComponent from "../AreasComponent.tsx";

export default function ProjectTemplate(paramz: ProjectParams) {
  const { t, lang } = useTranslation();
  const params =
    typeof (paramz.desarrollo as any)?.getLocalizedContent === "function"
      ? (paramz.desarrollo as any).getLocalizedContent(lang)
      : paramz.desarrollo;
  const [nombre] = useState(params.nombre);
  const [area] = useState(params.area);
  const [numberOfImages] = useState(params.numberOfImages);
  const [tabVisible, setTabVisible] = useState("brochure");
  const [video] = useState(params.video);

  const [caract] = useState(params.caracteristicas as caracteristicas);
  const [banner] = useState(params.banner);
  const [introduccion] = useState(params.introduccion);

  const getLocalized = (field: any) => {
    if (!field) return "";
    if (typeof field === "object")
      return field[lang] || field.es || Object.values(field)[0] || "";
    return field;
  };
  const titulo = String(getLocalized(params.titulo));
  const subtitulo = String(getLocalized(params.subtitulo) || getLocalized(params.slogan));

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function openTab(docType: string) {
    setTabVisible((prev) => (prev === docType ? "none" : docType));
  }

  return (
    <>
      <a id="top" href="#top">
        <Container className="banner-container" style={{ height: "fit-content" }}>
          {banner && (
            <img
              src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner.jpg`}
              width="100%"
              height="auto"
              alt={`Banner ${titulo || nombre}`}
            />
          )}
        </Container>
      </a>

      <section className="colour-block">
        <Container>
          <h2 className="text-center">{titulo}</h2>
          <hr className="hr hr-blurry w-50 mx-auto" />
          <h4 className="mt-0 text-center">{subtitulo}</h4>

          <div className="p-xl-5 p-lg-5 p-md-4 p-sm-4 p-xs-3 text-justify responsive">
            <div className="mx-lg-5 mx-xl-5 mx-md-1 mx-sm-1 mx-xs-1 px-5 font-16 text-center">
              {(introduccion as Array<string> || []).map((par: string, idx: number) => (
                <p key={`intro-${idx}`}>{par}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="white-block">
        <Container>
          {video ? (
            video
          ) : (
            <video
              width="auto"
              height={500}
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="mx-auto d-block"
            >
              <source
                src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/video.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </Container>
      </section>

      <section className="colour-block">
        <Container>
          <h3 className="text-center">{t("pages.project.caracteristicas")}</h3>
          <hr className="hr hr-blurry w-50 mx-auto" />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{t("pages.project.edificio")}</Accordion.Header>
              <Accordion.Body>{caract?.edificio}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{t("pages.project.residencias")}</Accordion.Header>
              <Accordion.Body>{caract?.residencias}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{t("pages.project.amenidades")}</Accordion.Header>
              <Accordion.Body>{caract?.amenidades}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section className="white-block" id="galeria-proyectos">
        <Container>
          <h3 className="text-center">{t("pages.project.galeria")}</h3>
          <SlideshowGalleryDesarrollo name={nombre} numberOfImages={numberOfImages as number} />
        </Container>
      </section>

      <section className="white-block">
        <Container>
          <h3 className="text-center mb-1">{t("pages.project.propertiesInArea")}</h3>
          <hr className="hr hr-blurry w-50 mx-auto" />
          <Row>
            {[...((paramz.desarrollo.area?.desarrollos) || [])].map((des: any, idx: number) => {
              const localizedDes =
                typeof des?.getLocalizedContent === "function"
                  ? des.getLocalizedContent(lang)
                  : des;
              return (
              <Col key={localizedDes.nombre ?? idx} xs={12} sm={12} md={6} lg={4} xl={4}>
                <Link to={`/desarrollos/${localizedDes.nombre}/`}>
                  <div
                    className="propiedades-img p-0 m-0"
                    style={{
                      background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area?.name}/${localizedDes.nombre}.webp')`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <h4 className="text-center card-title m-2">
                    {String(getLocalized(localizedDes.titulo) || localizedDes.nombre)
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </h4>
                </Link>
              </Col>
            )})}
          </Row>
        </Container>
      </section>

      <section className="white-block">
        <Container>
          <h2>{t("pages.project.contactUsToday")}</h2>
          <ContactFormComponent />
        </Container>
      </section>
    </>
  );
}
