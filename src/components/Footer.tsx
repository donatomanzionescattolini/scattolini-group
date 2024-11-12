import {Link} from "react-router-dom";
import Areas from "../objects/areas/Areas.tsx";
import {getDesarrollosForArea} from "../objects/desarrollos/Desarrollos.ts";
import {MDBCol, MDBContainer, MDBFooter, MDBListGroup, MDBListGroupItem, MDBRow,} from "mdb-react-ui-kit";
import React from "react";

export default function Footer() {
    return (
        <>
            <div className="skew-c"></div>
            <MDBFooter
                style={{background: "rgb(251, 251, 251)"}}
                className="text-center w-100 pt-2 my-5 mb-0 pb-0 mx-auto px-auto pt-5"
            >
                <MDBContainer
                    fluid
                    className=" px-auto py-2 mt-3 mx-auto my-0 bg-transparent"
                >
                    <MDBRow
                        className={
                            "d-flex flex-row flex-sm-wrap overflow-x-scroll mx-auto flex-fill justify-content-around bg-transparent"
                        }
                    >

                        {Areas().map((area) => {
                            if (getDesarrollosForArea(area) && [...getDesarrollosForArea(area)].length > 0) {

                                return (
                                    <MDBCol className="mb-2 mb-md-0 mx-auto my-5 ">
                                        <h5 className="text-center">{area.titulo}</h5>
                                        <small className={"w-75 mx-auto list-unstyled"}>
                                            <li className={"mdc-list-divider mb-3"}></li>
                                        </small>
                                        <small>
                                            <MDBListGroup
                                                small
                                                horizontalSize={"100"}
                                                className={" mb-0 mx-0 px-0 list-unstyled"}
                                            >

                                                {[...getDesarrollosForArea(area)].map((des) => {
                                                    return (
                                                        <MDBListGroupItem
                                                            className="text-sm-center bg-transparent border-0 text-nowrap text-muted py-0 my-0">
                                                            <Link
                                                                className={"bg-transparent"}
                                                                to={`/desarrollos/${des.nombre}`}
                                                            >
                                                                {des.titulo ||
                                                                    des.nombre
                                                                        .split("-")
                                                                        .map(
                                                                            (word) =>
                                                                                word.charAt(0).toUpperCase() +
                                                                                word.substring(1)
                                                                        )
                                                                        .join(" ")}
                                                            </Link>
                                                        </MDBListGroupItem>
                                                    );
                                                })}
                                            </MDBListGroup>
                                        </small>
                                    </MDBCol>
                                );
                            }
                        })}
                    </MDBRow>

                    <br/>

                    <section
                        className="d-flex flex-row justify-content-center"
                        style={{background: "#f2f2ed"}}
                    >
                        © 2023 Copyright Scattolini Group
                    </section>
                </MDBContainer>
            </MDBFooter>
        </>
    );
}
