import React, { ReactFragment } from "react";
import { Route } from "react-router-dom";
import DomusProject from "../../components/desarrollos/Brickell/DomusProject";
import LoftyProject from "../../components/desarrollos/Brickell/LoftyProject";
import BaccaratResidencesComponent from "../../components/desarrollos/Brickell/BaccaratResidencesComponent";
import { FourteenTwentyEightProject } from "../../components/desarrollos/Brickell/FourteenTwentyEightProject";
import CasaTuaResidencesComponent from "../../components/desarrollos/Brickell/CasaTuaResidencesComponent";

export default function BrickellRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route element={<DomusProject />} path={"/desarrollos/domus"} />
      <Route element={<LoftyProject />} path={"/desarrollos/lofty"} />
      <Route
        element={<FourteenTwentyEightProject />}
        path="/desarrollos/1428-brickell"
      />
      <Route
        element={<BaccaratResidencesComponent />}
        path="/desarrollos/baccarat"
      />
      <Route element={<CasaTuaResidencesComponent/>} path="/desarrollos/casa-tua-residences" />
    </React.Fragment>
  );
}
