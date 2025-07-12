import React from "react";
import { Route } from "react-router-dom";
import ShomaBayProject from "../../components/desarrollos/NorthBayVillage/ShomaBayProject";

export default function NorthBayVillageRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route element={<ShomaBayProject />} path={"/desarrollos/shoma-bay"} />
    </React.Fragment>
  );
}
