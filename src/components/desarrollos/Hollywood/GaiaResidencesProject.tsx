import ProjectTemplate from "../DesarrolloTemplate.tsx";
import GaiaResidencesObject from "../../../objects/desarrollos/Hollywood/GaiaResidences.tsx";
import { useTranslation } from "../../../i18n.tsx";


export default function GaiaResidencesProject(){
    const { lang } = useTranslation();
    return <ProjectTemplate desarrollo={GaiaResidencesObject(lang)}/>;
}