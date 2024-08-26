import React from "react";
import { Route } from "react-router-dom";
import TheVillaProject from "../../components/desarrollos/Edgewater/TheVillaProject";
import { TheEditionResidencesProject } from "../../components/desarrollos/Edgewater/TheEditionResidencesProject";
import VidaProject from "../../components/desarrollos/Edgewater/VidaProject";
import AriaReserveProject from "../../components/desarrollos/Edgewater/AriaReserveProject";
import MissoniBaiaProject from "../../components/desarrollos/Edgewater/MissoniBaiaProject";
import ElleProject

export default function EdgewaterRoutes() {
  return (
    <React.Fragment>
      <Route
        element={<AriaReserveProject />}
        path={"/desarrollos/aria-reserve"}
      />
      <Route
        element={<MissoniBaiaProject />}
        path={"/desarrollos/missoni-baia"}
      />
      <Route element={<TheVillaProject />} path={"/desarrollos/the-villa"} />{" "}
      <Route
        element={<TheEditionResidencesProject />}
        path={"/desarrollos/edition-residences"}
      />


      <Route element={<Elle/>} path={"/desarrollos/elle"} />
      <Route element={<VidaProject />} path={"/desarrollos/vida"} />
    </React.Fragment>
  );
}
