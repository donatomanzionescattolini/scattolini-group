import ProjectTemplate from "../ProjectTemplate.tsx";
import SedonaEstates from "../../../objects/desarrollos/Homestead/SedonaEstates.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function SedonaEstatesComponent() {
    const { lang } = useTranslation();
    return (<ProjectTemplate desarrollo={SedonaEstates(lang)}/>);
}