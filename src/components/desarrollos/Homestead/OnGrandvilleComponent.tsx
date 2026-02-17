import React from "react";
import ProjectTemplate from "../ProjectTemplate";
import OnGrandville from "../../../objects/desarrollos/Homestead/OnGrandville";
import { useTranslation } from "../../../i18n.tsx";

export default function OnGrandvilleComponent() {
  const { lang } = useTranslation();
  return <ProjectTemplate desarrollo={OnGrandville(lang)} />;
}
