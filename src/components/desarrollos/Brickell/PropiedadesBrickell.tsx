
import {MDBCol,} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import "../Propiedades.css";

export default function PropiedadesBrickell() {
    return (
        <>
            <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                <Link to="/desarrollos/ora/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/brickell/ora.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">Ora</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                <Link to="/desarrollos/1428-brickell/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/brickell/1428-brickell.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">1428 Brickell</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                <Link to="/desarrollos/baccarat/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/brickell/baccarat.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Baccarat Residences</h4>
                </Link>
            </MDBCol>

            <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                <Link to="/desarrollos/14-river-district/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background:
                                "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/brickell/14-river-district.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">14 River District</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                <Link to="/desarrollos/domus/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/brickell/domus.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Domus</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
                <Link to="/desarrollos/lofty/#banner">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/brickell/lofty.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Lofty</h4>
                </Link>
            </MDBCol>
        </>
    );
}
