import {MDBCol,} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import "../Propiedades.css";

export default function PropiedadesMiamiBeach() {
    return (
        <>
            {/* <MDBCol xs={0} sm={0} md={2} lg={2} xl={2}></MDBCol> */}
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/nexo/">
                    <div
                        className="propiedades-img p-0 m-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/nexo.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>

                    <h4 className="text-center card-title m-2 ">Nexo</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/one-park/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/one-park.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">One Park</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/72-park/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/72-park.jpg')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">72 Park</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/five-park/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/five-park.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Five Park</h4>
                </Link>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
                <Link to="/desarrollos/ella/">
                    <div
                        className="propiedades-img m-0 p-0"
                        style={{
                            background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/ella.webp')",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h4 className="text-center card-title m-2">Ella</h4>
                </Link>
            </MDBCol>
        </>
    );
}
