import {MDBCol, MDBRow} from "mdb-react-ui-kit";
import {useLayoutEffect} from "react";

export default function ManzioneProperties() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <MDBRow className=" p-5 m-0">
            <MDBCol
                xs={12}
                sm={12}
                md={7}
                lg={7}
                xl={7}
                className="align-items-start p-5 text-center"
            >
                <img className="img-fluid" 
                    src={
                        "https://pagina-mama.s3.amazonaws.com/assets2/asociados/monica.jpg"
                    }
                    alt="Elda"
                    className="w-50 m-auto img-thumbnail"
                />
            </MDBCol>
            <MDBCol
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                className=" m-0 p-auto m-auto"
            >
                <h4 className="text-center">
                    Administración de propiedades en la que puedes confiar
                </h4>

                <br></br>
                <p className=" mx-0 my-0" style={{textIndent: 50}}>
                    En nuestra empresa, nos especializamos en la administración de
                    propiedades. Nos aseguramos de que cada propiedad esté bien cuidada y
                    mantenida, y nos encargamos de todos los detalles para que nuestros
                    clientes puedan disfrutar de la tranquilidad de saber que su propiedad
                    está en buenas manos.
                </p>
            </MDBCol>
        </MDBRow>
    );
}
