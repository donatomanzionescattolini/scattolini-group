import {MDBBtn, MDBCol, MDBRow,} from "mdb-react-ui-kit";

export default function Page() {
    return (
        <MDBRow>
            <MDBCol
                md="6"
                className=" p-0 pw-5 d-flex flex-row justify-content-center"
            >
                <div className="text-left justify-content-center pt-1 pl-5 pr-0 m-0">
                    <div className="text-justify">
                        <h1 className="h1-responsive font-weight-bold text-center my-5">
                            Scattolini Group
                        </h1>
                        <address>
                            {" "}
                            12750 NW 17th Street Unit 222, Miami, Florida 33182
                        </address>
                        Teléfono: (305) 381-5120<br></br>
                        Fax: (305) 381-5423<br></br>
                        <br></br>
                        <dt> Horas de Oficina</dt>
                        <br></br>
                        <br></br>
                        Lunes a viernes: 9am - 5pm<br></br>
                        Sábado: Con cita<br></br>
                        Domingo: Cerrado<br></br>
                        <br></br>
                        <MDBBtn
                            type="submit"
                            className="mb-4"
                            style={{backgroundColor: "#82725650", color: "#1b3433"}}
                            block
                        >
                            Envíanos un correo
                        </MDBBtn>
                    </div>
                </div>
            </MDBCol>
            <MDBCol>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.434979553679!2d-80.40457942587769!3d25.789220007469854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bef22d2a8b8d%3A0xeb3e2fa5183c827!2s12750%20NW%2017th%20St%2C%20Miami%2C%20FL%2033182!5e0!3m2!1sen!2sus!4v1691887259163!5m2!1sen!2sus"
                    style={{border: "0"}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className=" h-100 align-items-center my-auto"
                ></iframe>
            </MDBCol>
            {/* <FloatingWhatsApp accountName='Scattolini Group' phoneNumber="+13056139338"></FloatingWhatsApp> */}
        </MDBRow>
    );
}
