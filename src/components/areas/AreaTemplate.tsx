import {Image} from "react-bootstrap";
import {MDBCol, MDBRow} from "mdb-react-ui-kit";
import React, {useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";

import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import {Area} from "../../models/areas/Area.tsx";
import {getDesarrollosForArea} from "../../objects/desarrollos/Desarrollos.ts";
import {Router} from "express";
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
            fluid
            rounded
            src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/carousel-${i}.webp`}
        ></Image>);
    }
    const firstImage = `https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/firstImage.jpg`;
    return (
        <>
            <div className="city-banner p-0 ">
                <div
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
                        <h1 className="text-center text-white display-1">{titulo}</h1>
                    </div>
                </div>
                <div className="container-fluid text-center align-content-center"><h2 className="fs-2 text-center mt-5">{area.slogan}</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <MDBRow
                className="">
                <MDBCol className="d-flex flex-column text-muted justify-content-center align-content-center">


                    {area.descripcion.map((paragraph: string) => {
                        return (<p className={"px-5"}>{paragraph}<br/><br/></p>)
                    })}

                </MDBCol>

                <MDBCol sm={12} xs={12} lg={6} xl={6} md={6}
                        className={"d-flex flex-row justify-content-center align-content-center justify-content-center align-items-center mx-auto"}>
                    <img
                        src={firstImage}
                        className="w-sm-50 w-md-75 img-thumbnail img-fluid float-right"
                    />
                </MDBCol>
            </MDBRow>
            {innerWidth < 610 &&
                <div
                    className={"d-flex flex-row justify-content-evenly vw-100 h-auto flex-nowrap overflow-scroll mt-4"}>

                    {images.slice(0, 3).map(image => (<div className={"col-3 h-100 my-auto"}>{image}</div>))}


                </div>

                ||
                <div className="city-firstcarousel">
                    {images.map(image => (image))}


                </div>
            }
            {/* <DividerFirstComponent /> */}
            <div className="propiedades">
                {areaDesarrollos.size > 0 &&
                    <div>
                        <h3 className="text-center">Propiedades en el Área</h3>
                    </div>
                }
                <br></br>
                <MDBRow>
                    {[...areaDesarrollos.values()].map(desarrollo => {
                        return (<MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
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
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );

}