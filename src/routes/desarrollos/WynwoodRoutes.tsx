import React from "react";
import {Route} from "react-router-dom";
import NomadResidencesComponent from "../../components/projects/Wynwood/NomadResidencesComponent.tsx";

const fragment = (
    <React.Fragment>
        <Route element={<NomadResidencesComponent/>} path="/desarrollos/nomad-residences"/>
    </React.Fragment>
);
export default function WynwoodRoutes() {

    return fragment;
}
