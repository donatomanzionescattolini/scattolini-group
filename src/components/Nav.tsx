import React, {useEffect, useMemo, useState} from "react";
import {resolveLocalizedValue, useTranslation} from "../i18n.tsx";
import {useNavigate} from "react-router-dom";
import {Form} from "react-bootstrap";
import Areas from "../objects/areas/Areas";
import {getDesarrollosForArea, DYNAMIC_DESARROLLOS_UPDATED_EVENT} from "../objects/desarrollos/Desarrollos";
import Desarrollo from "../models/desarrollos/Desarrollo";
import {Area} from "../models/areas/Area";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const Nav = () => {
    const {t, lang, setLang} = useTranslation();
    const navigate = useNavigate();
    const [dynamicVersion, setDynamicVersion] = useState(0);

    useEffect(() => {
        const handleDynamicUpdate = () => setDynamicVersion((prev) => prev + 1);
        window.addEventListener(DYNAMIC_DESARROLLOS_UPDATED_EVENT, handleDynamicUpdate as EventListener);
        return () => {
            window.removeEventListener(DYNAMIC_DESARROLLOS_UPDATED_EVENT, handleDynamicUpdate as EventListener);
        };
    }, []);

    // Only include areas that have projects to sell
    const allAreas = useMemo(() => {
        return Areas().filter((area) => getDesarrollosForArea(area, lang).size > 0);
    }, [lang, dynamicVersion, Areas, getDesarrollosForArea]);
    const [filteredAreas, setFilteredAreas] = useState<Array<Area>>(allAreas);

    const allDesarrollos = useMemo<Desarrollo[]>(
        () =>
            allAreas
                .map((area) => [...getDesarrollosForArea(area, lang)])
                .reduce((prev, cur) => [...prev, ...cur], []),
        [allAreas, lang, dynamicVersion, getDesarrollosForArea]
    );

    const [filteredDesarrollos, setFilteredDesarrollos] =
        useState<Desarrollo[]>(allDesarrollos);

    useEffect(() => setFilteredAreas(allAreas), [allAreas]);
    useEffect(() => setFilteredDesarrollos(allDesarrollos), [allDesarrollos]);

    const [searchQueryDesarrollo, setSearchQueryDesarrollo] = useState("");
    const handleSearchDesarrollo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const q = event.target.value.toLowerCase().trim();
        setSearchQueryDesarrollo(event.target.value);
        if (!q) {
            setFilteredDesarrollos(allDesarrollos);
            return;
        }

        const filteredDesarrolloz = allDesarrollos.filter((desarrollo) => {
            const name = (desarrollo.nombre || "").toLowerCase();
            const title = (getLocalized(desarrollo.titulo) || name).toLowerCase();
            return name.includes(q) || q.includes(name) || title.includes(q) || q.includes(title);
        });

        setFilteredDesarrollos(filteredDesarrolloz);
    };
    const [searchQueryArea, setSearchQueryArea] = useState("");
    const handleSearchArea = (event: React.ChangeEvent<HTMLInputElement>) => {
        const q = event.target.value.toLowerCase().trim();
        setSearchQueryArea(event.target.value);
        if (!q) {
            setFilteredAreas(allAreas);
            return;
        }

        const filteredAreaz = allAreas.filter((area) => {
            const title = (getLocalized(area.titulo) || "").toLowerCase();
            return title.includes(q) || q.includes(title);
        });

        setFilteredAreas(filteredAreaz);
    };

    // language switcher handler
    const switchLang = (l: "es" | "en") => {
        setLang(l);
    };

    const goTo = (path: string) => (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        navigate(path);
    };

    const getLocalized = (field: string | Record<string, string | undefined> | null | undefined) => {
        return resolveLocalizedValue<string>(field || undefined, lang) || "";
    };

    const [areasAnchorEl, setAreasAnchorEl] = useState<null | HTMLElement>(null);
    const [desarrollosAnchorEl, setDesarrollosAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleAreasOpen = (e: React.MouseEvent<HTMLElement>) => setAreasAnchorEl(e.currentTarget);
    const handleAreasClose = () => setAreasAnchorEl(null);
    const handleDesarrollosOpen = (e: React.MouseEvent<HTMLElement>) => setDesarrollosAnchorEl(e.currentTarget);
    const handleDesarrollosClose = () => setDesarrollosAnchorEl(null);

    const navLinkSx = {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.78rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase" as const,
        color: "#0e2d2f",
        "&:hover": { color: "#8a6944", backgroundColor: "transparent" },
    };

    const langBtnSx = (active: boolean) => ({
        minWidth: 0,
        px: 1,
        py: 0.5,
        fontSize: "0.7rem",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: active ? 700 : 400,
        borderColor: "#8a6944",
        color: active ? "#fff" : "#8a6944",
        backgroundColor: active ? "#8a6944" : "transparent",
        "&:hover": {
            backgroundColor: active ? "#5c4630" : "rgba(138,105,68,0.08)",
            borderColor: "#8a6944",
        },
    });

    return (
        <>
            <AppBar position="sticky" elevation={1} sx={{ backgroundColor: "#f2f2ed", color: "#0e2d2f" }}>
                <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap", gap: 0.5, minHeight: { xs: 56, sm: 64 } }}>
                    {/* Mobile: hamburger + logo */}
                    <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
                        <IconButton
                            edge="start"
                            aria-label={String(t("nav.toggleNavigation") || "")}
                            onClick={() => setMobileOpen(true)}
                            sx={{ color: "#0e2d2f" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <a href="/" onClick={goTo("/")} style={{ lineHeight: 0, background: "transparent" }}>
                            <img
                                height={36}
                                src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                                alt={String(t("nav.logoAlt") || "")}
                                style={{ objectFit: "contain" }}
                            />
                        </a>
                    </Box>

                    {/* Desktop nav */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5, flex: 1 }}>
                        {/* Language toggle */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mr: 1 }}>
                            <Button variant="outlined" size="small" sx={langBtnSx(lang === "es")}
                                onClick={() => switchLang("es")} aria-label={String(t("nav.switchToSpanish") || "")}>
                                ES
                            </Button>
                            <Button variant="outlined" size="small" sx={langBtnSx(lang === "en")}
                                onClick={() => switchLang("en")} aria-label={String(t("nav.switchToEnglish") || "")}>
                                EN
                            </Button>
                        </Box>

                        <Button sx={navLinkSx} onClick={goTo("/")}>{t("nav.inicio")}</Button>
                        <Button sx={navLinkSx} onClick={goTo("/liderazgo")}>{t("nav.liderazgo")}</Button>
                        <Button sx={navLinkSx} onClick={goTo("/asociados")}>{t("nav.asociados")}</Button>

                        {/* Logo center */}
                        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                            <a href="/" onClick={goTo("/")} style={{ background: "transparent", lineHeight: 0 }}>
                                <img
                                    height={44}
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                                    alt={String(t("nav.logoAlt") || "")}
                                    style={{ objectFit: "contain" }}
                                />
                            </a>
                        </Box>

                        {/* Areas dropdown */}
                        <Button sx={navLinkSx} onClick={handleAreasOpen}>{t("nav.areas")}</Button>
                        <Menu anchorEl={areasAnchorEl} open={Boolean(areasAnchorEl)} onClose={handleAreasClose}
                            PaperProps={{ sx: { minWidth: 220, maxHeight: 400 } }}>
                            <Box sx={{ px: 2, py: 1 }}>
                                <Form.Control
                                    placeholder={t("nav.search") as string}
                                    type="search"
                                    value={searchQueryArea}
                                    onChange={handleSearchArea}
                                    style={{ fontSize: "0.85rem" }}
                                />
                            </Box>
                            <Divider />
                            {filteredAreas.map((area) => (
                                <MenuItem key={area.name} onClick={() => { handleAreasClose(); navigate("/areas/" + encodeURIComponent(area.name)); }}
                                    sx={{ fontSize: "0.85rem", fontFamily: "'Montserrat', sans-serif" }}>
                                    {getLocalized(area.titulo)}
                                </MenuItem>
                            ))}
                        </Menu>

                        <Button sx={navLinkSx} onClick={goTo("/contacto")}>{t("nav.contacto")}</Button>

                        {/* Desarrollos dropdown */}
                        <Button sx={navLinkSx} onClick={handleDesarrollosOpen}>{t("nav.desarrollos")}</Button>
                        <Menu anchorEl={desarrollosAnchorEl} open={Boolean(desarrollosAnchorEl)} onClose={handleDesarrollosClose}
                            PaperProps={{ sx: { minWidth: 240, maxHeight: 400 } }}>
                            <Box sx={{ px: 2, py: 1 }}>
                                <Form.Control
                                    placeholder={t("nav.search") as string}
                                    type="search"
                                    value={searchQueryDesarrollo}
                                    onChange={handleSearchDesarrollo}
                                    style={{ fontSize: "0.85rem" }}
                                />
                            </Box>
                            <Divider />
                            {filteredDesarrollos.map((desarrollo, idx) => (
                                <MenuItem key={desarrollo.nombre ?? idx}
                                    onClick={() => { handleDesarrollosClose(); navigate("/desarrollos/" + encodeURIComponent(String(desarrollo.nombre ?? idx))); }}
                                    sx={{ fontSize: "0.85rem", fontFamily: "'Montserrat', sans-serif" }}>
                                    {getLocalized(desarrollo.titulo) || desarrollo.nombre}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
                <Box sx={{ width: 260, pt: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <img height={40}
                            src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                            alt={String(t("nav.logoAlt") || "")} style={{ objectFit: "contain" }} />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 1 }}>
                        <Button variant="outlined" size="small" sx={langBtnSx(lang === "es")} onClick={() => switchLang("es")}>ES</Button>
                        <Button variant="outlined" size="small" sx={langBtnSx(lang === "en")} onClick={() => switchLang("en")}>EN</Button>
                    </Box>
                    <Divider />
                    <List dense>
                        {[
                            { label: t("nav.inicio"), path: "/" },
                            { label: t("nav.liderazgo"), path: "/liderazgo" },
                            { label: t("nav.asociados"), path: "/asociados" },
                            { label: t("nav.contacto"), path: "/contacto" },
                            { label: t("nav.desarrollos"), path: "/desarrollos" },
                            { label: t("nav.areas"), path: "/areas" },
                        ].map((item) => (
                            <ListItemButton key={item.path} onClick={() => { setMobileOpen(false); navigate(item.path); }}>
                                <ListItemText primary={String(item.label || "")}
                                    primaryTypographyProps={{ sx: { fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" } }} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Nav;
