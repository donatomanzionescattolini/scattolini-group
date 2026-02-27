import { Route } from "react-router-dom";
import GaiaResidencesProject from "../../components/desarrollos/Hollywood/GaiaResidencesProject";
import IconBeachResidencesProject from "../../components/desarrollos/Hollywood/IconBeachResidencesProject";
import SevenParkResidencesProject from "../../components/desarrollos/Hollywood/SevenParkResidencesProject";

export default function HollywoodRoutes() {
  return (
    <>
      <Route element={<IconBeachResidencesProject />} path="/desarrollos/icon-beach-residences" />
      <Route element={<SevenParkResidencesProject />} path="/desarrollos/seven-park-residences" />
      <Route element={<GaiaResidencesProject />} path="/desarrollos/gaia-residences" />
    </>
  );
}
