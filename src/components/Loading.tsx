import {MDBSpinner} from "mdb-react-ui-kit";
import { useTranslation } from "../i18n.tsx";

export default function Loading() {
    const { t } = useTranslation();
    return (
        <MDBSpinner role="status">
            <span className="visually-hidden">{t("common.loading")}</span>
        </MDBSpinner>
    );
}
