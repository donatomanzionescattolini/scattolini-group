import React from "react";
import {desarrolloMap} from "../objects/desarrollos/Desarrollos";
import {resolveLocalizedValue, useTranslation} from "../i18n.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";

export default function Footer() {
    const {t, lang} = useTranslation();

    const getLocalized = (field: any, fallback = "") => {
        return resolveLocalizedValue<string>(field, lang) || fallback;
    };

    // Filter to only include areas that have developments and have a valid title
    const areasWithDesarrollos = desarrolloMap.filter((entry) => {
        const hasDesarrollos = entry.des && entry.des.size > 0;
        const hasTitle = entry.area && (entry.area.titulo || entry.area.name);
        return hasDesarrollos && hasTitle;
    });

    return (
        <Box component="footer" sx={{ backgroundColor: "#0e2d2f", color: "#ede3d6", pt: 5, pb: 3, mt: 4 }}>
            <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, sm: 4 } }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center", mb: 4 }}>
                    {areasWithDesarrollos.map((entry) => {
                        const areaTitle = getLocalized(entry.area.titulo, entry.area.name);
                        if (!areaTitle) return null;

                        return (
                            <Box key={entry.area.name} sx={{ minWidth: 140, textAlign: "center" }}>
                                <Typography variant="subtitle2" sx={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    fontSize: "0.75rem",
                                    color: "#c9a961",
                                    mb: 1,
                                }}>
                                    <MuiLink href={`/areas/${entry.area.name}/`} sx={{
                                        color: "inherit",
                                        textDecoration: "none",
                                        background: "transparent",
                                        "&:hover": { color: "#e5d5a8" },
                                    }}>
                                        {areaTitle}
                                    </MuiLink>
                                </Typography>
                                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                                    {[...entry.des].map((item, idx) => {
                                        let des: any;
                                        if (typeof item === "function") {
                                            des = item(lang);
                                        } else {
                                            des = item;
                                        }
                                        const desTitle = getLocalized(des.titulo, des.nombre);
                                        if (!desTitle) return null;

                                        return (
                                            <Box component="li" key={des.nombre || idx} sx={{ mb: 0.4 }}>
                                                <MuiLink href={`/desarrollos/${des.nombre}/`} sx={{
                                                    color: "#ede3d6",
                                                    textDecoration: "none",
                                                    fontSize: "0.82rem",
                                                    fontFamily: "'Cormorant Garamond', serif",
                                                    "&:hover": { color: "#c9a961" },
                                                    background: "transparent",
                                                }}>
                                                    {desTitle}
                                                </MuiLink>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
                <Divider sx={{ borderColor: "rgba(237,227,214,0.2)", mb: 2 }} />
                <Typography align="center" sx={{ fontSize: "0.82rem", color: "rgba(237,227,214,0.7)", fontFamily: "'Montserrat', sans-serif" }}>
                    © {new Date().getFullYear()} {t("pages.about.title")}
                </Typography>
            </Box>
        </Box>
    );
}
