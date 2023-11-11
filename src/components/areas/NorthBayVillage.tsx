import {MDBRow,} from "mdb-react-ui-kit";

import {Image} from "react-bootstrap";

import PropiedadesNorthBayVillage from "../desarrollos/NorthBayVillage/PropiedadesNorthBayVillage";

export default function NorthBayVillage() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage:
                            "url('/assets2/areas/north-bay-village/banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">North Bay Village</h2>
                </div>
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">El Corazón de la Bahía</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">
                        <p className="text-muted">
                            <small>
                                Si estás buscando un paraíso frente al mar en Miami, no busques
                                más allá de North Bay Village. Esta encantadora comunidad isleña
                                ofrece impresionantes vistas de la bahía y el horizonte de la
                                ciudad, así como fácil acceso a la playa y al centro. North Bay
                                Village tiene una variedad de casas y condominios en venta,
                                desde acogedores estudios hasta lujosos áticos. Puedes disfrutar
                                de las comodidades de una vida estilo resort, como piscinas,
                                spas, gimnasios, marinas y restaurantes. Ya sea que quieras
                                relajarte, jugar o trabajar, North Bay Village lo tiene todo.
                                Ven y descubre por qué este es uno de los mejores lugares para
                                vivir en Miami.
                            </small>
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src="/assets2/areas/north-bay-village/firstsection.webp"
                                className="w-100 img-responsive align-self-center justify-self-center m-auto"
                                alt="NorthBayVillage City Center"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="city-firstcarousel">
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-1.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-2.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-3.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-4.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-5.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-6.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-7.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-8.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-9.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-10.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-11.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-12.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/north-bay-village/carousel-13.webp"
                ></Image>
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>

                <br></br>
                <MDBRow>
                    <PropiedadesNorthBayVillage></PropiedadesNorthBayVillage>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
