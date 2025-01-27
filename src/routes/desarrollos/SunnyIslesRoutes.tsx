import React from "react";
import {Route} from "react-router-dom";
import BentleyResidencesProject from "../../components/projects/SunnyIsles/BentleyResidencesProject.tsx";
import TheMansionsAtAcqualinaProject from "../../components/projects/SunnyIsles/TheMansionsAtAcqualinaProject.tsx";
import {StRegisProject} from "../../components/projects/SunnyIsles/StRegisProject.tsx";

const fragment = (
    <React.Fragment>
        <Route path="/desarrollos/st-regis" element={<StRegisProject/>}/>
        <Route
            element={<BentleyResidencesProject/>}
            path="/desarrollos/bentley-residences"
        />
        <Route
            element={<TheMansionsAtAcqualinaProject/>}
            path="/desarrollos/the-mansions-at-acqualina"
        />
    </React.Fragment>
);
export default fragment;
