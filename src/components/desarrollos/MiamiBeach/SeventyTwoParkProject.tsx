import ProjectTemplate from "../ProjectTemplate.tsx";
import SeventyTwoPark from "../../../objects/desarrollos/MiamiBeach/SeventyTwoPark.tsx";
import { useTranslation } from "../../../i18n.tsx";


export default function SeventyTwoParkProject() {
    const { lang } = useTranslation();
    return (
        <ProjectTemplate

            desarrollo={SeventyTwoPark(lang)}
        />
    );
}
