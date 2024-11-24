import {MDBInput, MDBTextArea,} from "mdb-react-ui-kit";
import * as React from "react";
import {useState} from "react";
import {send} from "@emailjs/browser";

import {Alert, AlertHeading} from "react-bootstrap";

interface ContactFormProps {
    projectName: String;
}

export default function ContactFormComponent(props: ContactFormProps) {
    const [reply_to, setReplyTo] = useState("");
    const [successAlert, setSuccessAlert] = useState(false);
    const [failureAlert, setFailureAlert] = useState(false);
    const [from_name, setFromName] = useState("");
    const [client_email, setClient_email] = useState("");
    const [message, setmessage] = useState("");
    const [phone, setPhone] = useState("");
    const [toSend, setToSend] = useState({
        from_name: from_name,
        to_name: "Scattolini Group",
        message: message,
        client_email: client_email,
        reply_to: reply_to,
        phone: phone,
    });
    const onSubmit = (e: any) => {
        e.preventDefault();
        send(
            "service_ikq9lvg",
            "template_z9nsgpj",

            toSend,
            "mYq5Vmn6onS_iOFJc"
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setSuccessAlert(true);
                setFailureAlert(false);
                setFormNull();
            })
            .catch((err) => {
                console.log("FAILED...", err);
                setFailureAlert(true);
                setSuccessAlert(false);
            });
    };

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    function setFormNull() {
        setToSend({
            from_name: "",
            to_name: "Scattolini Group",
            message: "",
            reply_to: "",
            client_email: "",
            phone: "",
        });
        setmessage("");
    }

    function handleCloseAlertSuccess(a: any, b: any): void {
        setSuccessAlert(false);
    }

    function handleCloseAlertFailure(a: any, b: any): void {
        setFailureAlert(false);
    }

    // function handleMensaje(e: { target: { name: any; value: any } }) {
    //   setNumberOfEdits((num) => num++);
    //   setmessage(
    //     (mensaje) =>
    //       (mensaje += "\n\nEdit # " + numberOfEdits + "=>\n\t" + e.target.value)
    //   );
    //   setToSend({ ...toSend, message: message });
    // }

    return (
        <>
            <div id="top"></div>
            {successAlert && (
                <Alert variant="success" dismissible onClose={handleCloseAlertSuccess}>
                    <AlertHeading>Mensaje enviado</AlertHeading>
                    <p>¡Mensaje enviado con éxito!</p>
                </Alert>
            )}
            {failureAlert && (
                <Alert variant="danger" dismissible onClose={handleCloseAlertFailure}>
                    <AlertHeading>Mensaje enviado</AlertHeading>
                    <p>
                        Hubo un problema enviando el correo. Por favor intente de nuevo o
                        envíenos un correo desde su propio servicio a{" "}
                        <a href="mailto:info@scattolinigroup.com">este correo</a>
                    </p>
                </Alert>
            )}
            <form
                onSubmit={onSubmit}
                action="#top"
                className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 p-2 m-2"
            >
                <h2>Contáctanos Hoy</h2>
                <br/>
                <br/>
                <MDBInput
                    id="form4Example1"
                    wrapperClass="mb-4"
                    label="Nombre"
                    name="from_name"
                    value={toSend.from_name}
                    required
                    onChange={handleChange}
                />
                <MDBInput
                    type="email"
                    id="form4Example2"
                    wrapperClass="mb-4"
                    label="Correo electrónico"
                    name="client_email"
                    formNoValidate={false}
                    onChange={handleChange}
                    value={toSend.client_email}
                    required
                />
                <MDBInput
                    type="phone"
                    id="form-Example3"
                    wrapperClass="mb-4"
                    label="Número de Teléfono"
                    name="phone"
                    value={toSend.phone}
                    formNoValidate={false}
                    onChange={handleChange}
                />

                <MDBTextArea
                    id="form-example4"
                    wrapperClass="mb-4"
                    rows={4}
                    label="Mensaje"
                    value={toSend.message}
                    name="message"
                    onChange={handleChange}
                />

                {/* <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-4"
        id="form4Example4"
        label="Mándame una copia del mensaje"
        defaultChecked
      /> */}
                <button className="mb-4 btn btn-sm " formAction="#top" type="submit">
                    Enviar
                </button>
            </form>
        </>
    );
}
