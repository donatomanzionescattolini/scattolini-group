import {MDBContainer, MDBInput, MDBTextArea} from "mdb-react-ui-kit";
import * as React from "react";
import { useState } from "react";
import { send } from "@emailjs/browser";

import { Alert, AlertHeading } from "react-bootstrap";

interface ContactFormProps {
  projectName: string;
}

export default function ContactFormComponent() {
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
  function scrollToElementById(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    send(
      "service_ut6da7n",
      "template_z9nsgpj",

      toSend,
      "mYq5Vmn6onS_iOFJc"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessAlert(true);
        setFailureAlert(false);
        setFormNull();
        scrollToElementById("top");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setFailureAlert(true);
        setSuccessAlert(false);
      });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
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
    <MDBContainer className="d-flex flex-row justify-content-center">

      <MDBContainer className="d-flex flex-column justify-content-center my-5 p-5 shadow-1 rounded-3" style={{ maxWidth: "800px" }}>

          <form onSubmit={onSubmit} action="#top" className=" flex-column  my-2">
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
            required
            id="form-Example3"
            wrapperClass="mb-4"
            label="Número de Teléfono"
            name="phone"
            value={toSend.phone}
            formNoValidate={false}
            onChange={handleChange}
          />

          <MDBTextArea
            required
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

      <footer id="top">
        {successAlert && (
          <Alert
            className="w-25  bottom-0 right-50 left-50 mx-auto"
            variant="success"
            dismissible
            onClose={handleCloseAlertSuccess}
          >
            <AlertHeading>Mensaje enviado</AlertHeading>
            <p>¡Mensaje enviado con éxito!</p>
          </Alert>
        )}
        {failureAlert && (
          <Alert
            variant="danger"
            className="w-25 position-absolute bottom-0  mx-auto"
            dismissible
            onClose={handleCloseAlertFailure}
          >
            <AlertHeading>Mensaje enviado</AlertHeading>
            <p>
              Hubo un problema enviando el correo. Por favor intente de nuevo o
              envíenos un correo desde su propio servicio a{" "}
              <a href="mailto:info@scattolinigroup.com">este correo</a>
            </p>
          </Alert>
        )}
      </footer>
    </MDBContainer>
    </MDBContainer>
  );
}
