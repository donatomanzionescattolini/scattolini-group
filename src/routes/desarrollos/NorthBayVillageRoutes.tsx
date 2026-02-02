import React from "react";
import { Route } from "react-router-dom";
import ShomaBayProject from "../../components/desarrollos/NorthBayVillage/ShomaBayProject";
import {TulaResidencesProject} from "../../components/desarrollos/MiamiBeach/TulaResidencesProject.tsx";

export default function NorthBayVillageRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route element={<ShomaBayProject />} path={"/desarrollos/shoma-bay"} />
        <Route element={<TulaResidencesProject/>} path={"/desarrollos/tula-residences"} />
    </React.Fragment>
  );
}
