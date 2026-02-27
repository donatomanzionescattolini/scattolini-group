import { useTranslation } from "../i18n.tsx";
import { Spinner } from "react-bootstrap";

export default function Loading() {
    const { t } = useTranslation();
    return (
        <Spinner role="status">
            <span className="visually-hidden">{t("common.loading", "Loading...")}</span>
        </Spinner>
    );
}
