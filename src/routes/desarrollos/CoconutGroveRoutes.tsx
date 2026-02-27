import { Route } from "react-router-dom";
import TheWellCoconutGroveProject from "../../components/desarrollos/CoconutGrove/TheWellCoconutGroveProject";
import VitaProject from "../../components/desarrollos/CoconutGrove/VitaProject";

export default function CoconutGroveRoutes() {
  return (
    <>
      <Route element={<VitaProject />} path="/desarrollos/vita" />
      <Route element={<TheWellCoconutGroveProject />} path="/desarrollos/the-well-coconut-grove" />
    </>
  );
}
