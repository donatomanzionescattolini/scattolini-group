import {AboutUs} from "./AboutUs";

import {MDBContainer} from "mdb-react-ui-kit";
import React, {useState} from "react";
import Aliados from "./components/Aliados";
import EquipoSmall from "./components/EquipoSmall";
import Quotes from "./components/Quotes";
import Servicios from "./components/Servicios";
import Areas from "./components/areas/Areas";
import DesarrollosTodos from "./components/desarrollos/Desarrollos";
import Quote, {quotes} from "./models/Quote";

export function Home() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    const [quotez] = useState<Quote[]>(quotes);
    return (
        <>
            <MDBContainer fluid jumbotron>
                <div className="video-container">
                    <video autoPlay loop muted playsInline className={" m-0 p-0"}>
                        <source
                            src="https://dl.dropboxusercontent.com/scl/fi/p4z5pf694a2cak5xb2317/Untitled-design.mp4?rlkey=do953fp93h931w0zfigtnlbzl&dl=0&autoPlay=true"
                            type="video/mp4"
                        />
                    </video>
                    <div className="overlay"></div>

                    <div className="content text-center ">
                        <h1 className="display-2">SCATTOLINI GROUP</h1>
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
                <AboutUs/>
            </section>
            {/* <div> */}
            {/* <h3 className="text-center">Otras Áreas</h3> */}
            {/* </div> */}
            <div className="skew-c"></div>

            <section className="colour-block">
                <Areas/>
            </section>

            <div className="skew-cc"></div>
            <section className="white-block">
                <MDBContainer>
                    <EquipoSmall/>
                </MDBContainer>
            </section>
            <div className="skew-c"></div>
            {/* <DividerSecond /> */}
            <br/>
            <section className="colour-block">
                <MDBContainer>
                    <Servicios/>
                </MDBContainer>
                <br/>
            </section>
            <div className="skew-cc"></div>
            <section className="white-block">
                <MDBContainer>
                    <DesarrollosTodos/>
                </MDBContainer>
            </section>
            <div className="skew-c"></div>
            <section className="colour-block">
                <MDBContainer>
                    <Aliados/>
                </MDBContainer>
            </section>
            <div className="skew-cc"></div>
            <section className="white-block">
                <Quotes quotes={quotez}/>
            </section>
        </>
    );
}
