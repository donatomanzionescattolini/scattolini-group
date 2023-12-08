import {MDBCol, MDBRow} from "mdb-react-ui-kit";
import Areas from "../../models/areas/Areas.tsx";
import {Area} from "../../models/areas/Area.tsx";
import {Desarrollo} from "../../models/desarrollos/Desarrollo.tsx";
import {Link} from "react-router-dom";


export default function DesarrollosTodos() {
    return (
        <>
            <br></br>
            <h2 className="text-center mt-5 pt-xs-5 pt-sm-5 pt-md-2 pt-lg-0 ">
                Proyectos en Desarrollo
            </h2>
            {/* <hr className="mx-auto" /> */}
            <hr className="hr hr-blurry w-50 mx-auto"/>
            <br></br>
            <MDBRow className="">
                {Areas().map((area: Area) => {
                    return (<>
                        {area.getDesarrollos().map((desarrollo: Desarrollo) => {
                            return (<MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Link to={`/desarrollos/${desarrollo.nombre}`}>
                                    <div
                                        className="propiedades-img p-0 m-0"
                                        style={{
                                            background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.getName()}/${desarrollo.nombre}.webp')`,
                                            backgroundSize: "cover",
                                        }}
                                    ></div>

                                    <h4 className="text-center card-title m-2 ">{desarrollo.nombre.split("-").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")}</h4>
                                </Link>
                            </MDBCol>)
                        })}
                    </>);
                })}
            </MDBRow>
        </>
    );
}
