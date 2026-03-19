import React from "react";
import {desarrolloMap} from "../objects/desarrollos/Desarrollos";
import {resolveLocalizedValue, useTranslation} from "../i18n.tsx";

export default function Footer() {
    const {t, lang} = useTranslation();

    const getLocalized = (field: any, fallback = "") => {
        return resolveLocalizedValue<string>(field, lang) || fallback;
    };

    const areasWithDesarrollos = desarrolloMap
        .filter((entry) => {
            const hasDesarrollos = entry.des && entry.des.size > 0;
            const hasTitle = entry.area && (entry.area.titulo || entry.area.name);
            return hasDesarrollos && hasTitle;
        })
        .slice(0, 3);

    return (
        <footer className="font-small pt-5">
            {/* Top: branding */}
            <div className="container pb-4 border-bottom">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <a href="/">
                            <img
                                src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                                alt={(t("nav.logoAlt") as string) || "Scattolini Group logo"}
                                className="footer-logo mb-3"
                                style={{ maxHeight: "80px", width: "auto" }}
                            />
                        </a>
                        <p className="footer-tagline mb-0">
                            {(t("footer.tagline") as string) || "Luxury Real Estate in South Florida"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Middle: 3-column info */}
            <div className="container py-4 border-bottom">
                <div className="row">
                    {/* Column 1: Contact Info */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-start">
                        <h6 className="text-uppercase footer-col-title mb-3">
                            {(t("footer.contactTitle") as string) || "Contact"}
                        </h6>
                        <ul className="list-unstyled footer-contact-list">
                            <li className="mb-2">
                                <span className="footer-icon me-2">&#128205;</span>
                                12750 NW 17th Street Unit 222, Miami, FL 33182
                            </li>
                            <li className="mb-2">
                                <span className="footer-icon me-2">&#128222;</span>
                                <a href="tel:+13053815120">(305) 381-5120</a>
                            </li>
                            <li className="mb-2">
                                <span className="footer-icon me-2">&#9993;</span>
                                <a href="mailto:elda.scattolini@scattolinigroup.com">
                                    elda.scattolini@scattolinigroup.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-start">
                        <h6 className="text-uppercase footer-col-title mb-3">
                            {(t("footer.quickLinksTitle") as string) || "Quick Links"}
                        </h6>
                        <ul className="list-unstyled footer-links-list">
                            <li className="mb-2"><a href="/">{(t("nav.inicio") as string) || "Home"}</a></li>
                            <li className="mb-2"><a href="/liderazgo/">{(t("nav.liderazgo") as string) || "Leadership"}</a></li>
                            <li className="mb-2"><a href="/areas/">{(t("nav.areas") as string) || "Areas"}</a></li>
                            <li className="mb-2"><a href="/desarrollos/">{(t("nav.desarrollos") as string) || "Developments"}</a></li>
                            <li className="mb-2"><a href="/contacto/">{(t("nav.contacto") as string) || "Contact"}</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Areas & Developments */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-start">
                        <h6 className="text-uppercase footer-col-title mb-3">
                            {(t("footer.areasTitle") as string) || "Areas & Developments"}
                        </h6>
                        {areasWithDesarrollos.map((entry) => {
                            const areaTitle = getLocalized(entry.area.titulo, entry.area.name);
                            if (!areaTitle) return null;

                            const developments = [...entry.des].slice(0, 3);

                            return (
                                <div key={entry.area.name} className="mb-3">
                                    <a href={`/areas/${entry.area.name}/`} className="footer-area-link d-block mb-1 text-uppercase fw-semibold">
                                        {areaTitle}
                                    </a>
                                    <ul className="list-unstyled ms-2">
                                        {developments.map((item, idx) => {
                                            let des: any;
                                            if (typeof item === "function") {
                                                des = item(lang);
                                            } else {
                                                des = item;
                                            }
                                            const desTitle = getLocalized(des.titulo, des.nombre);
                                            if (!desTitle) return null;

                                            return (
                                                <li key={des.nombre || idx} className="mb-1">
                                                    <a href={`/desarrollos/${des.nombre}/`}>{desTitle}</a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Social links */}
            <div className="container py-3 border-bottom text-center">
                <span className="me-3 footer-follow-label">
                    {(t("footer.followUs") as string) || "Follow Us"}
                </span>
                <a
                    href="https://www.instagram.com/scattolinigroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link me-3"
                    aria-label="Instagram"
                >
                    Instagram
                </a>
                <a
                    href="https://www.facebook.com/scattolinigroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="Facebook"
                >
                    Facebook
                </a>
            </div>

            {/* Bottom bar */}
            <div className="text-center py-3">
                &copy; {new Date().getFullYear()} {(t("pages.about.title") as string) || "Scattolini Group"}
            </div>
        </footer>
    );
}
