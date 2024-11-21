import {
    MDBCard,
    MDBCardBody,
    MDBCardGroup,
    MDBCardHeader,
    MDBCardLink,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow,
} from "mdb-react-ui-kit";

export default function Servicios() {
    return (
        <>
            <h2 className="text-center">Servicios</h2>
            <hr className="hr hr-blurry w-50 mx-auto" />

            <br />

            <MDBRow className=" d-flex flex-row flex-wrap justify-content-between text-center text-capitalize g-5">
                <MDBCol md={6}>
                    <MDBCard className="w-100">
                        <MDBCardHeader background="light" >

                            <MDBCardTitle className="p-2 pb-0 mb-0">
                                <h4 className="">Asesoramiento Inmobiliario</h4>
                            </MDBCardTitle>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardText className="text-center">
                                Ofrecemos asesoramiento experto en todas las áreas del mercado
                                inmobiliario
                            </MDBCardText>
                            <br />
                            <MDBCardLink
                                href="/contacto"
                                className="btn btn-outline-secondary btn-outline-secondary"

                            >
                                Obtener más información
                            </MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md={6}><MDBCard className="w-100">
                    <MDBCardHeader background="light" >

                        <MDBCardTitle className="p-2 pb-0 mb-0">
                            <h4>Aministración de Propiedades</h4>
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            Ofrecemos servicios completos de administración de propiedades
                        </MDBCardText>
                        <br />
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            Obtener más información
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
                <MDBCol md={6}><MDBCard className="w-100">
                    <MDBCardHeader background="light" >

                        <MDBCardTitle className="p-2 pb-0 mb-0"><h4>Venta de Propiedades</h4></MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            Ofrecemos servicios de venta de inmuebles de alta calidad y
                            confiabilidad, para ayudarlo a encontrar la propiedad de sus
                            sueños
                        </MDBCardText>
                        <br />
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            Obtener más información
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
                <MDBCol md={6}>

                    <MDBCard className="w-100">
                        <MDBCardHeader background="light" >

                            <MDBCardTitle className="p-2 pb-0 mb-0"><h4>Compra de Propiedades</h4></MDBCardTitle>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardText>
                                Ayudamos a nuestros clientes a encontrar la propiedad perfecta
                                para sus necesidades y presupuesto
                            </MDBCardText>
                            <br />
                            <MDBCardLink
                                href="/contacto"
                                className="btn btn-outline-secondary btn-outline-secondary"
                            >
                                Obtener más información
                            </MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
}
