import { AboutUs } from "./AboutUs";

import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React, { useEffect, useLayoutEffect, useState } from "react";
import AliadosComponent from "./components/AliadosComponent.tsx";
import AsociadosSmallComponent from "./components/AsociadosSmallComponent.tsx";
import Quotes from "./components/Quotes";
import Servicios from "./components/Servicios";
import AreasComponent from "./components/areas/AreasComponent.tsx";
import DesarrollosTodos from "./components/desarrollos/DesarrollosComponent.tsx";
import Quote, { quotes } from "./models/Quote";
import FloatingContactFormComponent from "./components/FloatingContactFormComponent.tsx";

export function Home() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useLayoutEffect(() => {
    window.resizeTo(0, 0);
  });
  // State variable to store the visibility of the floating element
  const [show, setShow] = useState(true);

  // Function to toggle the visibility of the floating element
  const toggleShow = () => {
    setShow(!show);
  };

  const [quotez] = useState<Quote[]>(quotes);
  return (
    <>
      {/* {show && (
        <div
          className={"floating-element object-fit-cover"}
          style={{ background: "rgb(255,255,255,0.0)" }}
        >
          <MDBBtn className="close-button" onClick={toggleShow} type={"button"}>
            Close
          </MDBBtn>
          {/* <FloatingContactFormComponent /> */}
        {/* </div> */}
      {/* )} */}
      <MDBContainer fluid jumbotron>
        <div className="video-container">
          <video autoPlay loop muted playsInline className={" m-0 p-0"}>
            <source
              src="https://pagina-mama.s3.amazonaws.com/assets2/video-homepage.mp4"
              type="video/mp4"
            />
          </video>
          <div className="overlay"></div>

          <div className="content text-center ">
            <h1 className="display-2" id="hero-heading">SCATTOLINI GROUP</h1>
            <p className="lead" id="hero-subheading">
              Agencia Inmobiliaria
            </p>
            <a
              className="btn btn-large btn-outline-secondary mt-3"
              href="mailto:elda.scattolini@scattolinigroup.com"
            >
              Contáctanos Hoy
            </a>
          </div>
        </div>
      </MDBContainer>
      {width < 768 && <br></br>}
      <section className="white-block pb-0 mb-0 pt-5">
        <AboutUs />
      </section>
      {/* <div> */}
      {/* <h3 className="text-center">Otras Áreas</h3> */}
      {/* </div> */}
      <div className="skew-c"></div>

      <section className="colour-block">
        <AreasComponent />
      </section>

      <div className="skew-cc"></div>
      <section className="white-block">
        <MDBContainer>
          <AsociadosSmallComponent />
        </MDBContainer>
      </section>
      <div className="skew-c"></div>
      {/* <DividerSecondComponent /> */}
      <br />
      <section className="colour-block">
        <MDBContainer>
          <Servicios />
        </MDBContainer>
        <br />
      </section>
      <div className="skew-cc"></div>
      <section className="white-block">
        <MDBContainer>
          <DesarrollosTodos />
        </MDBContainer>
      </section>
      <div className="skew-c"></div>
      <section className="colour-block">
        <MDBContainer>
          <AliadosComponent />
        </MDBContainer>
      </section>
      <div className="skew-cc"></div>
      <section className="white-block">
        <Quotes quotes={quotez} />
      </section>
    </>
  );
}
