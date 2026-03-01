import {Component} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {getDesarrollosForArea} from '../../objects/desarrollos/Desarrollos';
import Areas from '../../objects/areas/Areas';
import {resolveLocalizedValue} from '../../i18n.tsx';

export default class DesarrollosComponent extends Component {
    render() {
        const lang = (localStorage.getItem('language') || 'es') as 'es' | 'en';

        const getLocalized = (field: any): string => {
            return resolveLocalizedValue<string>(field, lang) || '';
        };

        const areas = Areas();

        return (
            <Container>
                <div className="text-center py-5">
                    <h2>Proyectos</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>

                {areas.map((area) => {
                    const desarr = getDesarrollosForArea(area, lang) ?? new Set();
                    if (desarr.size === 0) return null;

                    return (
                        <div key={area.name} className="mb-5">
                            <h4 className="text-center mb-4">{getLocalized(area.titulo) || area.name}</h4>
                            <Row>
                                {Array.from(desarr).map((desarrollo, idx: number) => {
                                    return (
                                        <Col key={desarrollo.nombre ?? `${area.name}-${idx}`} xs={12} sm={12} md={6} lg={4}
                                             xl={4} className="mb-4">
                                            <Link to={`/desarrollos/${desarrollo.nombre}/`}>
                                                <div
                                                    className="propiedades-img p-0 m-0 desarrollo-card"
                                                    style={{
                                                        backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${desarrollo.nombre}.webp')`,
                                                        height: '250px',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        borderRadius: '8px'
                                                    }}
                                                ></div>
                                                <h5 className="text-center mt-2">
                                                    {getLocalized(desarrollo.titulo) || desarrollo.nombre}
                                                </h5>
                                            </Link>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    );
                })}
            </Container>
        );
    }
}
