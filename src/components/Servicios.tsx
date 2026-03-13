import {useTranslation} from "../i18n.tsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Servicios() {
    const {t} = useTranslation();

    const services = [
        {
            title: t("pages.services.realEstate"),
            description: t("pages.services.realEstateDesc"),
            href: "/contacto",
            external: false,
        },
        {
            title: t("pages.services.propertyManagement"),
            description: t("pages.services.propertyManagementDesc"),
            href: "/manzione-properties",
            external: false,
        },
        {
            title: t("pages.services.interiorDesign"),
            description: t("pages.services.interiorDesignDesc"),
            href: "https://www.manzionesdesign.com/",
            external: true,
        },
    ];

    return (
        <>
            <br />
            <Typography variant="h2" align="center" sx={{ mt: 5, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#0e2d2f", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                {t("pages.services.title")}
            </Typography>
            <Divider sx={{ width: "50%", mx: "auto", my: 2, borderColor: "#8a6944" }} />
            <br />
            <Grid container spacing={3} sx={{ mt: 1, textAlign: "center" }}>
                {services.map((svc, idx) => (
                    <Grid item xs={12} md={4} key={idx}>
                        <Card elevation={3} sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 3, backgroundColor: "#fafaf7" }}>
                            <CardHeader
                                title={<Typography variant="h5" sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "1.1rem", color: "#0e2d2f" }}>{svc.title}</Typography>}
                                sx={{ borderBottom: "1px solid #ede3d6", pb: 1.5 }}
                            />
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="body1" sx={{ color: "#5c4630", fontSize: "0.95rem", lineHeight: 1.7 }}>
                                    {svc.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                                <Button
                                    variant="outlined"
                                    href={svc.href}
                                    {...(svc.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    sx={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: "0.78rem",
                                        letterSpacing: "0.08em",
                                        borderColor: "#8a6944",
                                        color: "#8a6944",
                                        "&:hover": { backgroundColor: "rgba(138,105,68,0.08)", borderColor: "#8a6944" },
                                    }}
                                >
                                    {t("pages.services.moreInfo")}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
