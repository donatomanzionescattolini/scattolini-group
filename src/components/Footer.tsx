import React from "react";
import Areas from "../objects/areas/Areas";
import { getDesarrollosForArea } from "../objects/desarrollos/Desarrollos";
import { useTranslation } from "../i18n.tsx";

export default function Footer() {
  const { t, lang } = useTranslation();
  const areas = Areas();
  const getLocalized = (field: any, l = lang) => {
    if (!field) return "";
    if (typeof field === "object")
      return (
        field[l] ||
        field.es ||
        Object.values(field)[0] ||
        ""
      );
    return field;
  };

  // Filter areas to only include those with developments
  const areasWithDesarrollos = areas.filter((area) => {
    const desarrollos = getDesarrollosForArea(area);
    return desarrollos && desarrollos.size > 0;
  });

  return (
    <footer className="font-small bg-light pt-4">
      <div className="container text-center">
        <div className="row justify-content-center">
          {areasWithDesarrollos.map((area) => {
            const desarrollos = getDesarrollosForArea(area);
            return (
              <div key={area.name} className="col-auto mb-md-0 mb-3 text-center px-4">
                <h5 className="text-uppercase">{getLocalized(area.titulo)}</h5>
                <ul className="list-unstyled text-center">
                  {[...desarrollos].map((des) => (
                    <li key={des.nombre ?? des.titulo ?? Math.random()}>
                      <a href={`/desarrollos/${des.nombre}/`}>
                        {typeof des.titulo === "object"
                          ? getLocalized(des.titulo)
                          : des.titulo || des.nombre}
                      </a>
                    </li>
                  ))}
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
