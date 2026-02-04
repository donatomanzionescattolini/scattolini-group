import React from "react";
import {Route} from "react-router-dom";
import IconBeachResidencesProject from "../../components/desarrollos/Hollywood/IconBeachResidencesProject";
import SevenParkResidencesProject from "../../components/desarrollos/Hollywood/SevenParkResidencesProject.tsx";
import GaiaResidencesProject from "../../components/desarrollos/Hollywood/GaiaResidencesProject.tsx";


export default function HollywoodRoutes() {


    return <React.Fragment>
        <Route element={<IconBeachResidencesProject/>} path={"/desarrollos/icon-beach-residences"}/>
        <Route element={<SevenParkResidencesProject></SevenParkResidencesProject>}
               path={"/desarrollos/seven-park-residences"}/>
        <Route element={<GaiaResidencesProject></GaiaResidencesProject>} path={"/desarrollos/gaia-residences"}/>
    </React.Fragment>


}