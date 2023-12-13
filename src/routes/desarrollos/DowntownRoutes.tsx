import React from "react";
import { Route } from "react-router-dom";
import AstonMartinProject from "../../components/desarrollos/Downtown/AstonMartinProject";
import CasaBellaProject from "../../components/desarrollos/Downtown/CasaBellaProject";
import WaldorfAstoriaProject from "../../components/desarrollos/Downtown/WaldorfAstoriaProject";
import { W11Project } from "../../components/desarrollos/Downtown/W11Project";
import { CiprianiProjec } from "../../components/desarrollos/Downtown/CiprianiProject";
import TheElserProject from "../../components/desarrollos/Downtown/TheElserProject";

export default function () {
  return (
    <React.Fragment>
      {" "}
      <Route
        element={<AstonMartinProject />}
        path={"/desarrollos/aston-martin"}
      />{" "}
      <Route element={<TheElserProject />} path={"/desarrollos/the-elser"} />
      <Route element={<W11Project />} path={"/desarrollos/w11"} />
      <Route element={<CasaBellaProject />} path={"/desarrollos/casa-bella"} />
      <Route
        element={<WaldorfAstoriaProject />}
        path={"/desarrollos/waldorf-astoria"}
      />
      <Route path="/desarrollos/cipriani" element={<CiprianiProjec />} />
    </React.Fragment>
  );
}
