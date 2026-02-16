import SeventyTwoCarlyle from "../../../objects/desarrollos/MiamiBeach/72Carlyle.tsx";
import ProjectTemplate from "../ProjectTemplate.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function SeventyTwoCarlyleProject() {
    const { lang } = useTranslation();
    return <ProjectTemplate desarrollo={SeventyTwoCarlyle(lang)}/>;
}