import React from "react";
import { Route } from "react-router-dom";
import NomadResidencesComponent from "../../components/desarrollos/Wynwood/NomadResidencesComponent";

const fragment = (
    <React.Fragment>
        <Route element={<NomadResidencesComponent />} path="/desarrollos/nomad-residences" />
    </React.Fragment>
);
export default function WynwoodRoutes() {

    return fragment;
}
