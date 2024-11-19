import {Carousel, Image} from "react-bootstrap";
import {MDBCarousel, MDBCarouselItem, MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import React, {useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";

import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import {Area} from "../../models/areas/Area.tsx";
import {getDesarrollosForArea} from "../../objects/desarrollos/Desarrollos.ts";

interface AreaProps {
    area: Area;
}


export default function AreaTemplate(props: AreaProps) {
    const [area] = useState(props.area);

    const nombre = area.name;
    const titulo = area.titulo;
    const images = [];

    const [areaDesarrollos] = useState<Set<Desarrollo>>(getDesarrollosForArea(area));
    for (let i = 1; i <= area.numberOfImages; i++) {
        images.push(<Image
            rounded
            fluid
            className="h-auto my-auto overflow-visible"
            src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/carousel-${i}.webp`}
        ></Image>);
    }
    const [showDesarrollos] = useState(getDesarrollosForArea(area).size > 0);
    const firstImage = `https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/firstImage.jpg`;
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <header
                className="w-100 p-0 m-0 d-flex flex-row justify-content-center align-items-center align-content-center bg-image "
                style={{
                    backgroundImage:
                        `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/banner.webp')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    overflow: "hidden",
                    height: "10rem"
                }}
            >
                <div className={"mask  w-100 h-100 justify-content-center align-content-center "}
                     style={{backgroundColor: "rgba(0,0,0,0.2)"}}>

                </div>

                <div className="row mask d-flex align-content-center">
                    <div className="col text-center text-white"><h1>{titulo}</h1></div>
                </div>

            </header>
            {/*<div className="skew-cc"></div>*/}
            <section className="white-block py-5 ">
                <MDBContainer fluid className="container-fluid text-center "><h1 className="display-4">{titulo}</h1> <h5
                    className="subtitle text-lead w-75 mx-auto my-0 py-0 fs-4"><i>{area.slogan}</i></h5></MDBContainer>
                <MDBRow className="ps-lg-5 ps-xl-5 ps-md-0 px-sm-1 px-xs-1 align-items-center overflow-visible ">

                    <MDBCol xs={12} sm={12} md={6} lg={8} xl={8}
                            className=" d-flex flex-column justify-content-center align-items-center overflow-visible ">

                        <p className="px-5 mt-5">{area.descripcion.map((paragraph: string) => {
                            return (<p className={"text-indent"}>{paragraph}<br/><br/></p>)
                        })}
                        </p>

                    </MDBCol>
                    <MDBCol className={"ms-md-2 ms-sm-0 m-auto d-flex justify-content-center"}>
                        <img

                            src={firstImage}
                            className="  img-fluid img-thumbnail flex-shrink-1"
                            alt={area.name}/>

                    </MDBCol>
                </MDBRow>


            {innerWidth < 610 ? (
                <div className={"d-flex flex-column align-content-center align-items-center  justify-content-evenly my-5"}>
                    <h2 className="text-center display-6 my-5">Galería</h2>
                    <Carousel className={"bg-transparent"}>
                        {images.map((image, index) => (
                            <Carousel.Item key={index}>
                                {image}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            ) : (
                <div className="city-firstcarousel  h-fit-content">
                    {images.map(image => image)}
                </div>
            )}
            </section>
            <div className={"skew-cc"}></div>

            {/* <DividerFirstComponent /> */}
            {showDesarrollos &&
                <section className="colour-block py-5 ">
                    <h2 className="text-center display-6 my-5">Propiedades en el Área</h2>
                    <MDBRow>



                        {[...areaDesarrollos.values()].map((desarrollo,index) => {
                            return (<MDBCol key={index+1} xs={12} sm={12} md={6} lg={4} xl={4}>
                                <Link to={`/desarrollos/${desarrollo.nombre}/`}>
                                    <div
                                        className="propiedades-img p-0 m-0"
                                        style={{
                                            background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${desarrollo.nombre}.webp')`,
                                            backgroundSize: "cover",
                                        }}
                                    ></div>

                                    <h4 className="text-center card-title m-2 ">{desarrollo.nombre.split("-").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")}</h4>
                                </Link>
                            </MDBCol>)
                        })}
                    </MDBRow>
                </section>
            }
            {/* <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div> */}
        </>
    );

}