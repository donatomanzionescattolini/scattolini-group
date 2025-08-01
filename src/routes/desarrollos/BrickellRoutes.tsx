import React, { ReactFragment } from "react";
import { Route } from "react-router-dom";
import DomusProject from "../../components/desarrollos/Brickell/DomusProject";
import LoftyProject from "../../components/desarrollos/Brickell/LoftyProject";
import BaccaratResidencesComponent from "../../components/desarrollos/Brickell/BaccaratResidencesComponent";
import { FourteenTwentyEightProject } from "../../components/desarrollos/Brickell/FourteenTwentyEightProject";
import OraProject from "../../components/desarrollos/Brickell/OraProject";
import MercedesBenzPlacesMiami from "../../objects/desarrollos/Brickell/MercedesBenzPlacesMiami";
import MercedesBenzPlacesMiamiComponent from "../../components/desarrollos/Brickell/MercedesBenzPlacesComponent";
import _2200BrickellComponent from "../../components/desarrollos/Brickell/2200BrickellComponent";
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
      <Route element={<OraProject/>} path="/desarrollos/ora" />
      <Route element={<MercedesBenzPlacesMiamiComponent/>} path="/desarrollos/mercedes-benz-places-miami" />
      <Route element={<_2200BrickellComponent/>} path="/desarrollos/2200-brickell" />
    </React.Fragment>
  );
}
