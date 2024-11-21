import {MDBCol, MDBRow} from "mdb-react-ui-kit";

export default function Liderazgo() {
    return (
        <MDBRow className="row  p-0 m-auto">
            <MDBCol
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="justify-content-center p-5 text-center"
            >
                <img className="img-fluid" 
                    src={"https://pagina-mama.s3.amazonaws.com/assets2/elda/elda.jpg"}
                    alt="Elda"
                    className="w-50 m-auto img-thumbnail"
                />
            </MDBCol>
            <MDBCol xs={12} sm={12} md={4} lg={4} xl={4} className="px-auto py-5">
                <h4 className="text-center mt-5">
                    Equipo de expertos, Servicio Personalizado
                </h4>
                <br></br>
                <p style={{textIndent: "2em"}} className="mt-5">
                    Scattolini Group está dirigido por Elda Scattolini, una agente de
                    bienes raíces con 20 años de experiencia en el mercado del sur de
                    Florida. Elda ha ayudado a cientos de clientes de diferentes partes
                    del mundo a alcanzar sus objetivos inmobiliarios, con profesionalismo,
                    integridad y dedicación.
                </p>

                <p className="text-muted " style={{textIndent: "2em"}}>
                    Elda y su equipo de agentes son expertos en el área del sur de
                    Florida, con un amplio conocimiento de los vecindarios, las escuelas,
                    las comodidades y las tendencias del mercado. Te guiarán en cada paso
                    del proceso, desde encontrar la propiedad adecuada hasta negociar el
                    mejor precio y cerrar el trato de manera eficiente y sin
                    contratiempos.
                </p>
            </MDBCol>
            <MDBCol xs={12} sm={12} md={2} lg={2} xl={2}>
                <br></br>
            </MDBCol>
        </MDBRow>
    );
}
