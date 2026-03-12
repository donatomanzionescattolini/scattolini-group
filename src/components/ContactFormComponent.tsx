import {send} from "@emailjs/browser";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {useTranslation} from "../i18n";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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

    const fieldSx = { "& label": { fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem" } };

    return (
        <Paper elevation={2} sx={{ maxWidth: 700, mx: "auto", p: { xs: 3, sm: 5 }, borderRadius: 3, backgroundColor: "#fafaf7" }}>
            {successAlert && (
                <Alert severity="success" onClose={() => setSuccessAlert(false)} sx={{ mb: 3 }}>
                    <AlertTitle>{t("pages.contacto.alerts.successTitle")}</AlertTitle>
                    {t("pages.contacto.alerts.successMessage")}
                </Alert>
            )}

            {failureAlert && (
                <Alert severity="error" onClose={() => setFailureAlert(false)} sx={{ mb: 3 }}>
                    <AlertTitle>{t("pages.contacto.alerts.failureTitle")}</AlertTitle>
                    {t("pages.contacto.alerts.failureMessage")}{" "}
                    <a href="mailto:info@scattolinigroup.com">{t("pages.contacto.form.emailLink")}</a>
                </Alert>
            )}

            <Box component="form" onSubmit={onSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                    label={t("pages.contacto.form.name") as string}
                    name="from_name"
                    value={toSend.from_name}
                    required
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={fieldSx}
                />

                <TextField
                    label={t("pages.contacto.form.email") as string}
                    type="email"
                    name="client_email"
                    value={toSend.client_email}
                    required
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={fieldSx}
                />

                <TextField
                    label={t("pages.contacto.form.phone") as string}
                    type="tel"
                    name="phone"
                    value={toSend.phone}
                    required
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={fieldSx}
                />

                <TextField
                    label={t("pages.contacto.form.message") as string}
                    name="message"
                    value={toSend.message}
                    required
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={fieldSx}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        alignSelf: "flex-start",
                        fontFamily: "'Montserrat', sans-serif",
                        letterSpacing: "0.08em",
                        px: 4,
                        py: 1.5,
                        backgroundColor: "#0e2d2f",
                        "&:hover": { backgroundColor: "#1f595a" },
                    }}
                >
                    {t("pages.contacto.form.sendButton")}
                </Button>
            </Box>
        </Paper>
    );
}
