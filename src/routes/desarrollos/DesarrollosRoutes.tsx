import React from "react";
import MiamiBeachRoutes from "./MiamiBeachRoutes";
import BrickellRoutes from "./BrickellRoutes";
import DowntownRoutes from "./DowntownRoutes";
import BayHarborIslands from "./BayHarborIslandsRoutes";
import EdgewaterRoutes from "./EdgewaterRoutes";
import HomesteadRoutes from "./Homestead";
import PinecrestRoutes from "./PinecrestRoutes";
import fragment from "./SunnyIslesRoutes";
import FloridaCityRoutes from "./FloridaCityRoutes";
import NorthBayVillageRoutes from "./NorthBayVillageRoutes";
import CoralGablesRoutes from "./CoralGablesRoutes";
import CoconutGroveRoutes from "./CoconutGroveRoutes";
import SouthMiamiRoutes from "./SouthMiamiRoutes";

export default function DesarrollosRoutes() {
  

  return (
    <React.Fragment>
      {MiamiBeachRoutes()}
      {BrickellRoutes()}
      {DowntownRoutes()}
      {BayHarborIslands()}
      {EdgewaterRoutes()}
      {HomesteadRoutes()}
      {PinecrestRoutes()}
      {fragment}
      {FloridaCityRoutes()}
      {NorthBayVillageRoutes()}
      {CoralGablesRoutes()}
      {CoconutGroveRoutes()}
      {SouthMiamiRoutes()}
    </React.Fragment>
  );
}
