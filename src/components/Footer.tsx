import React from "react";
import {desarrolloMap} from "../objects/desarrollos/Desarrollos";
import {resolveLocalizedValue, useTranslation} from "../i18n.tsx";

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
        <footer className="font-small bg-light pt-4">
            <div className="container text-center">
                <div className="row justify-content-center">
                    {areasWithDesarrollos.map((entry) => {
                        const areaTitle = getLocalized(entry.area.titulo, entry.area.name);
                        if (!areaTitle) return null;

                        return (
                            <div key={entry.area.name} className="col-auto mb-md-0 mb-3 text-center px-4">
                                <h5 className="text-uppercase">
                                    <a href={`/areas/${entry.area.name}/`} className="footer-area-link">
                                        {areaTitle}
                                    </a>
                                </h5>
                                <ul className="list-unstyled text-center">
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
                                            <li key={des.nombre || idx}>
                                                <a href={`/desarrollos/${des.nombre}/`}>
                                                    {desTitle}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="text-center py-3">
                © {new Date().getFullYear()} {t("pages.about.title")}
            </div>
        </footer>
    );
}
