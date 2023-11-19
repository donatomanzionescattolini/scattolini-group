
import {MDBCol,} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import "../Propiedades.css";

export default function PropiedadesEdgewater() {
    return (
        <>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/the-villa/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/edgewater/the-villa.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">The Villa Miami</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/missoni-baia/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/edgewater/missoni-baia.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Missoni Baia</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/vida/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/edgewater/vida.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Vida</h4>
                </Link>
            </MDBCol>

            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/edition-residences/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background:
                                "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/edgewater/edition-residences.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">Edition Residences</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/aria-reserve/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/edgewater/aria-reserve.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Aria Reserve</h4>
                </Link>
            </MDBCol>
        </>
    );
}
