import { Route } from "react-router-dom";
import OriginProject from "../../components/desarrollos/BayHarbor/OriginProject";
import AlbaComponent from "../../components/desarrollos/Homestead/AlbaComponent";
import SalernoEstatesComponent from "../../components/desarrollos/Homestead/SalernoEstatesComponent";

export default function HomesteadRoutes() {
  return (
    <>
      <Route element={<SalernoEstatesComponent />} path="/desarrollos/salerno-estates" />
      <Route element={<OriginProject />} path="/desarrollos/origin" />
      <Route element={<AlbaComponent />} path="/desarrollos/alba" />
      <Route element={<AlbaComponent />} path="/en/desarrollos/alba" />
    </>
  );
}
