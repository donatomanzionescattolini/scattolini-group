import React, {useEffect, useMemo, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Areas, {DYNAMIC_AREAS_UPDATED_EVENT} from "../objects/areas/Areas";
import {DYNAMIC_DESARROLLOS_UPDATED_EVENT, getDesarrollosForArea} from "../objects/desarrollos/Desarrollos.ts";
import {useTranslation} from "../i18n.tsx";

export default function AreasComponent(): React.ReactElement {
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

    const getLocalized = (field: string | Record<string, string> | null | undefined) => {
        if (!field) return "";
        const isPlaceholder = (value: unknown) =>
            typeof value === "string" && value.trim().toLowerCase() === "latest";
        if (typeof field === "object") {
            const preferred = field[lang];
            if (preferred && !isPlaceholder(preferred)) return preferred;
            const spanish = field.es;
            if (spanish && !isPlaceholder(spanish)) return spanish;
            const firstValid = Object.values(field).find(
                (value) => value && !isPlaceholder(value)
            );
            return firstValid || "";
        }
        if (isPlaceholder(field)) return "";
        return field;
    };

    const allAreas = useMemo(() => Areas(), [contentVersion]);

    // Filter to only show areas that have projects
    const {areasWithProjects} = useMemo(() => {
        const withProjects: typeof allAreas = [];
        const withoutProjects: typeof allAreas = [];

        allAreas.forEach((area) => {
            const desarrollos = getDesarrollosForArea(area, lang);
            if (desarrollos.size > 0) {
                withProjects.push(area);
            } else {
                withoutProjects.push(area);
            }
        });

        return {areasWithProjects: withProjects, areasWithoutProjects: withoutProjects};
    }, [allAreas, lang, contentVersion]);

    // Areas without projects (kept for future use):
    // These areas exist but have no active listings yet
    // console.log('Areas without projects:', areasWithoutProjects.map(a => a.name));

    const areas = areasWithProjects;

    return (
        <Container>
            <br/>
            <br/>
            <div>
                <h3 className="text-center mb-1">{t("pages.areas.title")}</h3>
            </div>
            <hr className="hr hr-blurry w-50 mx-auto"/>

            <Row className="justify-content-center">
                {areas.map((area) => (
                    <Col key={area.name} xs={6} sm={6} md={6} lg={4} xl={4} className="gallery-item">
                        <Link to={`/areas/${area.name}/`}>
                            <div
                                className="gallery-card"
                                style={{
                                    backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/thumbnail.webp')`,
                                }}
                            />
                            <h4 className="text-center">{getLocalized(area.titulo)}</h4>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
