import {useEffect, useMemo, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {DYNAMIC_DESARROLLOS_UPDATED_EVENT, getDesarrollosForArea} from '../../objects/desarrollos/Desarrollos';
import Areas, {DYNAMIC_AREAS_UPDATED_EVENT} from '../../objects/areas/Areas';
import {resolveLocalizedValue, useTranslation} from '../../i18n.tsx';

export default function DesarrollosComponent() {
    const {t, lang} = useTranslation();
    const [contentVersion, setContentVersion] = useState(0);

    useEffect(() => {
        const handleContentUpdated = () => setContentVersion((prev) => prev + 1);
        window.addEventListener(DYNAMIC_AREAS_UPDATED_EVENT, handleContentUpdated as EventListener);
        window.addEventListener(DYNAMIC_DESARROLLOS_UPDATED_EVENT, handleContentUpdated as EventListener);
        return () => {
            window.removeEventListener(DYNAMIC_AREAS_UPDATED_EVENT, handleContentUpdated as EventListener);
            window.removeEventListener(DYNAMIC_DESARROLLOS_UPDATED_EVENT, handleContentUpdated as EventListener);
        };
    }, []);

    const getLocalized = (field: any): string => {
        return resolveLocalizedValue<string>(field, lang) || '';
    };

    const areas = useMemo(() => Areas(), [contentVersion]);

    return (
        <Container>
            <div className="text-center py-5">
                <h2>{t('pages.desarrollos.title', 'Proyectos')}</h2>
                <hr className="hr hr-blurry w-50 mx-auto"/>
            </div>

            {areas.map((area) => {
                const desarr = getDesarrollosForArea(area, lang) ?? new Set();
                if (desarr.size === 0) return null;

                return (
                    <div key={area.name} className="mb-5">
                        <h4 className="text-center mb-4">{getLocalized(area.titulo) || area.name}</h4>
                        <Row className="justify-content-center">
                            {Array.from(desarr).map((desarrollo, idx: number) => {
                                return (
                                    <Col key={desarrollo.nombre ?? `${area.name}-${idx}`} xs={6} sm={6} md={6} lg={4}
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
