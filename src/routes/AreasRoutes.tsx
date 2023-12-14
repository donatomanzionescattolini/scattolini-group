import { Route } from "react-router-dom";
import BayHarborComponent from "../components/areas/BayHarborComponent";
import BrickellComponent from "../components/areas/BrickellComponent";
import CoconutGroveComponent from "../components/areas/CoconutGroveComponent";
import CoralGablesComponent from "../components/areas/CoralGablesComponent";
import DoralComponent from "../components/areas/DoralComponent";
import DowntownComponent from "../components/areas/DowntownComponent";
import EdgewaterComponent from "../components/areas/EdgewaterComponent";
import HomesteadComponent from "../components/areas/HomesteadComponent";
import MiamiBeachComponent from "../components/areas/MiamiBeachComponent";
import NorthBayVillageComponent from "../components/areas/NorthBayVillageComponent";
import PinecrestComponent from "../components/areas/PinecrestComponent";
import SunnyIslesComponent from "../components/areas/SunnyIslesComponent";
import React, { ReactFragment } from "react";
import FloridaCityComponent from "../components/areas/FloridaCityComponent";

export default function AreasRoutes() {
  return (
    <React.Fragment>
      <Route element={<BrickellComponent />} path="/areas/brickell" />
      <Route element={<DowntownComponent />} path="/areas/downtown" />
      <Route element={<HomesteadComponent />} path="/areas/homestead" />
      <Route element={<BayHarborComponent />} path="/areas/bay-harbor" />
      <Route
        element={<NorthBayVillageComponent />}
        path="/areas/north-bay-village"
      />
      <Route element={<CoralGablesComponent />} path="/areas/coral-gables" />
      <Route element={<CoconutGroveComponent />} path="/areas/coconut-grove" />
      <Route element={<DoralComponent />} path="/areas/doral"></Route>
      <Route element={<PinecrestComponent />} path="/areas/pinecrest"></Route>
      <Route
        element={<SunnyIslesComponent />}
        path="/areas/sunny-isles"
      ></Route>
      <Route element={<EdgewaterComponent />} path="/areas/edgewater"></Route>
      <Route
        element={<MiamiBeachComponent />}
        path="/areas/miami-beach"
      ></Route>
      <Route
        element={<FloridaCityComponent />}
        path="/areas/florida-city"
      ></Route>
    </React.Fragment>
  );
}
