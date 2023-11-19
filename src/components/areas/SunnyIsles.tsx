import {MDBRow,} from "mdb-react-ui-kit";

import {Image} from "react-bootstrap";

import PropiedadesSunnyIsles from "../desarrollos/SunnyIsles/PropiedadesSunnyIsles";

export default function SunnyIsles() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">SunnyIsles</h2>
                </div>
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">
                        El Lujo y la Relajación Te Esperan
                    </h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">
                        <p className="text-muted ">
                            <small>
                                Sunny Isles, Florida, es un destino ideal para inversionistas y
                                otros compradores que buscan una oportunidad de negocio en el
                                sector inmobiliario. Esta ciudad costera ofrece una variedad de
                                propiedades de lujo, desde condominios hasta casas
                                unifamiliares, con vistas espectaculares al océano Atlántico y a
                                la bahía de Biscayne. Sunny Isles también cuenta con una
                                excelente ubicación, cerca de las principales atracciones
                                turísticas, culturales y comerciales de Miami. Además, Sunny
                                Isles tiene una baja tasa de criminalidad, una alta calidad de
                                vida y una diversa comunidad de residentes. No pierda la
                                oportunidad de invertir en Sunny Isles, Florida, una ciudad que
                                lo tiene todo.
                            </small>
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/firstsection.webp"
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
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-1.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-2.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-3.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-4.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-5.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-6.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-7.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-8.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-9.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-10.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-11.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-12.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-13.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-14.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-15.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-16.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/sunny-isles/carousel-17.webp"
                ></Image>
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>

                <br></br>
                <MDBRow>
                    <PropiedadesSunnyIsles></PropiedadesSunnyIsles>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
