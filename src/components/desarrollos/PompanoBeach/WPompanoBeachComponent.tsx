import WPompanoBeach from "../../../objects/desarrollos/PompanoBeach/WPompanoBeach";
import ProjectTemplate from "../ProjectTemplate";
import { useTranslation } from "../../../i18n";

export default function WPompanoBeachComponent() {
    const { lang } = useTranslation();
    return <ProjectTemplate desarrollo={WPompanoBeach(lang)} />;
}