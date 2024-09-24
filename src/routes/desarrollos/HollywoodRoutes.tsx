import React from "react";
import AreaTemplate from "../../components/areas/AreaTemplate";
import { Route } from "react-router-dom";



export default function HollywoodRoutes(){



    return <React.Fragment>

        <Route element={<HollywoodComponent/>} path="/areas/hollywood"/>
    </React.Fragment>



}