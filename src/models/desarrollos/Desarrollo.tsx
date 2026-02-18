import React from "react";
import { getDesarrolloData } from "../../i18n";

class Desarrollo {
  // permissive dynamic container used across many object files
  [key: string]: any;

  constructor(area?: any) {
    if (area) this.area = area;
  }

  getLocalizedContent(lang: "es" | "en"): any {
    const rawName = String(this.nombre || "");
    const kebab = rawName
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-")
      .toLowerCase();
    const compact = rawName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const keyCandidates = [...new Set([rawName, rawName.toLowerCase(), kebab, compact].filter(Boolean))];

    let localizedData: any = null;
    for (const key of keyCandidates) {
      localizedData = getDesarrolloData(key, lang);
      if (localizedData) break;
    }
    
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
    const ubicacion = this.ubicación ?? this.ubicacion;
    return (
      <dl>
        <dt>Ubicación</dt>
        <dd>{ubicacion}</dd>
        {this.constructora && (
          <>
            <dt>Constructora</dt>
            <dd>{typeof this.constructora === "string" ? this.constructora : String(this.constructora)}</dd>
          </>
        )}
        <dt>Año de Construcción</dt>
        <dd>{this.estimatedCompletionYear}</dd>
        {this.piesCuadrados && (
          <>
            <dt>Tamaño de viviendas en pies cuadrados</dt>
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
