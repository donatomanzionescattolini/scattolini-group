import React from "react";
import { Route } from "react-router-dom";
import WPompanoBeachComponent from "../../components/desarrollos/PompanoBeach/WPompanoBeachComponent";

export default function PompanoBeachRoutes() {
  return (
    <React.Fragment>
      <Route
        element={<WPompanoBeachComponent />}
        path="/desarrollos/w-pompano-beach"
      />
    </React.Fragment>
  );
}
