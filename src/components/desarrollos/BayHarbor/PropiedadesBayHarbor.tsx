import {MDBCol} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import "../Propiedades.css";

export default function PropiedadesBayHarbor() {
    return (
        <>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/the-well/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('/assets2/areas/bay-harbor/the-well.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">The Well</h4>
                </Link>
            </MDBCol>

            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/origin/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('/assets2/areas/bay-harbor/origin.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Origin</h4>
                </Link>
            </MDBCol>

            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/la-mare/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background: "url('/assets2/areas/bay-harbor/la-mare.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">La Maré</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/la-baia/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('/assets2/areas/bay-harbor/la-baia-north.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">La Baia North</h4>
                </Link>
            </MDBCol>
        </>
    );
}
