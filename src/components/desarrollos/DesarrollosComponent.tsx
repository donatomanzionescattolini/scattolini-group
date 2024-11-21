import { MDBCard, MDBCardFooter, MDBCardImage, MDBCardLink, MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import Areas from "../../objects/areas/Areas.tsx";
import { useState } from "react";
import { getDesarrollosForArea } from "../../objects/desarrollos/Desarrollos.ts";
import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import { Area } from "../../models/areas/Area.tsx";

interface DesarrollosComponentProps {
    area?:Area,
    desarrollo?: Desarrollo
}
export default function Desarrollos(props:DesarrollosComponentProps) {

    const [areas] = useState(Areas());

    let desarrollos = new Array<Desarrollo>();

    let index = 1;
    const desarrollosElementArray = new Array<React.JSX.Element>();
    if (!props.area){ 
            new Set(areas).forEach((area) =>{
            desarrollos.push(...getDesarrollosForArea(area));
            desarrollos.forEach(desarrollo=>{
                desarrollosElementArray.push(<MDBCol md="4" key={index++} className="mb-4">
                    <MDBCard className="photo-card">
                        <MDBCardImage src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${desarrollo.name}.webp`} alt={desarrollo.name} position="top" className="gallery-image img-thumbnail" />
                    </MDBCard>
                    <MDBCardFooter className="pt-2">
                        <MDBCardLink className="text-center" href={`/desarrollos/${desarrollo.name}`}>
                            <MDBTypography tag={"h4"}>{desarrollo.title}</MDBTypography>
                        </MDBCardLink>
                    </MDBCardFooter>
                </MDBCol>);

    });

    });
 } else {
    desarrollos = [...getDesarrollosForArea(props.area!)];
    desarrollos = desarrollos.filter(d=>props.desarrollo!.name==d.name);

        
        desarrollos.forEach((desarrollo: Desarrollo) => {
            index=index+1;
            desarrollosElementArray.push(<MDBCol md="4" key={index} className="mb-4">
                <MDBCard className="photo-card">
                    <MDBCardImage src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${desarrollo.area.name}/${desarrollo.name}.webp`} alt={desarrollo.name} position="top" className="gallery-image img-thumbnail" />
                </MDBCard>
                <MDBCardFooter className="pt-2">
                    <MDBCardLink className="text-center" href={`/desarrollos/${desarrollo.name}`}>
                        <MDBTypography tag={"h4"}>{desarrollo.title}</MDBTypography>
                    </MDBCardLink>
                </MDBCardFooter>
            </MDBCol>);
        });

    }
    return (
        <MDBContainer className="">
            <MDBTypography tag="h2" className="text-center mb-4">
                {props.area ? "Proyectos en "+props.area.titulo : "Proyectos"}
            </MDBTypography>


            <MDBRow>
                {desarrollosElementArray.map(el=>el)}
            </MDBRow>
        </MDBContainer>
    );
}