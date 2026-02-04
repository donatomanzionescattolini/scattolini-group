import React from "react";
import { Route } from "react-router-dom";
import IconBeachResidencesProject from "../../components/desarrollos/Hollywood/IconBeachResidencesProject";
import SevenParkResidences from "../../objects/desarrollos/Hollywood/SevenParkResidences.tsx";
import SevenParkResidencesProject from "../../components/desarrollos/Hollywood/SevenParkResidencesProject.tsx";



export default function HollywoodRoutes() {



    return <React.Fragment>
<Route element={<IconBeachResidencesProject/>} path={"/desarrollos/icon-beach-residences"} />
        <Route element={<SevenParkResidencesProject></SevenParkResidencesProject>} path={"/desarrollos/seven-park-residences"} />
    </React.Fragment>



}