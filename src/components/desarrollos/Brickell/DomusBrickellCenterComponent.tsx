import DomusBrickellCenter from "../../../objects/desarrollos/Brickell/DomusBrickellCenter";
import ProjectTemplate from "../ProjectTemplate";
import { useTranslation } from "../../../i18n";

export default function DomusBrickellCenterComponent(){
    const { lang } = useTranslation();
    return <ProjectTemplate desarrollo={DomusBrickellCenter(lang)} />
}