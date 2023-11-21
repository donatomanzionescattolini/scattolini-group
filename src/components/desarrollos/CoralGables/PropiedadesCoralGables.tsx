import {MDBCol,} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import "../Propiedades.css";

export default function PropiedadesCoralGables() {
    return (
        <>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/the-avenue/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/coral-gables/the-avenue.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">The Avenue</h4>
                </Link>
            </MDBCol>
        </>
    );
}
