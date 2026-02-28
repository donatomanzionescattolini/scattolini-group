import ProjectTemplate from "../ProjectTemplate.tsx";
import DomusBrickellCenter from "../../../objects/desarrollos/Brickell/DomusBrickellCenter";
import {useTranslation} from "../../../i18n";

export default function DomusBrickellCenterComponent() {
    const {lang} = useTranslation();
    return <ProjectTemplate desarrollo={DomusBrickellCenter}/>
}
