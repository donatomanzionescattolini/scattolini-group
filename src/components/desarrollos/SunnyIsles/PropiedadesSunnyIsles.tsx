
import {MDBCol,} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import "../Propiedades.css";

export default function PropiedadesSunnyIsles() {
    return (
        <>
            {/* <MDBCol xs={0} sm={0} md={2} lg={2} xl={2}></MDBCol> */}
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/the-mansions-at-acqualina/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background:
                                "url('/assets2/areas/sunny-isles/the-mansions-at-acqualina.jpg')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">
                        The Mansions at Acqualina
                    </h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/bentley-residences/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background:
                                "url('/assets2/areas/sunny-isles/bentley-residences.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">Bentley Residences</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/st-regis/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('/assets2/areas/sunny-isles/st-regis.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">St. Regis</h4>
                </Link>
            </MDBCol>
        </>
    );
}
