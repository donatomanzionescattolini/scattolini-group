import {MDBRow} from "mdb-react-ui-kit";

import {Image} from "react-bootstrap";

import PropiedadesBayHarbor from "../desarrollos/BayHarbor/PropiedadesBayHarbor";

export default function BayHarbor() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage: "url('/assets2/areas/bay-harbor/banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">BayHarbor</h2>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">
                        El Tesoro Inadvertido de la Bahía
                    </h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">
                        <p className="text-muted ">
                            <small>
                                Descubre el pintoresco y elegante distrito de negocios de Bay
                                Harbor Islands, ubicado a solo dos cuadras en Kane Concourse
                                (96th Street). Los visitantes se sorprenden al encontrar una
                                hermosa explanada con excelentes tiendas, restaurantes, oficinas
                                y arte.
                                <br></br>
                                <br></br>
                                Bay Harbor Islands es un lugar ideal para vivir e invertir. Las
                                dos pequeñas islas en forma de riñón ofrecen un oasis verde para
                                los que quieren escapar del bullicio de la gran ciudad. Vivir en
                                Bay Harbor Islands ofrece a los residentes una sensación urbana,
                                y la mayoría son dueños de sus casas.
                                <br></br>
                                <br></br>
                                En general, Bay Harbor Islands ofrece un gran estilo de vida,
                                cultura y ubicación para los que buscan invertir o vivir en la
                                zona. Experimenta el encanto y la sofisticación de Bay Harbor
                                Islands por ti mismo.
                            </small>
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src="/assets2/areas/bay-harbor/firstsection.webp"
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
                    src="/assets2/areas/bay-harbor/carousel-1.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-2.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-3.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-4.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-5.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-6.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-7.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-8.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-9.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-10.png"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-11.jpeg"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-12.jpg"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-13.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="/assets2/areas/bay-harbor/carousel-14.jpg"
                ></Image>
                {/*<Image fluid rounded src="/assets2/areas/bay-harbor/carousel-15.webp"></Image>
       <Image fluid rounded src="/assets2/areas/bay-harbor/carousel-16.webp"></Image>
       <Image fluid rounded src="/assets2/areas/bay-harbor/carousel-17.webp"></Image>
       <Image fluid rounded src="/areas/areas/bay-harbor/carousel-18.webp"></Image> */}
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>

                <br></br>
                <MDBRow>
                    <PropiedadesBayHarbor></PropiedadesBayHarbor>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
