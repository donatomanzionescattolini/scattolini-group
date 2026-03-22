import {useEffect, useState} from "react";
import {Alert, Spinner} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useTranslation} from "../../i18n.tsx";
import {Area} from "../../models/areas/Area";
import {findAreaBySlug, replaceDynamicAreas} from "../../objects/areas/Areas";
import {getAllAreas} from "../../services/database";
import AreaTemplate from "./AreaTemplate";

export default function DynamicAreaRoute() {
    const {slug = ""} = useParams();
    const {t} = useTranslation();
    const [area, setArea] = useState<Area | null>(() => findAreaBySlug(slug));
    const [loading, setLoading] = useState(!area);

    useEffect(() => {
        let isActive = true;

        const resolveArea = async () => {
            const existing = findAreaBySlug(slug);
            if (existing) {
                if (isActive) {
                    setArea(existing);
                    setLoading(false);
                }
                return;
            }

            setLoading(true);
            try {
                const dynamicAreas = await getAllAreas();
                replaceDynamicAreas(dynamicAreas as any);
                const resolvedArea = findAreaBySlug(slug);
                if (isActive) {
                    setArea(resolvedArea);
                }
            } catch (error) {
                console.error("Error resolving dynamic area route:", error);
                if (isActive) {
                    setArea(null);
                }
            } finally {
                if (isActive) {
                    setLoading(false);
                }
            }
        };

        resolveArea();

        return () => {
            isActive = false;
        };
    }, [slug]);

    if (loading) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border"/>
            </div>
        );
    }

    if (!area) {
        return (
            <Alert variant="warning" className="m-4">
                {t("pages.areas.notFound", "We couldn't find that area.")}
            </Alert>
        );
    }

    return <AreaTemplate area={area}/>;
}
