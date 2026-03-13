import {send} from "@emailjs/browser";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {Alert, Container, Form} from "react-bootstrap";
import {useTranslation} from "../i18n";

type ContactPayload = {
    from_name: string;
    to_name: string;
    message: string;
    client_email: string;
    reply_to: string;
    phone: string;
};

export default function ContactFormComponent() {
    const {t} = useTranslation();
    const [successAlert, setSuccessAlert] = useState(false);
    const [failureAlert, setFailureAlert] = useState(false);
    const [toSend, setToSend] = useState<ContactPayload>({
        from_name: "",
        to_name: "Scattolini Group",
        message: "",
        client_email: "",
        reply_to: "",
        phone: "",
    });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        send("service_ut6da7n", "template_z9nsgpj", toSend, "mYq5Vmn6onS_iOFJc")
            .then(() => {
                setSuccessAlert(true);
                setFailureAlert(false);
                setToSend({
                    from_name: "",
                    to_name: "Scattolini Group",
                    message: "",
                    client_email: "",
                    reply_to: "",
                    phone: "",
                });
            })
            .catch(() => {
                setFailureAlert(true);
                setSuccessAlert(false);
            });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    return (
        <Container className="d-flex flex-column justify-content-center p-5 shadow-1 rounded-3"
                   style={{maxWidth: "700px"}}>
            {successAlert && (
                <Alert className="w-50 bottom-0 right-50 left-50 mx-auto" variant="success" dismissible
                       onClose={() => setSuccessAlert(false)}>
                    <Alert.Heading>{t("pages.contacto.alerts.successTitle")}</Alert.Heading>
                    <p>{t("pages.contacto.alerts.successMessage")}</p>
                </Alert>
            )}

            {failureAlert && (
                <Alert className="w-50 position-absolute bottom-0 mx-auto" variant="danger" dismissible
                       onClose={() => setFailureAlert(false)}>
                    <Alert.Heading>{t("pages.contacto.alerts.failureTitle")}</Alert.Heading>
                    <p>
                        {t("pages.contacto.alerts.failureMessage")}{" "}
                        <a href="mailto:info@scattolinigroup.com">{t("pages.contacto.form.emailLink")}</a>
                    </p>
                </Alert>
            )}

            <Form onSubmit={onSubmit} action="#top" className="flex-column my-2">
                <Form.Group className="mb-4">
                    <Form.Label>{t("pages.contacto.form.name")}</Form.Label>
                    <Form.Control name="from_name" value={toSend.from_name} required onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>{t("pages.contacto.form.email")}</Form.Label>
                    <Form.Control
                        type="email"
                        name="client_email"
                        value={toSend.client_email}
                        required
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>{t("pages.contacto.form.phone")}</Form.Label>
                    <Form.Control type="tel" name="phone" value={toSend.phone} required onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>{t("pages.contacto.form.message")}</Form.Label>
                    <Form.Control as="textarea" rows={4} name="message" value={toSend.message} required
                                  onChange={handleChange}/>
                </Form.Group>

                <button className="mb-4 btn btn-sm" formAction="#top" type="submit">
                    {t("pages.contacto.form.sendButton")}
                </button>
            </Form>

            <footer id="top"></footer>
        </Container>
    );
}
