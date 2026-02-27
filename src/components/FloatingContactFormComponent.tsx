import { send } from "@emailjs/browser";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Alert, Form } from "react-bootstrap";
import { useTranslation } from "../i18n";

type ContactPayload = {
  from_name: string;
  to_name: string;
  message: string;
  reply_to: string;
  client_email: string;
  phone: string;
};

export default function FloatingContactFormComponent() {
  const { t } = useTranslation();
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);
  const [toSend, setToSend] = useState<ContactPayload>({
    from_name: "",
    to_name: "Scattolini Group",
    message: "",
    reply_to: "office@scattolinigroup.com",
    client_email: "",
    phone: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send("service_ikq9lvg", "template_z9nsgpj", toSend, "mYq5Vmn6onS_iOFJc")
      .then(() => {
        setSuccessAlert(true);
        setFailureAlert(false);
        setToSend({
          from_name: "",
          to_name: "Scattolini Group",
          message: "",
          reply_to: "office@scattolinigroup.com",
          client_email: "",
          phone: "",
        });
      })
      .catch(() => {
        setFailureAlert(true);
        setSuccessAlert(false);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      {successAlert && (
        <Alert variant="success" dismissible onClose={() => setSuccessAlert(false)}>
          <Alert.Heading>{t("pages.contacto.alerts.successTitle")}</Alert.Heading>
          <p>{t("pages.contacto.alerts.successMessage")}</p>
        </Alert>
      )}
      {failureAlert && (
        <Alert variant="danger" dismissible onClose={() => setFailureAlert(false)}>
          <Alert.Heading>{t("pages.contacto.alerts.failureTitle")}</Alert.Heading>
          <p>
            {t("pages.contacto.alerts.failureMessage")}{" "}
            <a href="mailto:info@scattolinigroup.com">{t("pages.contacto.form.emailLink")}</a>
          </p>
        </Alert>
      )}

      <Form id="floatingContact" onSubmit={onSubmit} action="#top" className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 p-2 m-2">
        <h2>{t("hero.cta")}</h2>
        <br />
        <br />

        <Form.Group className="mb-4">
          <Form.Label>{t("pages.contacto.form.name")}</Form.Label>
          <Form.Control name="from_name" value={toSend.from_name} required onChange={handleChange} />
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
          <Form.Control type="tel" name="phone" value={toSend.phone} required onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>{t("pages.contacto.form.message")}</Form.Label>
          <Form.Control as="textarea" rows={4} name="message" value={toSend.message} required onChange={handleChange} />
        </Form.Group>

        <button className="mb-4 btn btn-sm" formAction="#top" type="submit">
          {t("pages.contacto.form.sendButton")}
        </button>
      </Form>
    </>
  );
}
