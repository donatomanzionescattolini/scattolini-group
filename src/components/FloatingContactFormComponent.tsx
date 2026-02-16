import * as React from "react";
import {useState} from "react";
import {send} from "@emailjs/browser";

import {Alert, AlertHeading, Form} from "react-bootstrap";
import { useTranslation } from "../i18n.tsx";

import "./FloatingContactFormComponent.scss"

export default function FloatingContactFormComponent() {
    const { t } = useTranslation();
    const [reply_to] = useState("office@scattolinigroup.com");
    const [successAlert, setSuccessAlert] = useState(false);
    const [failureAlert, setFailureAlert] = useState(false);
    const [from_name] = useState("");
    const [client_email] = useState("");
    const [message, setmessage] = useState("");
    const [phone] = useState("");
    const [toSend, setToSend] = useState({
        from_name: from_name,
        to_name: "Scattolini Group",
        message: message,
        reply_to: reply_to,
        client_email: client_email,
        phone: phone,
    });
    const onSubmit = (e) => {
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

    const handleChange = ((e: { target: { name: string; value: string; }; }) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    });

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

    function handleCloseAlertSuccess(): void {
        setSuccessAlert(false);
    }

    function handleCloseAlertFailure(): void {
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
            {successAlert && (
                <Alert variant="success" dismissible onClose={handleCloseAlertSuccess}>
                    <AlertHeading>{t("pages.contacto.alerts.successTitle")}</AlertHeading>
                    <p>{t("pages.contacto.alerts.successMessage")}</p>
                </Alert>
            )}
            {failureAlert && (
                <Alert variant="danger" dismissible onClose={handleCloseAlertFailure}>
                    <AlertHeading>{t("pages.contacto.alerts.failureTitle")}</AlertHeading>
                    <p>
                        {t("pages.contacto.alerts.failureMessage")}{" "}
                        <a href="mailto:info@scattolinigroup.com">{t("pages.contacto.form.emailLink")}</a>
                    </p>
                </Alert>
            )}
            <form id={"floatingContact"}
                  onSubmit={onSubmit}
                  action="#top"
                  className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 p-2 m-2"
            >
                <h2>{t("hero.cta")}</h2>
                <br/>
                <br/>
                <Form.Group className="mb-4" controlId="floating-name">
                    <Form.Label>{t("pages.contacto.form.name")}</Form.Label>
                    <Form.Control
                        className="formInput"
                        name="from_name"
                        value={toSend.from_name}
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="floating-email">
                    <Form.Label>{t("pages.contacto.form.email")}</Form.Label>
                    <Form.Control
                        type="email"
                        className="formInput"
                        required
                        name="client_email"
                        onChange={handleChange}
                        value={toSend.client_email}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="floating-phone">
                    <Form.Label>{t("pages.contacto.form.phone")}</Form.Label>
                    <Form.Control
                        type="phone"
                        className="formInput"
                        required
                        name="phone"
                        value={toSend.phone}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="floating-message">
                    <Form.Label>{t("pages.contacto.form.message")}</Form.Label>
                    <Form.Control
                        as="textarea"
                        className="formInput"
                        required
                        rows={4}
                        value={toSend.message}
                        name="message"
                        onChange={handleChange}
                    />
                </Form.Group>

                                {/* Checkbox placeholder
        wrapperClass="d-flex justify-content-center mb-4"
        className="formInput"
        label="Mándame una copia del mensaje"
        defaultChecked
      /> */}
                <button className="mb-4 btn btn-sm " formAction="#top" type="submit">
                    {t("pages.contacto.form.sendButton")}
                </button>
            </form>
        </>
    );
}
