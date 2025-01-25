import {Link} from "react-router-dom";
import {MDBCardLink, MDBCol, MDBRow,} from "mdb-react-ui-kit";

export default function AliadosComponent() {
    return (
        <>

            <h2 className="text-center display-6">Aliados</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>
            <MDBRow

                className="p-5 d-flex flex-row flex-wrap justify-content-center align-items-center bg-transparent"
            >
                <MDBCol xs={12} sm={12} md={12} lg={4} xl={4} className={"bg-transparent"}>
                    <Link to="#" className={"bg-transparent"}>
                        <img className="img-fluid"
                             src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/hue-house.png"
                             alt="Hue House"
                        />
                    </Link>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={12} lg={4} xl={4}>
                    {" "}
                    <Link to="https://www.manzionesdesign.com" className={"bg-transparent"}>
                        <img className="img-fluid"
                             src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzionesdesign.png"
                             alt="Manzione S. Design"
                        />
                    </Link>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={12} lg={4} xl={4}>
                    <MDBCardLink href="/manzione-properties/" className={"bg-transparent"}>
                        <img className="img-fluid"
                             src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzioneproperties.webp"
                             alt="Manzione Properties"
                        />
                    </MDBCardLink>
                </MDBCol>
            </MDBRow>
        </>
    );
}
