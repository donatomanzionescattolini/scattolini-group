import {MDBRow,} from "mdb-react-ui-kit";

import "./Downtown.css";
import {Image} from "react-bootstrap";

import PropiedadesDowntown from "../desarrollos/Downtown/PropiedadesDowntown";

export default function Downtown() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage:
                            "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/downtown-banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">Downtown</h2>
                </div>
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">El Corazón de la Ciudad</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">
                        <h2 className={"text-center "}> Downtown Miami: El Centro de Negocios y Compras en Miami</h2>

                        <p className="text-muted ">
                            <small>
                                Descubre Downtown Miami, el corazón vibrante y emocionante de la
                                ciudad. Con su impresionante arquitectura, su amplia oferta de
                                restaurantes y tiendas, y su animada vida nocturna, Downtown
                                Miami es el lugar perfecto para aquellos que buscan una
                                experiencia urbana única. Además, hay muchas opciones de
                                propiedades disponibles, desde lujosos condominios con vistas
                                impresionantes hasta modernos lofts y apartamentos. ¡No pierda
                                la oportunidad de invertir en esta emocionante área de Miami!
                            </small>
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/downtown-firstsection.webp"
                                className="w-100 img-responsive align-self-center justify-self-center m-auto"
                                alt="Downtown City Center"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="city-firstcarousel">
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-1.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-2.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-3.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-4.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-5.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-6.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-7.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-8.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-9.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-10.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-11.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-12.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/downtown/carousel-13.webp"
                ></Image>
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>

                <br></br>
                <MDBRow>
                    <PropiedadesDowntown></PropiedadesDowntown>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
