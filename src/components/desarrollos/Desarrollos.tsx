import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardLink, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import Areas from "../../objects/areas/Areas.tsx";
import { useState } from "react";

export default function Desarrollos() {
    const [areas] = useState(Areas());





    return (
        <MDBContainer className="">
            <MDBTypography tag="h2" className="text-center mb-4">
                Proyectos en Desarrollo
            </MDBTypography>

            <MDBRow>
                {areas.map((area, index) => (
                    <MDBCol md="4" key={index} className="mb-4">
                        <MDBCard className="photo-card">
                            <MDBCardImage src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/thumbnail.webp`} alt={area.name} position="top" className="gallery-image img-thumbnail" />
                        </MDBCard>
                        <MDBCardFooter className="pt-2">
                            <MDBCardLink className="text-center">
                                <MDBTypography  tag={"h4"}>{area.titulo}</MDBTypography>
                            </MDBCardLink>
                        </MDBCardFooter>
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    );
}
