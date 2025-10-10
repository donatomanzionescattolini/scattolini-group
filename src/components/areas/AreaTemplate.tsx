import { Image } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import { Area } from "../../models/areas/Area.tsx";
import { getDesarrollosForArea } from "../../objects/desarrollos/Desarrollos.ts";

interface AreaProps {
  area: Area;
}

export default function AreaTemplate(props: AreaProps) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [area] = useState(props.area);

  const nombre = area.name;
  const titulo = area.titulo;
  const images = [];
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [areaDesarrollos] = useState<Set<Desarrollo>>(
    getDesarrollosForArea(area)
  );
  for (let i = 1; i <= area.numberOfImages; i++) {
    images.push(
      <Image
        fluid
        rounded
        src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/carousel-${i}.webp`}
      ></Image>
    );
  }
  const firstImage = `https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/firstImage.jpg`;
  return (
    <>
      <div
        className="bg-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/banner.webp')`,
          height: "30vh",
        }}
      >
        <h1 className="text-white">{titulo}</h1>
      </div>
      <div className="container-fluid text-center">
        <h2 className="text-center mt-5">{area.slogan}</h2>
        <hr className="hr hr-blurry w-50 mx-auto" />
      </div>
      <MDBRow className="px-4">
        <MDBCol md={1} sm={1} className=""></MDBCol>
        <MDBCol
          md={5}
          sm={10}
          className="py-5 px-3 d-flex flex-column justify-content-center align-items-start"
        >
          {area.descripcion.map((paragraph: string) => {
            return (
              <p
                className={"text-muted mx-3"}
                key={area.descripcion.indexOf(paragraph) + 1}
                style={{ textIndent: "1.5em" }}
              >
                {paragraph}
                <br />
                <br />
              </p>
            );
          })}
        </MDBCol>
        <MDBCol
          md={5}
          sm={10}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={firstImage} alt={`Photo ${titulo} Introductory Section`} />
        </MDBCol>
        <MDBCol className="" md={1} sm={1}></MDBCol>
      </MDBRow>
      <div className="city-firstcarousel">{images.map((image) => image)}</div>
      {/* <DividerFirstComponent /> */}
      <div className="propiedades">
        {areaDesarrollos.size > 0 && (
          <div>
            <h3 className="text-center">Propiedades en el Área</h3>
          </div>
        )}
        <br></br>
        <MDBRow>
          {[...areaDesarrollos.values()].map((desarrollo) => {
            return (
              <MDBCol
                key={[...areaDesarrollos].indexOf(desarrollo) + 1}
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
              >
                <Link to={`/desarrollos/${desarrollo.nombre}/`}>
                  <div
                    className="propiedades-img p-0 m-0"
                    style={{
                      background:
                        `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${desarrollo.nombre}.webp')`
                          .split("")
                          .filter((x) => x == " ")
                          .join(""),
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <h4 className="text-center card-title m-2 ">
                    {desarrollo.nombre
                      .split("-")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() + word.substring(1)
                      )
                      .join(" ")}
                  </h4>
                </Link>
              </MDBCol>
            );
          })}
        </MDBRow>
      </div>
      <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
    </>
  );
}
