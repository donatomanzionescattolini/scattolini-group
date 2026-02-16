import ProjectTemplate from "../ProjectTemplate.tsx";
import SevenParkResidencesObject from "../../../objects/desarrollos/Hollywood/SevenParkResidences.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function SevenParkResidencesProject() {
    const { lang } = useTranslation();
    return <ProjectTemplate desarrollo={SevenParkResidencesObject(lang)}/>;
}