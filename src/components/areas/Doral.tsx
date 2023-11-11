
import {MDBRow,} from "mdb-react-ui-kit";

import {Image} from "react-bootstrap";

import Areas from "./Areas";

export default function Doral() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage: "url('/assets2/areas/doral/banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">Doral</h2>
                </div>
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">¡Vive, Trabaja, Aprende y Juega!</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">
                        <p className="text-muted ">
                            <small>
                                El lema de la ciudad de Doral es “¡vive, trabaja, aprende y
                                juega!”, pues la ciudad se esfuerza por ofrecer a sus residentes
                                y visitantes una alta calidad de vida a través de la entrega de
                                un gobierno eficiente, sostenible, transparente, ético y
                                responsable. Ubicada en el centro-norte del condado de
                                Miami-Dade, Florida, Doral está situada a 5 millas (8 km) al
                                oeste del Aeropuerto Internacional de Miami. Su nombre proviene
                                del famoso resort de golf y spa que se encuentra dentro de sus
                                límites municipales. Doral es una ciudad próspera y diversa, con
                                una gran población venezolana que le da un toque sudamericano a
                                su cultura y gastronomía. Doral también ofrece a sus residentes
                                y visitantes una variedad de opciones de compras y
                                entretenimiento, hermosos parques y campos de golf de primera
                                clase. <br></br>
                                <br></br>
                                Además de su vibrante cultura y emocionantes opciones de
                                entretenimiento, Doral también es conocida por su liderazgo en
                                tecnología y sostenibilidad. La ciudad ha implementado un plan
                                general de Ciudad Inteligente para realizar inversiones en
                                tecnología que permitan una ciudad de próxima generación, tanto
                                económica como ambientalmente. Esto incluye la entrega de
                                servicios centrados en el ciudadano y oportunidades económicas y
                                sociales para sus residentes, visitantes y empresas . Doral
                                también cuenta con un Sistema de Información Geográfica (GIS)
                                que analiza y muestra información geográficamente referenciada .
                                ¡Invertir en bienes raíces en Doral es una excelente oportunidad
                                para formar parte de una ciudad moderna y en constante
                                evolución! <br></br>
                                <br></br>
                            </small>
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src="/assets2/areas/doral/firstsection.webp"
                                className="w-100 img-responsive align-self-center justify-self-center m-auto"
                                alt=""
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="city-firstcarousel">
                <Image fluid rounded src="/assets2/areas/doral/carousel-1.webp"></Image>

                <Image fluid rounded src="/assets2/areas/doral/carousel-2.webp"></Image>

                <Image fluid rounded src="/assets2/areas/doral/carousel-3.webp"></Image>

                <Image fluid rounded src="/assets2/areas/doral/carousel-4.webp"></Image>
                <Image fluid rounded src="/assets2/areas/doral/carousel-5.webp"></Image>

                <Image fluid rounded src="/assets2/areas/doral/carousel-6.webp"></Image>

                <Image fluid rounded src="/assets2/areas/doral/carousel-7.webp"></Image>

                <Image fluid rounded src="/assets2/areas/doral/carousel-8.webp"></Image>
                <Image fluid rounded src="/assets2/areas/doral/carousel-9.webp"></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/doral/carousel-10.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/doral/carousel-11.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/doral/carousel-12.webp"
                ></Image>
                {/*<Image fluid rounded src="/assets2/areas/doral/carousel-13.webp"></Image>
       <Image fluid rounded src="/assets2/areas/doral/carousel-14.webp"></Image>
       <Image fluid rounded src="/assets2/areas/doral/carousel-15.webp"></Image>
       <Image fluid rounded src="/assets2/areas/doral/carousel-16.webp"></Image>
       <Image fluid rounded src="/assets2/areas/doral/carousel-17.webp"></Image>
       <Image fluid rounded src="/areas/areas/doral/carousel-18.webp"></Image> */}
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                {/* <div>
          <h3 className="text-center">Propiedades en el Área</h3>
        </div> */}
                {/*

        <br></br> */}
                <MDBRow>
                    <Areas/>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
