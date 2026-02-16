import ProjectTemplate from "../ProjectTemplate.tsx";
import SilverlandEstates from "../../../objects/desarrollos/Homestead/SilverlandEstates.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function SilverlandEstatesComponent() {
    const { lang } = useTranslation();
    return (<ProjectTemplate desarrollo={SilverlandEstates(lang)}/>);
}