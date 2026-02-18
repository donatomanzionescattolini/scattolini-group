import IconBeachResidencesObject from "../../../objects/desarrollos/Hollywood/IconBeachResidences";
import ProjectTemplate from "../ProjectTemplate";
import { useTranslation } from "../../../i18n.tsx";

export default function IconBeachResidencesProject() {
  const { lang } = useTranslation();
  return <ProjectTemplate desarrollo={IconBeachResidencesObject(lang)} />;
}
