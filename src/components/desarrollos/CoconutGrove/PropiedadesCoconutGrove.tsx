
import {MDBCol,} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import "../Propiedades.css";

export default function PropiedadesCoconutGrove() {
    return (
        <>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/vita/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background: "url('/assets2/areas/coconut-grove/vita.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">Vita</h4>
                </Link>
            </MDBCol>
        </>
    );
}
