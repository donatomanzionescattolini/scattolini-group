import React from "react";
import { Route } from "react-router-dom";
import CentrisProject from "../../components/desarrollos/Pinecrest/CentrisProject";
import PineParkVillasProject from "../../components/desarrollos/Pinecrest/PineParkVillasProject";
import PinelandRocklandEstatesProject from "../../components/desarrollos/Pinecrest/PinelandRocklandEstatesProject";

export default function PinecrestRoutes() {
  return (
    <React.Fragment>
      <Route
        element={<PineParkVillasProject />}
        path={"/desarrollos/pine-park-villas"}
      />
      <Route
        element={<PinelandRocklandEstatesProject />}
        path={"/desarrollos/pine-rockland-estates"}
      />
      <Route element={<CentrisProject />} path={"/desarrollos/centris"} />
    </React.Fragment>
  );
}
