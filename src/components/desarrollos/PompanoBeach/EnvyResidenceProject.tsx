import EnvyResidence from "../../../objects/desarrollos/PompanoBeach/EnvyResidence";
import ProjectTemplate from "../ProjectTemplate";
import { useTranslation } from "../../../i18n";

export default function EnvyResidenceProject() {
    const { lang } = useTranslation();
    return <ProjectTemplate desarrollo={EnvyResidence(lang)} />;
}