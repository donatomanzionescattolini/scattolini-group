
import {MDBCol,} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import "../Propiedades.css";

export default function PropiedadesDowntown() {
    return (
        <>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/w11/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background: "url('/assets2/areas/downtown/w11.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">W11 Residences</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/cipriani/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('/assets2/areas/downtown/cipriani.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Cipriani Residences</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/waldorf-astoria/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('/assets2/areas/downtown/waldorf-astoria.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Waldorf Astoria</h4>
                </Link>
            </MDBCol>

            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/aston-martin/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background: "url('/assets2/areas/downtown/aston-martin.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">Aston Martin</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/the-elser/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('/assets2/areas/downtown/theelser.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">The Elser</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/casa-bella/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('/assets2/areas/downtown/casabella.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Casa Bella</h4>
                </Link>
            </MDBCol>
        </>
    );
}
