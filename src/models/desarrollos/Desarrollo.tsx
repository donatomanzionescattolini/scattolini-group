import React from "react";
import { getDesarrolloData } from "../../i18n";

class Desarrollo {
  // permissive dynamic container used across many object files
  [key: string]: any;

  constructor(area?: any) {
    if (area) this.area = area;
  }

  getLocalizedContent(lang: "es" | "en"): any {
    const desarrolloKey = this.nombre?.replace(/[-\s]/g, "").toLowerCase();
    const localizedData = getDesarrolloData(desarrolloKey, lang);
    
    if (localizedData) {
      return {
        ...this,
        titulo: localizedData.titulo || this.titulo,
        subtitulo: localizedData.subtitulo ? 
          <p className="text-cursive p-0 m-0"><em>{localizedData.subtitulo}</em></p> : 
          this.subtitulo,
        introduccion: localizedData.introduccion || this.introduccion,
      };
    }
    
    return this;
  }

  displayAmenidades(): React.ReactNode {
    const amenidades = this.amenidades;
    if (!amenidades) return null;
    if (Array.isArray(amenidades)) {
      return (
        <ul>
          {amenidades.map((a: any, i: number) => (
            <li key={`${a}-${i}`}>{a}</li>
          ))}
        </ul>
      );
    }
    if (amenidades instanceof Map) {
      const els: React.ReactNode[] = [];
      let idx = 0;
      amenidades.forEach((list: any[], type: string) => {
        els.push(
          <React.Fragment key={`amen-${idx}-${type}`}>
            <dt>{type}</dt>
            <dd>
              <ul>
                {list.map((a: any, i: number) => (
                  <li key={`${type}-${i}-${a}`}>{a}</li>
                ))}
              </ul>
            </dd>
          </React.Fragment>
        );
        idx++;
      });
      return <dl>{els}</dl>;
    }
    if (typeof amenidades === "object") {
      const first = Object.values(amenidades)[0] || [];
      if (Array.isArray(first)) {
        return (
          <ul>
            {first.map((a: any, i: number) => (
              <li key={`${a}-${i}`}>{a}</li>
            ))}
          </ul>
        );
      }
      return null;
    }
    return null;
  }

  displayCaracteristicasResidencias(): React.ReactNode {
    const residencias = this.residencias;
    if (!residencias) return null;
    if (Array.isArray(residencias)) {
      return (
        <ul>
          {residencias.map((r: any, i: number) => (
            <li key={`${r}-${i}`}>{r}</li>
          ))}
        </ul>
      );
    }
    if (residencias instanceof Map) {
      let idx = 0;
      return (
        <dl>
          {[...residencias.keys()].map((k: string) => {
            const list = residencias.get(k) || [];
            const key = `res-${idx}-${k}`;
            idx++;
            return (
              <React.Fragment key={key}>
                <dt>{k}</dt>
                <dd>
                  <ul>
                    {list.map((r: any, i: number) => (
                      <li key={`${k}-${i}-${r}`}>{r}</li>
                    ))}
                  </ul>
                </dd>
              </React.Fragment>
            );
          })}
        </dl>
      );
    }
    if (typeof residencias === "object") {
      const first = Object.values(residencias)[0] || [];
      if (Array.isArray(first)) {
        return (
          <ul>
            {first.map((r: any, i: number) => (
              <li key={`${r}-${i}`}>{r}</li>
            ))}
          </ul>
        );
      }
      return null;
    }
    return null;
  }

  displayCaracteristicasEdificio(): React.ReactNode {
    const currentLang = (typeof localStorage !== "undefined" &&
      (localStorage.getItem("scattolini_lang") as "es" | "en" | null)) || "es";
    const labels = {
      es: {
        location: "Ubicación",
        developer: "Constructora",
        year: "Año de Construcción",
        size: "Tamaño de viviendas en pies cuadrados",
      },
      en: {
        location: "Location",
        developer: "Developer",
        year: "Year of Construction",
        size: "Home size in square feet",
      },
    }[currentLang];
    const ubicacion = this.ubicación ?? this.ubicacion;
    return (
      <dl>
        <dt>{labels.location}</dt>
        <dd>{ubicacion}</dd>
        {this.constructora && (
          <>
            <dt>{labels.developer}</dt>
            <dd>{typeof this.constructora === "string" ? this.constructora : String(this.constructora)}</dd>
          </>
        )}
        <dt>{labels.year}</dt>
        <dd>{this.estimatedCompletionYear}</dd>
        {this.piesCuadrados && (
          <>
            <dt>{labels.size}</dt>
            <dd>{String(this.piesCuadrados)}</dd>
          </>
        )}
      </dl>
    );
  }

  createCaracteristicas(): any {
    return {
      residencias: this.displayCaracteristicasResidencias(),
      edificio: this.displayCaracteristicasEdificio(),
      amenidades: this.displayAmenidades(),
    };
  }
}

export default Desarrollo;
