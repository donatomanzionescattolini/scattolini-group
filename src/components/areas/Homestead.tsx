import {MDBRow,} from "mdb-react-ui-kit";

import {Image} from "react-bootstrap";

import PropiedadesHomestead from "../desarrollos/Homestead/PropiedadesHomestead";

export default function Homestead() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage: "url('/assets2/areas/homestead/banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">Homestead</h2>
                </div>
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">Descubre las Oportunidades</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ps-5 pe-5 pb-2">
                        <br></br>
                        <h5>La Puerta de Entrada al Parque Nacional de los Everglades</h5>
                        <br></br>
                        <p>
                            Homestead es un lugar hermoso para vivir y trabajar, con días
                            soleados y una temperatura promedio de 75 grados. Ubicado a solo
                            treinta millas al norte de Miami, una de las ciudades más
                            vibrantes y culturalmente ricas del país, Homestead ofrece lo
                            mejor de ambos mundos: la tranquilidad de una pequeña ciudad con
                            todas las comodidades de una gran ciudad.
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src="/assets2/areas/homestead/firstsection.webp"
                                className="w-100 img-responsive align-self-center justify-self-center m-auto"
                                alt="Homestead City Center"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="city-firstcarousel">
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-1.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-2.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-3.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-4.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-5.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-6.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-7.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-8.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-9.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-10.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/homestead/carousel-11.webp"
                ></Image>
                {/*<Image fluid rounded src="/assets2/areas/homestead/carousel-12.webp"></Image>
       <Image fluid rounded src="/assets2/areas/homestead/carousel-13.webp"></Image> */}
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>

                <br></br>
                <MDBRow>
                    <PropiedadesHomestead></PropiedadesHomestead>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
