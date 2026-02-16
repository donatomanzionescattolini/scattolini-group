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

  return (
    <footer className="font-small bg-light pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          {areas.map((area) => (
            <div key={area.name} className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">{getLocalized(area.titulo)}</h5>
              <ul className="list-unstyled">
                {[...getDesarrollosForArea(area)].map((des) => (
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
          ))}
        </div>
      </div>
      <div className="text-center py-3">
        © {new Date().getFullYear()} Scattolini Group
      </div>
    </footer>
  );
}
