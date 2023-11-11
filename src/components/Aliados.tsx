import {Link} from "react-router-dom";
import {MDBCardLink, MDBCol, MDBRow,} from "mdb-react-ui-kit";

export default function Aliados() {
    return (
        <>
            <br></br>
            <h2 className="text-center mt-5 display-6">Aliados</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>
            <MDBRow
                style={{width: "60vw", marginInline: "auto"}}
                className="p-5 d-flex flex-row flex-nowrap justify-content-center align-items-center"
            >
                <MDBCol xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Link to="https://www.huehouseagency.com//">
                        <img
                            src="/assets2/aliados/hue-house.png"
                            alt="Hue House"
                            width="100%"
                        />
                    </Link>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={12} lg={4} xl={4}>
                    {" "}
                    <Link to="https://www.manzionesdesign.com//">
                        <img
                            src="/assets2/aliados/manzionesdesign.png"
                            alt="Manzione S. Design"
                            width="100%"
                        />
                    </Link>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={12} lg={4} xl={4}>
                    <MDBCardLink href="/manzione-properties/">
                        <img
                            src="/assets2/aliados/manzioneproperties.webp"
                            alt="Manzione Properties"
                            width="100%"
                        />
                    </MDBCardLink>
                </MDBCol>
            </MDBRow>
        </>
    );
}
