import React, {useEffect, useState} from "react";
import {Alert, Spinner} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useTranslation} from "../../i18n.tsx";
import Desarrollo from "../../models/desarrollos/Desarrollo.tsx";
import {getAllDesarrollos} from "../../services/database";
import {findDesarrolloBySlug, replaceDynamicDesarrollos} from "../../objects/desarrollos/Desarrollos";
import ProjectTemplate from "./ProjectTemplate.tsx";

export default function DynamicDesarrolloRoute() {
    const {slug = ""} = useParams();
    const {lang, t} = useTranslation();
    const [desarrollo, setDesarrollo] = useState<Desarrollo | null>(() =>
        findDesarrolloBySlug(slug, lang),
    );
    const [loading, setLoading] = useState(!desarrollo);

    useEffect(() => {
        let isActive = true;

        const resolveDesarrollo = async () => {
            const existing = findDesarrolloBySlug(slug, lang);
            if (existing) {
                if (isActive) {
                    setDesarrollo(existing);
                    setLoading(false);
                }
                return;
            }

            setLoading(true);
            try {
                const dynamicDesarrollos = await getAllDesarrollos();
                replaceDynamicDesarrollos(dynamicDesarrollos as any);
                if (isActive) {
                    setDesarrollo(findDesarrolloBySlug(slug, lang));
                }
            } catch (error) {
                console.error("Error resolving dynamic development route:", error);
                if (isActive) {
                    setDesarrollo(null);
                }
            } finally {
                if (isActive) {
                    setLoading(false);
                }
            }
        };

        resolveDesarrollo();

        return () => {
            isActive = false;
        };
    }, [lang, slug]);

    if (loading) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border"/>
            </div>
        );
    }

    if (!desarrollo) {
        return (
            <Alert variant="warning" className="m-4">
                {t("pages.project.notFound", "We couldn't find that development.")}
            </Alert>
        );
    }

    return <ProjectTemplate desarrollo={desarrollo}/>;
}

