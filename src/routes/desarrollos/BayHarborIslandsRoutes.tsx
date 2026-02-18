import React from "react";
import { Route } from "react-router-dom";
import LaBaiaNorthProject from "../../components/desarrollos/BayHarbor/LaBaiaNorthProject";
import LaMaréProject from "../../components/desarrollos/BayHarbor/LaMaréProject";
import AlbaComponent from "../../components/desarrollos/Homestead/AlbaComponent";
import TheWellProject from "../../components/desarrollos/BayHarbor/TheWellProject";

export default function BayHarborIslands() {
  return (
    <>
      {" "}
      <Route element={<LaBaiaNorthProject />} path={"/desarrollos/la-baia"} />
      <Route element={<LaMaréProject />} path={"/desarrollos/la-maré"} />
      <Route element={<AlbaComponent />} path={"/desarrollos/alba"} />
      <Route element={<TheWellProject />} path={"/desarrollos/the-well"} />
    </>
  );
}
