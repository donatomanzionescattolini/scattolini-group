import React from "react";
import { Route } from "react-router-dom";
import NatiivoFtLauderdaleProject from "../../components/desarrollos/FtLauderdale/NatiivoFtLauderdaleProject";

export default function FtLauderdaleRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route
        element={<NatiivoFtLauderdaleProject />}
        path="/desarrollos/natiivo-ft-lauderdale"
      />
    </React.Fragment>
  );
}
