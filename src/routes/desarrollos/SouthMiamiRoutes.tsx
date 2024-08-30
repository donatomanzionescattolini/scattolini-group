import React from "react";
import { Route } from "react-router-dom";
import SouthMiamiComponent from "../../components/areas/SouthMiamiComponent";
import SomiWalkComponent from "../../components/desarrollos/SouthMiami/SomiWalkComponent";

const SouthMiamiRoutes = ()=> {
  return <React.Fragment>
    <Route path="/desarrollos/somi-walk" element={<SomiWalkComponent/>} />
  </React.Fragment>}

  export default SouthMiamiRoutes;
