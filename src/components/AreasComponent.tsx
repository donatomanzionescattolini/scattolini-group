import {
    MDBCard,
    MDBCardFooter,
    MDBCardImage,
    MDBCardLink,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography
} from "mdb-react-ui-kit";
import Areas from "../objects/areas/Areas";
import {Area} from "../models/areas/Area";

interface PropsAreasComponent {
    currentArea?: Area
}

export default function AreasComponent(props: PropsAreasComponent) {
    let areas = Areas();
    if (props.currentArea) {
        areas = areas.filter(area => area.nameForProjectFolders !== props.currentArea!.nameForProjectFolders);
    }


    return (
        <MDBContainer className="">
            <MDBTypography tag="h2" className="text-center mb-4">
                {props.currentArea && "Otras"} Áreas
            </MDBTypography>

            <MDBRow>
                {areas.map((area, index) => (
                    <MDBCol md="4" key={index} className="mb-4">
                        <MDBCard className="photo-card">
                            <MDBCardImage
                                src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.nameForProjectFolders}/thumbnail.webp`}
                                alt={area.nameForProjectFolders} position="top" className="gallery-image img-thumbnail"/>
                        </MDBCard>
                        <MDBCardFooter className="pt-2">
                            <MDBCardLink className="text-center" href={"/areas/" + area.nameForProjectFolders}>
                                <MDBTypography tag={"h4"}>{area.officialName}</MDBTypography>
                            </MDBCardLink>
                        </MDBCardFooter>
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    );
}
