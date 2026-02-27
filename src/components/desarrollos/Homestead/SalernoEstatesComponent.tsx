import ProjectTemplate from "../ProjectTemplate.tsx";
import SalernoEstates from "../../../objects/desarrollos/Homestead/SalernoEstates.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function SalernoEstatesComponent() {
  const { lang } = useTranslation();
  return <ProjectTemplate desarrollo={SalernoEstates} />;
}

