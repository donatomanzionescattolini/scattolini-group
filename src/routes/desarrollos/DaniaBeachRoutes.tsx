import React from "react";
import {Route} from "react-router-dom";
import AtlanticaComponent from "../../components/desarrollos/DaniaBeach/AtlanticaComponent";


export default function DaniaBeachRoutes() {


    return <React.Fragment>
        <Route element={<AtlanticaComponent/>} path="/desarrollos/atlantica"/>
    </React.Fragment>


}