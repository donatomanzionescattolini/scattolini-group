import React from "react";
import {Route} from "react-router-dom";

import BentleyResidencesProject from "../../components/desarrollos/SunnyIsles/BentleyResidencesProject";
import {StRegisProject} from "../../components/desarrollos/SunnyIsles/StRegisProject";
import TheMansionsAtAcqualinaProject from "../../components/desarrollos/SunnyIsles/TheMansionsAtAcqualinaProject";

export default function SunnyIslesRoutes(): React.ReactElement {
    return (
        <>
            <Route path="/desarrollos/st-regis" element={<StRegisProject/>}/>
            <Route
                element={<BentleyResidencesProject/>}
                path="/desarrollos/bentley-residences"
            />
            <Route
                element={<TheMansionsAtAcqualinaProject/>}
                path="/desarrollos/the-mansions-at-acqualina"
            />
        </>
    );
}
