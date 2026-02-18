import ProjectTemplate from "../ProjectTemplate.tsx";
import FivePark from "../../../objects/desarrollos/MiamiBeach/FivePark.tsx";
import { useTranslation } from "../../../i18n.tsx";


export default function FiveParkProject() {
    const { lang } = useTranslation();
    return (
        <ProjectTemplate

            desarrollo={FivePark(lang)}/>
    );
}
