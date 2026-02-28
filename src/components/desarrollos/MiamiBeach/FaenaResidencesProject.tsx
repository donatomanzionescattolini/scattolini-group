import ProjectTemplate from "../ProjectTemplate.tsx";
import FaenaResidences from "../../../objects/desarrollos/MiamiBeach/FaenaResidences.tsx";
import {useTranslation} from "../../../i18n.tsx";

export default function FaenaResidencesProject() {
    const {lang} = useTranslation();
    return <ProjectTemplate desarrollo={FaenaResidences}/>;
}
