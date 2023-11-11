import {MDBRow,} from "mdb-react-ui-kit";

import {Image} from "react-bootstrap";

import PropiedadesCoralGables from "../desarrollos/CoralGables/PropiedadesCoralGables";

export default function CoralGables() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage: "url('/assets2/areas/coral-gables/banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">Coral Gables</h2>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">La Ciudad Hermosa</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">
                        <div className="m-5">
                            <p className="text-muted" style={{textIndent: "2em"}}>
                                Ubicada a 7 millas (11 km) al suroeste del centro de Miami,
                                Coral Gables es conocida por sus avenidas bordeadas de árboles,
                                sus mansiones cubiertas de hiedra y sus lugares históricos, como
                                el mundialmente famoso Hotel Biltmore y la piscina Venetian. No
                                es en vano la llamen “La Ciudad Hermosa”, pues su pintoresca
                                arquitectura de estilo mediterráneo, exuberante vegetación,
                                experiencias de compras y restaurantes de clase mundial hacen de
                                Coral Gables un destino turístico popular.
                            </p>
                            <p className="text-muted text-align-justify">
                                Coral Gables también goza de un clima cálido durante todo el año
                                y es donde la Universidad de Miami tiene su encantador campus,
                                un lugar rodeado de pinos perfecto para aquellos que buscan una
                                educación superior.
                            </p>
                            <p className="text-muted text-align-justify">
                                En resumen, Coral Gables es una de las mejores ciudades para
                                vivir en Florida y ofrece a sus residentes una mezcla de
                                ambiente urbano y suburbano. La mayoría de los residentes son
                                propietarios de sus viviendas que echaron raices entre los
                                restaurantes, cafeterías y parques en la ciudad.
                            </p>
                            <p className="text-muted text-align-justify"></p>
                            <br></br>
                            <p className="text-muted text-center">
                                ¡No pierdas la oportunidad de invertir en bienes raíces en esta
                                hermosa ciudad!
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <picture className="w-sm-90 p-0 m-0">
                            <img
                                src="/assets2/areas/coral-gables/firstsection.webp"
                                className="w-100 img-responsive align-self-center justify-self-center m-auto"
                                alt=""
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="city-firstcarousel">
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-1.jpg"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-2.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-3.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-4.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-5.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-6.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-7.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-8.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-9.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-10.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/coral-gables/carousel-11.webp"
                ></Image>
                {/*<Image fluid rounded src="/assets2/areas/coral-gables/carousel-12.jpg"></Image>
       <Image fluid rounded src="/assets2/areas/coral-gables/carousel-13.webp"></Image>
       <Image fluid rounded src="/assets2/areas/coral-gables/carousel-14.jpg"></Image> */}
                {/*<Image fluid rounded src="/assets2/areas/coral-gables/carousel-15.webp"></Image>
       <Image fluid rounded src="/assets2/areas/coral-gables/carousel-16.webp"></Image>
       <Image fluid rounded src="/assets2/areas/coral-gables/carousel-17.webp"></Image>
       <Image fluid rounded src="/areas/areas/coral-gables/carousel-18.webp"></Image> */}
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>

                <br></br>
                <MDBRow className="d-flex flex-row flex-wrap">
                    <PropiedadesCoralGables></PropiedadesCoralGables>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
