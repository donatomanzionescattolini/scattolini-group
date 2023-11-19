import {MDBRow,} from "mdb-react-ui-kit";

import {Image} from "react-bootstrap";

import PropiedadesPinecrest from "../desarrollos/Pinecrest/PropiedadesPinecrest";

export default function Pinecrest() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">Pinecrest</h2>
                </div>
                <br></br>
            </div>
            <br></br>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ps-5 pe-5 pb-2">
                        <br></br>
                        <p className={"text-muted"}>
                            <small>
                            Bienvenido a Pinecrest, considerada una de las areas residenciales
                            mas hermosas del Sur de la Florida. Pinecrest es una comunidad
                            altamente habitable con un excelente gobierno, finanzas estables,
                            calles seguras, instalaciones recreativas y de infraestructura
                            excepcionales, un carácter residencial de alta calidad con un
                            paisaje exuberante, excelentes escuelas, valiosos activos
                            culturales y operaciones sostenibles.
                            <br></br>
                            <br></br>Pinecrest es un lugar maravilloso para vivir y disfrutar
                            de todo lo que el sur de Florida tiene para ofrecer. Con una
                            amplia variedad de propiedades residenciales disponibles, desde
                            casas unifamiliares hasta condominios de lujo, Pinecrest ofrece
                            algo para todos. ¡Ven a descubrir todo lo que Pinecrest tiene para
                            ofrecer y encuentra tu hogar perfecto en esta hermosa comunidad!
                        </small>
                        </p>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/firstsection.webp"
                                className="w-100 img-responsive align-self-center justify-self-center m-auto"
                                alt="Pinecrest City Center"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="city-firstcarousel">
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-1.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-2.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-3.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-4.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-5.webp"
                ></Image>

                {/*<Image fluid rounded src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-6.webp"></Image>

       <Image fluid rounded src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-7.webp"></Image>

       <Image fluid rounded src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-8.webp"></Image>
       <Image fluid rounded src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-9.webp"></Image>
       <Image fluid rounded src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-10.webp"></Image>
       <Image fluid rounded src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-11.webp"></Image> */}
                {/*<Image fluid rounded src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-12.webp"></Image>
       <Image fluid rounded src="https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/carousel-13.webp"></Image> */}
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>
                <hr className="hr hr-blurry w-50 mx-auto"/>
                <br></br>
                <MDBRow>
                    <PropiedadesPinecrest></PropiedadesPinecrest>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
