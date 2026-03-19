import React, {useEffect, useMemo, useState} from "react";
import {resolveLocalizedValue, useTranslation} from "../i18n.tsx";
import {useNavigate} from "react-router-dom";
import {Container, Form, Nav as BsNav, Navbar, NavDropdown} from "react-bootstrap";
import Areas from "../objects/areas/Areas";
import {getDesarrollosForArea, DYNAMIC_DESARROLLOS_UPDATED_EVENT} from "../objects/desarrollos/Desarrollos";
import Desarrollo from "../models/desarrollos/Desarrollo";
import {Area} from "../models/areas/Area";

const Nav = () => {
    const {t, lang, setLang} = useTranslation();
    const navigate = useNavigate();
    const [showNavCentred, setShowNavCentred] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [dynamicVersion, setDynamicVersion] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth);
        const handleDynamicUpdate = () => setDynamicVersion((prev) => prev + 1);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("resize", handleResize);
        window.addEventListener(DYNAMIC_DESARROLLOS_UPDATED_EVENT, handleDynamicUpdate as EventListener);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener(DYNAMIC_DESARROLLOS_UPDATED_EVENT, handleDynamicUpdate as EventListener);
            window.removeEventListener("scroll", handleScroll);
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
        setShowNavCentred(false);
    };

    const getLocalized = (field: string | Record<string, string | undefined> | null | undefined) => {
        return resolveLocalizedValue<string>(field || undefined, lang) || "";
    };

    return (
        <Navbar
            expand="lg"
            bg="light"
            variant="light"
            className={scrolled ? 'navbar-scrolled' : ''}
            style={{
                transition: 'background 0.3s ease, box-shadow 0.3s ease',
                ...(scrolled && {
                    boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
                    background: 'rgba(242,242,237,0.98)',
                }),
            }}
        >
            <Container fluid>
                <Navbar.Toggle
                    aria-controls="navbarCenteredExample"
                    aria-label={String(t("nav.toggleNavigation") || "")}
                    onClick={() => setShowNavCentred(!showNavCentred)}
                >
                    <div className="d-flex flex-column align-items-top justify-content-center border-0">
                        {innerWidth < 650 && (
                            <div>
                                <img
                                    width="40%"
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                                    alt={String(t("nav.logoAlt") || "")}
                                />
                            </div>
                        )}
                        <div>
                            <i className="fas fa-caret-down"/>
                        </div>
                    </div>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarCenteredExample" in={showNavCentred} style={{ transition: 'all 0.3s ease' }}>
                    <BsNav className="w-100 mb-2 mb-lg-0">
                        {/* Language toggle - hidden on mobile (uses FloatingLangToggle instead) */}
                        <BsNav.Item className="d-none d-lg-block">
                            <div className="d-flex align-items-center ms-3">
                                <button
                                    type="button"
                                    className={`lang-toggle-btn btn btn-sm me-1 ${lang === 'es' ? 'active' : ''}`}
                                    onClick={() => switchLang('es')}
                                    aria-label={String(t("nav.switchToSpanish") || "")}
                                    style={{
                                        backgroundColor: lang === 'es' ? '#8a6944' : 'transparent',
                                        color: lang === 'es' ? '#fff' : '#8a6944',
                                        border: '1px solid #8a6944',
                                        fontWeight: lang === 'es' ? 'bold' : 'normal'
                                    }}
                                >
                                    ES
                                </button>
                                <button
                                    type="button"
                                    className={`lang-toggle-btn btn btn-sm ${lang === 'en' ? 'active' : ''}`}
                                    onClick={() => switchLang('en')}
                                    aria-label={String(t("nav.switchToEnglish") || "")}
                                    style={{
                                        backgroundColor: lang === 'en' ? '#8a6944' : 'transparent',
                                        color: lang === 'en' ? '#fff' : '#8a6944',
                                        border: '1px solid #8a6944',
                                        fontWeight: lang === 'en' ? 'bold' : 'normal'
                                    }}
                                >
                                    EN
                                </button>
                            </div>
                        </BsNav.Item>
                        <BsNav.Item>
                            <BsNav.Link href="/" onClick={goTo("/")}>
                                {t('nav.inicio')}
                            </BsNav.Link>
                        </BsNav.Item>
                        <BsNav.Item>
                            <BsNav.Link href="/liderazgo/"
                                        onClick={goTo("/liderazgo")}>{t('nav.liderazgo')}</BsNav.Link>
                        </BsNav.Item>

                        <BsNav.Item className="border-0">
                            <BsNav.Link href="/asociados/" className="border-0" 
                                        onClick={goTo("/asociados")}>{t('nav.asociados')}</BsNav.Link>
                        </BsNav.Item>
                        {innerWidth > 650 && (
                            <BsNav.Item>
                                <Navbar.Brand href="/" onClick={goTo("/")} className="border-0" >
                                    <img
                                        width={300}
                                        src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                                        alt={String(t("nav.logoAlt") || "")}
                                    />
                                </Navbar.Brand>
                            </BsNav.Item>
                        )}
                        <NavDropdown title={t('nav.areas')} id="areas-dropdown" className="responsive column">
                            <div className="d-flex w-75 ms-4 my-3">
                                <Form.Control
                                    placeholder={t('nav.search') as string}
                                    aria-label={t('nav.search') as string}
                                    type="search"
                                    value={searchQueryArea}
                                    onChange={handleSearchArea}
                                />
                            </div>
                            {filteredAreas.map((area) => (
                                <NavDropdown.Item
                                    key={area.name}
                                    href={"/areas/" + area.name}
                                    onClick={goTo("/areas/" + encodeURIComponent(area.name))}
                                >
                                    {getLocalized(area.titulo)}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>

                        <BsNav.Item>
                            <BsNav.Link href="/contacto/" onClick={goTo("/contacto")}>{t('nav.contacto')}</BsNav.Link>
                        </BsNav.Item>
                        <NavDropdown title={t('nav.desarrollos')} id="desarrollos-dropdown"
                                     className="responsive column">
                            <div className="d-flex w-75 ms-4 my-3">
                                <Form.Control
                                    placeholder={t('nav.search') as string}
                                    aria-label={t('nav.search') as string}
                                    type="search"
                                    value={searchQueryDesarrollo}
                                    onChange={handleSearchDesarrollo}
                                />
                            </div>
                            {filteredDesarrollos.map((desarrollo, idx) => (
                                <NavDropdown.Item
                                    key={desarrollo.nombre ?? idx}
                                    href={'/desarrollos/' + (desarrollo.nombre ?? idx)}
                                    onClick={goTo('/desarrollos/' + encodeURIComponent(String(desarrollo.nombre ?? idx)))}
                                >
                                    {getLocalized(desarrollo.titulo) || desarrollo.nombre}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </BsNav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Nav;
