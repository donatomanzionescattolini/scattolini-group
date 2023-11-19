
import {MDBCol,} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import "../Propiedades.css";

export default function PropiedadesPinecrest() {
    return (
        <>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/pine-park-villas/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background:
                                "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/pine-park-villas.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Pine Park Villas</h4>
                </Link>
            </MDBCol>

            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/centris/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/pinecrest/centris.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Centris</h4>
                </Link>
            </MDBCol>
        </>
    );
}
