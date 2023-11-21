import {Image} from "react-bootstrap";
import {MDBRow} from "mdb-react-ui-kit";
import PropiedadesBrickell from "../desarrollos/Brickell/PropiedadesBrickell.tsx";
import {Area} from "../../models/Area.tsx";

export default function AreaTemplate(area: Area) {
    const nombre = area.getName();

    const firstImage = `https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/firstImage.jpg`;
    const propiedadesComponent = area.getPropiedadesComponent();
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage:
                            `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/${nombre}-banner.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">Brickell</h2>
                </div>
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">{area.getSlogan()}</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">
                        <p className="text-muted ">
                            <small>
                                {area.getDescripcion().map((paragraph:string)=>{
                                    return (paragraph += <><br/><br/></>)
                                })}
                            </small>
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src={firstImage}
                                className="w-100 img-thumbnail align-self-center justify-self-center m-auto"
                                alt="Brickell City Center"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="city-firstcarousel">
                <Image
                    fluid
                    rounded
                    src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/${nombre}-firstcarousel-1.webp`}
                ></Image>

                <Image
                    fluid
                    rounded
                    src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/${nombre}-firstcarousel-2.webp`}
                ></Image>

                <Image
                    fluid
                    rounded
                    src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/${nombre}-firstcarousel-3.webp`}
                ></Image>

                <Image
                    fluid
                    rounded
                    src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/${nombre}-firstcarousel-4.webp`}
                ></Image>
                <Image
                    fluid
                    rounded
                    src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/${nombre}-firstcarousel-5.webp`}
                ></Image>

                <Image
                    fluid
                    rounded
                    src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/${nombre}-firstcarousel-6.webp`}
                ></Image>

                <Image
                    fluid
                    rounded
                    src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/${nombre}-firstcarousel-7.webp`}
                ></Image>

                <Image
                    fluid
                    rounded
                    src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/${nombre}-firstcarousel-8.webp`}
                ></Image>

                <Image
                    fluid
                    rounded
                    src={`https://previews.dropbox.com/p/thumb/AB-WcTVKdOPYNtIC-XnfHlK18cuhEclDspgViLXCnmZ7lMPev7AAhppQDntMz0TUxJMcGaLoBWYo3ApCpcjBA0ftnW2EdQk1UBFXwICoXw8_1vsMYxER8pIs8KLJ-O8O7fmaS-JvRAktqKucLPu2I7i5MEIvqvYTLn2jdcafEpKg1glcbziVWADDi2jOVbuCgfEWaYs-m3Oha_UjYDtdRFlMWGKURl5JP8ibQOmFOn13VDypGr4FONB1HInR7IyC90koB54e8TNCfdFiGO6grIrPv1rwoIzFY63qSluaxt1P9pFas3zZ44f-xPbMywYhWB9VKAKZcJ_tk-Uubq3OFEUt/p.jpeg`}
                ></Image>

                <Image
                    src={firstImage}

                />


            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>

                <br></br>
                <MDBRow>
                    {propiedadesComponent}
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );

}