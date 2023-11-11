import {MDBRow,} from "mdb-react-ui-kit";

import {Image} from "react-bootstrap";

import PropiedadesEdgewater from "../desarrollos/Edgewater/PropiedadesEdgewater";

export default function Edgewater() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage: "url('/assets2/areas/edgewater/banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">Edgewater</h2>
                </div>
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">La Ciudad de la Hospitalidad</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">
                        <p className="text-muted ">
                            <small>
                                Descubre Edgewater, Florida, una ciudad en crecimiento con una
                                ubicación privilegiada en la costa este de Florida. Conocida
                                como ‘La Ciudad de la Hospitalidad’, Edgewater ofrece un
                                ambiente acogedor y amigable para aquellos que buscan comprar
                                una casa o invertir en bienes raíces. Con fácil acceso a las
                                playas y atracciones cercanas, esta ciudad ofrece un estilo de
                                vida relajado y tranquilo.
                                <br></br>
                                <br></br>
                                Edgewater, Florida también es conocida por sus propiedades de
                                lujo. Hay muchas opciones disponibles para aquellos que buscan
                                invertir en bienes raíces de alta gama en esta hermosa ciudad
                                costera . Desde casas nuevas y modernas con vistas al río hasta
                                propiedades con amplios terrenos y comodidades de lujo, hay algo
                                para todos los gustos y presupuestos. ¡No pierda la oportunidad
                                de invertir en una propiedad de lujo en Edgewater!
                            </small>
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src="/assets2/areas/edgewater/firstsection.webp"
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
                    src="/assets2/areas/edgewater/carousel-1.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-2.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-3.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-4.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-5.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-6.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-7.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-8.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-9.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-10.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-11.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-12.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-13.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/edgewater/carousel-14.webp"
                ></Image>
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>

                <br></br>
                <MDBRow>
                    <PropiedadesEdgewater></PropiedadesEdgewater>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
