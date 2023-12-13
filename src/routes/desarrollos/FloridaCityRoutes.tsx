import React from "react";
import OnGrandvilleComponent from "../../components/desarrollos/Homestead/OnGrandvilleComponent";
import { Route } from "react-router-dom";

export default function FloridaCityRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route
        element={<OnGrandvilleComponent />}
        path="/desarrollos/on-grandville"
      />
    </React.Fragment>
  );
}
