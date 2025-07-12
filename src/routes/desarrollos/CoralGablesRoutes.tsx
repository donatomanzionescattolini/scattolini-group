import React from "react";
import { Route } from "react-router-dom";
import TheAvenueProject from "../../components/desarrollos/CoralGables/TheAvenueProject";
import CoraMerrickParkProject from "../../components/desarrollos/CoralGables/CoraMerrickParkProject";

export default function CoralGablesRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route element={<TheAvenueProject />} path={"/desarrollos/the-avenue"} />
      <Route element={<CoraMerrickParkProject />} path={"/desarrollos/cora-merrick-park"} />
    </React.Fragment>
  );
}
