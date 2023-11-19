import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import React, {useState} from "react";
import {Card, CardImg} from "react-bootstrap";
import {Link} from "react-router-dom";
import AreaObjects from "../models/areas/areaObjects";

const Areas = function (): React.JSX.Element {
    const [returnColumns] = useState<JSX.Element[]>(
        function () {
            const temp: React.JSX.Element[] = new Array<React.JSX.Element>();

            AreaObjects().forEach((areaObject): void => {
                temp.push(
                    <MDBCol className="col-3">
                        <Card autoFocus className={" h-100 p-0 m-0"}>
                            <Link to={"/areas/" + areaObject.getName()}>
                                <CardImg
                                    className=""
                                    src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${areaObject.getName()}/firstsection.webp`}
                                />
                            </Link>
                        </Card>
                    </MDBCol>
                );
            });

            return temp;
        }
    );
    return (
        <MDBContainer>
            <MDBRow>{returnColumns}</MDBRow>
        </MDBContainer>
    );
};

export default Areas;
