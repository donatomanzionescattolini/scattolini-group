import ProjectTemplate from "../ProjectTemplate.tsx";
import Nexo from "../../../objects/desarrollos/MiamiBeach/Nexo.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function NexoProject() {
    const { lang } = useTranslation();
    return (<ProjectTemplate desarrollo={Nexo(lang)}/>);
}