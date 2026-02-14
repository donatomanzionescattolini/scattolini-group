import React from "react";
import { Route } from "react-router-dom";
import AlbaComponent from "../../components/desarrollos/Homestead/AlbaComponent";
import OriginProject from "../../components/desarrollos/BayHarbor/OriginProject";
import SalernoEstatesComponent from "../../components/desarrollos/Homestead/SalernoEstatesComponent";

export default function HomesteadRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route
        element={<SalernoEstatesComponent />}
        path={"/desarrollos/salerno-estates"}
      />
      <Route element={<OriginProject />} path={"/desarrollos/origin"} />
      <Route element={<AlbaComponent />} path={"/desarrollos/alba"} />
      <Route element={<AlbaComponent />} path={"/en/desarrollos/alba"} />
    </React.Fragment>
  );
}
