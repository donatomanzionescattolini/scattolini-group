import React from "react";
import SalernoEstates from "../../../objects/desarrollos/Homestead/SalernoEstates";
import ProjectTemplate from "../ProjectTemplate";
import { useTranslation } from "../../../i18n.tsx";

export default function SalernoEstatesComponent() {
  const { lang } = useTranslation();
  return <ProjectTemplate desarrollo={SalernoEstates(lang)} />;
}
