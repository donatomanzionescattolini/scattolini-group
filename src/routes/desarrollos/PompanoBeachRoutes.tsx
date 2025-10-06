import React from "react";
import { Route } from "react-router-dom";
import WPompanoBeachComponent from "../../components/desarrollos/PompanoBeach/WPompanoBeachComponent";
import EnvyResidenceProject from "../../components/desarrollos/PompanoBeach/EnvyResidenceProject";

export default function PompanoBeachRoutes() {
  return (
    <React.Fragment>
      <Route
        element={<WPompanoBeachComponent />}
        path="/desarrollos/w-pompano-beach"
      />
      <Route
        path="/desarrollos/envy-residence"
        element={<EnvyResidenceProject />}
      />
    </React.Fragment>
  );
}
