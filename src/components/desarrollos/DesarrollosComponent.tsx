import { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDesarrollosForArea } from '../../objects/desarrollos/Desarrollos';

export default class DesarrollosComponent extends Component {
  render() {
    interface Area {
      name: string;
      titulo: string;
      slogan: string;
      descripcion: string[] | { es: string[]; en: string[] };
      numberOfImages: number;
    }

    interface Desarrollo {
      nome: string;
      titulo: string;
    }

    const getLocalized = (titulo: string): string => {
      const language = localStorage.getItem('language') || 'es';
      const translations: Record<string, Record<string, string>> = {
        es: { /* Spanish translations */ },
        en: { /* English translations */ },
      };
      return translations[language]?.[titulo] || titulo;
    };

    const areas: Area[] = []; // Define your areas data here

    return (
      <>
        <div className="propiedades-img p-0 m-0 w-100 desarrollo-card">
          {/* Other component code */}
        </div>
        <hr className="hr hr-blurry w-50 mx-auto" />

        {areas.map((area) => {
        const desarr = getDesarrollosForArea(area) ?? new Set();
        return (
          <div key={area.name} className="mb-5">
            <h4 className="text-center">{getLocalized(area.titulo) || area.name}</h4>
            <Row>
              {Array.from(desarr).map((desarrollo, idx: number) => {
                const dev = desarrollo as unknown as Desarrollo;
                const getLocalized = (titulo: string): string => {
                  const language = localStorage.getItem('language') || 'es';
                  const translations: Record<string, Record<string, string>> = {
                    es: { /* Spanish translations */ },
                    en: { /* English translations */ },
                  };
                  return translations[language]?.[titulo] || titulo;
                };

                return (
                  <Col key={dev.nome ?? `${area.name}-${idx}`} xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Link to={`/desarrollos/${dev.nome}/`}>
                      <div
                        className="propiedades-img p-0 m-0 desarrollo-card"
                        style={{
                          backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${dev.nome}.webp')`,
                        }}
                      ></div>
                      <h5 className="text-center mt-2">
                        {getLocalized(dev.titulo) || dev.nome}
                      </h5>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
      </>
    );
  }
}
