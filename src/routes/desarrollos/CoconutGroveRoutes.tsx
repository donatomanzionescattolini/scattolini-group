import React from "react";
import { Route } from "react-router-dom";
import VitaProject from "../../components/desarrollos/CoconutGrove/VitaProject";
import TheWellCoconutGroveProject from "../../components/desarrollos/CoconutGrove/TheWellCoconutGroveProject.tsx";

export default function CoconutGroveRoutes() {
  return (
    <React.Fragment>
      <Route element={<VitaProject />} path={"/desarrollos/vita"} />
        <Route element={<TheWellCoconutGroveProject/>} path={"/desarrollos/the-well-coconut-grove"} />
    </React.Fragment>
  );
}
