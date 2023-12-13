import React from "react";
import { Route } from "react-router-dom";
import TheAvenueProject from "../../components/desarrollos/CoralGables/TheAvenueProject";

export default function CoralGablesRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route element={<TheAvenueProject />} path={"/desarrollos/the-avenue"} />
    </React.Fragment>
  );
}
