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
import Areas from "../../objects/areas/Areas.tsx";
import {useState} from "react";
import {getDesarrollosForArea} from "../../objects/desarrollos/Desarrollos.ts";
import Project from "../../models/desarrollos/Project.tsx";
import {Area} from "../../models/areas/Area.tsx";

interface DesarrollosComponentProps {
    area?: Area,
    desarrollo?: Project
}

export default function Desarrollos(props: DesarrollosComponentProps) {

    const [areas] = useState(Areas());

    let desarrollos: Project[];

    let index = 0;
    const desarrollosElementArray = new Array<React.JSX.Element>();
    if (!props.area) {
        desarrollos = areas.flatMap(area => [...getDesarrollosForArea(area)]);
        desarrollos.forEach((d) => {
            index = index + 1;
            desarrollosElementArray.push(<>{d.name && <MDBCol md="4" key={index} className="mb-4">
                <MDBCard className="photo-card">
                    <MDBCardImage
                        src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${(d.area ? d.area.name : "")}/${d.name}.webp`}
                        alt={d.name} position="top" className="gallery-image img-thumbnail"/>
                </MDBCard>
                <MDBCardFooter className="pt-2">
                    <MDBCardLink className="text-center" href={`/desarrollos/${d.name}`}>
                        <MDBTypography tag={"h4"}>{d.title}</MDBTypography>
                    </MDBCardLink>
                </MDBCardFooter>
            </MDBCol>}</>);


        });
    } else {
        desarrollos = [...getDesarrollosForArea(props.area!)];
        desarrollos = desarrollos.filter(d => props.desarrollo!.name == d.name);


        desarrollos.forEach((desarrollo: Project) => {
            index = index + 1;
            desarrollosElementArray.push(<MDBCol md="4" key={index} className="mb-4">
                <MDBCard className="photo-card">
                    <MDBCardImage
                        src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${(desarrollo.area ? desarrollo.area.name : "")}/${desarrollo.name}.webp`}
                        alt={desarrollo.name} position="top" className="gallery-image img-thumbnail"/>
                </MDBCard>
                <MDBCardFooter className="pt-2">
                    <MDBCardLink className="text-center" href={`/desarrollos/${desarrollo.name}`}>
                        <MDBTypography tag={"h4"}>{desarrollo.title}</MDBTypography>
                    </MDBCardLink>
                </MDBCardFooter>
            </MDBCol>);
        });


        if (desarrollos.length <= 0) {
            return;

        }
    }
    return (
        <MDBContainer className="">
            <MDBTypography tag="h2" className="text-center mb-4">
                {props.area ? "Proyectos en " + props.area.title : "Proyectos"}
            </MDBTypography>


            <MDBRow>
                {desarrollosElementArray.map(el => el)}
            </MDBRow>
        </MDBContainer>
    );
}