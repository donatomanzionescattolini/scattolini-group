import {Image} from "react-bootstrap";
import {MDBCol, MDBRow} from "mdb-react-ui-kit";
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
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [areaDesarrollos] = useState<Array<Desarrollo>>(getDesarrollosForArea(area));
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
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage:
                            `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/banner.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">{titulo}</h2>
                </div>
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">{area.slogan}</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">


                        {area.descripcion.map((paragraph: string) => {
                            return (<p className={"text-muted"}><small>{paragraph}<br/><br/></small></p>)
                        })}

                    </div>
                    {innerWidth > 650 &&
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                            <picture className="">
                                <img
                                    src={firstImage}
                                    className="w-100 img-thumbnail align-self-center justify-self-center m-auto"
                                    alt="BrickellComponent City Center"
                                />
                            </picture>
                        </div>
                    }
                </div>
            </div>
            <div className="city-firstcarousel">
                {images.map(image => (image))}


            </div>
            {/* <DividerFirstComponent /> */}
            <div className="propiedades">
                {areaDesarrollos.length > 0 &&
                    <div>
                        <h3 className="text-center">Propiedades en el Área</h3>
                    </div>
                }
                <br></br>
                <MDBRow>
                    {areaDesarrollos.map(desarrollo => {
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