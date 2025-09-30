import React from "react";
import { Route } from "react-router-dom";
import IconBeachResidencesProject from "../../components/desarrollos/Hollywood/IconBeachResidencesProject";



export default function HollywoodRoutes() {



    return <React.Fragment>
<Route element={<IconBeachResidencesProject/>} path={"/desarrollos/icon-beach-residences"} />
    </React.Fragment>



}