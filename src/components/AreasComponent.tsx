import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import React from "react";

import {Link} from "react-router-dom";
import Areas from "../objects/areas/Areas.tsx";

const AreasComponent = function (): React.JSX.Element {
    // const [returnColumns] = useState<JSX.Element[]>(
    //     function () {
    //         const temp: React.JSX.Element[] = new Array<React.JSX.Element>();
    //
    //         desarrolloMap.keys().forEach((areaObject): void => {
    //             temp.push(
    //                 <MDBCol className="col-3">
    //                     <Card autoFocus className={" h-100 p-0 m-0"}>
    //                         <Link to={`/areas/${areaObject.name}`}>
    //                             <CardImg
    //                                 className=""
    //                                 src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${areaObject.name}/firstsection.webp`}
    //                             />
    //                         </Link>
    //                     </Card>
    //                 </MDBCol>
    //             );
    //         });
    //
    //         return temp;
    //     }
    // );
    return (
        <MDBContainer>
            <br/>
            <br></br>
            <div>
                <h3 className="text-center mb-1">Otras Áreas</h3>
            </div>
            <hr className="hr hr-blurry w-50 mx-auto"/>

            <br></br>
            <MDBRow>
                {Areas().map((area) => {
                    return (
                        <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Link to={`/areas/${area.name}/`}>
                                <div
                                    className="propiedades-img p-0 m-0 w-100"
                                    style={{
                                        background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/thumbnail.webp')`,
                                        backgroundSize: "cover",
                                    }}
                                ></div>

                                <h4 className="text-center card-title m-2 " style={{
                                    fontFamily: '"tt-commons-pro", sans-serif',
                                    fontWeight: "100",
                                    fontStyle: "normal"
                                }}>{area.titulo}</h4>
                            </Link>
                        </MDBCol>
                    );
                })}
            </MDBRow>
        </MDBContainer>
    );
};

export default AreasComponent;
