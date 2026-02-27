import ProjectTemplate from "../ProjectTemplate.tsx";
import EnvyResidence from "../../../objects/desarrollos/PompanoBeach/EnvyResidence.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function EnvyResidenceProject() {
    const { lang } = useTranslation();
    return <ProjectTemplate desarrollo={EnvyResidence} />;
}
