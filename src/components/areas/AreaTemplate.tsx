import {Image} from "react-bootstrap";
import {MDBCol, MDBRow} from "mdb-react-ui-kit";
import React, {useState} from "react";
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
                    <div className="col text-center text-white"><h1>{titulo}</h1> <h2
                        className="subtitle">{area.slogan}</h2></div>
                </div>

            </header>
            <div className="skew-c"></div>
            <section className="white-block mb-auto">
                <MDBRow className="ps-lg-5 ps-xl-5 ps-md-0 px-sm-1 px-xs-1 align-items-center overflow-visible">

                    <MDBCol xs={12} sm={12} md={6} lg={8} xl={8}
                            className=" d-flex flex-column justify-content-evenly align-items-center overflow-visible py-5">

                        {area.descripcion.map((paragraph: string) => {
                            return (<p className="px-auto p-sm-5 p-xs-5 overflow-visible z-5">{paragraph}<br/></p>)
                        })}


                    </MDBCol>
                    <MDBCol className={"ms-md-2 ms-sm-0 m-auto d-flex justify-content-center"}>
                        <img

                            src={firstImage}
                            className="  img-fluid img-thumbnail flex-shrink-1"
                         alt={area.name}/>

                    </MDBCol>
                </MDBRow>
            </section>
            <div className="skew-cc"></div>

            <section className="city-firstcarousel colour-block h-fit-content">
                {images.map(image => (image))}


            </section>
            {/* <DividerFirstComponent /> */}
            {showDesarrollos &&
                <section className="m-0 p-0 propiedades white-block">
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
                </section>
            }
            {/* <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div> */}
        </>
    );

}