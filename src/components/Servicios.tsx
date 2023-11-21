import {
    MDBCard,
    MDBCardBody,
    MDBCardGroup,
    MDBCardHeader,
    MDBCardLink,
    MDBCardText,
    MDBCardTitle,
} from "mdb-react-ui-kit";

export default function Servicios() {
    return (
        <>
            <br></br>
            <h2 className="text-center mt-5">Servicios</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>

            <br/>

            <MDBCardGroup className="text-center">
                <MDBCard className="m-xs-0 m-sm-0 m-md-2 m-lg-2 m-xl-2">
                    <MDBCardHeader>
                        <MDBCardTitle>
                            <h4>Asesoramiento Inmobiliario</h4>
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText className="text-center">
                            Ofrecemos asesoramiento experto en todas las áreas del mercado
                            inmobiliario
                        </MDBCardText>
                        <br/>
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            Obtener más información
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className="m-2">
                    <MDBCardHeader>
                        <MDBCardTitle>
                            <h4>Aministración de Propiedades</h4>
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            Ofrecemos servicios completos de administración de propiedades
                        </MDBCardText>
                        <br/>
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            Obtener más información
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
            <MDBCardGroup className="text-center">
                <MDBCard className="m-2">
                    <MDBCardHeader>
                        <MDBCardTitle>Venta de Propiedades</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            Ofrecemos servicios de venta de inmuebles de alta calidad y
                            confiabilidad, para ayudarlo a encontrar la propiedad de sus
                            sueños
                        </MDBCardText>
                        <br/>
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            Obtener más información
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className="m-2">
                    <MDBCardHeader>
                        <MDBCardTitle>Compra de Propiedades</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            Ayudamos a nuestros clientes a encontrar la propiedad perfecta
                            para sus necesidades y presupuesto
                        </MDBCardText>
                        <br/>
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            Obtener más información
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </>
    );
}
