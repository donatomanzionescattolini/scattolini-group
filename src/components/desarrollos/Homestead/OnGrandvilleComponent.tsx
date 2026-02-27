


import ProjectTemplate from "../ProjectTemplate.tsx";
import OnGrandville from "../../../objects/desarrollos/Homestead/OnGrandville.tsx";
import { useTranslation } from "../../../i18n.tsx";

export default function OnGrandvilleComponent() {
  const { lang } = useTranslation();
  return <ProjectTemplate desarrollo={OnGrandville} />;
}

