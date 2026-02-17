import ProjectTemplate from "../ProjectTemplate.tsx";
import TheWilliam from "../../../objects/desarrollos/MiamiBeach/TheWilliam.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function TheWilliamProject() {
    const { lang } = useTranslation();
    return <ProjectTemplate desarrollo={TheWilliam(lang)}/>;
}