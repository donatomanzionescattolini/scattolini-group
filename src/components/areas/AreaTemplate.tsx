import {Image} from "react-bootstrap";
import {MDBRow} from "mdb-react-ui-kit";
import {Area} from "../../models/Area.tsx";
import React, {ReactNode} from "react";
interface AreaProps {
    area:Area;
}
export default function AreaTemplate(props:AreaProps) {
    const area = props.area;
    const nombre = area.getName();
    const titulo = area.getTitulo();
    const images = [];
    for(let i = 0;i<area.getNumberOfImages();i++){
        images.push(<Image
            fluid
            rounded
            src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/carousel-${i}.webp`}
        ></Image>);
    }
    const firstImage = `https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/firstImage.jpg`;
    const propiedadesComponent:ReactNode = area.getPropiedadesComponent();
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
                    <h2 className="text-center mt-5">{area.getSlogan()}</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">


                                {area.getDescripcion().map((paragraph:string)=>{
                                    return (<p className={"text-muted"}><small>{paragraph}<br/><br/></small></p>)
                                })}

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src={firstImage}
                                className="w-100 img-thumbnail align-self-center justify-self-center m-auto"
                                alt="BrickellComponent City Center"
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="city-firstcarousel">
                {images.map(image=>(image))}


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