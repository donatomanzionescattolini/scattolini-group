import ProjectTemplate from "../ProjectTemplate.tsx";
import Palma from "../../../objects/desarrollos/MiamiBeach/Palma.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function PalmaProject(){
    const { lang } = useTranslation();
    return <ProjectTemplate desarrollo={Palma(lang)} />


}