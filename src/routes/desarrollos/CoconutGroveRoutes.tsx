import React from "react";
import {Route} from "react-router-dom";
import VitaProject from "../../components/desarrollos/CoconutGrove/VitaProject";

export default function CoconutGroveRoutes() {
    return (
        <React.Fragment>
            <Route element={<VitaProject/>} path={"/desarrollos/vita-grove"}/>
        </React.Fragment>
    );
}
