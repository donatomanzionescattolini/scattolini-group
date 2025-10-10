import React from "react";
import MiamiBeachRoutes from "./desarrollos/MiamiBeachRoutes";
import BrickellRoutes from "./desarrollos/BrickellRoutes";
import DowntownRoutes from "./desarrollos/DowntownRoutes";
import BayHarborIslands from "./desarrollos/BayHarborIslandsRoutes";
import EdgewaterRoutes from "./desarrollos/EdgewaterRoutes";
import HomesteadRoutes from "./desarrollos/Homestead";
import PinecrestRoutes from "./desarrollos/PinecrestRoutes";
import fragment from "./desarrollos/SunnyIslesRoutes";
import FloridaCityRoutes from "./desarrollos/FloridaCityRoutes";
import NorthBayVillageRoutes from "./desarrollos/NorthBayVillageRoutes";
import CoralGablesRoutes from "./desarrollos/CoralGablesRoutes";
import CoconutGroveRoutes from "./desarrollos/CoconutGroveRoutes";
import SouthMiamiRoutes from "./desarrollos/SouthMiamiRoutes";
import FtLauderdaleRoutes from "./desarrollos/FtLauderdaleRoutes";
import WynwoodRoutes from "./desarrollos/WynwoodRoutes";
import AventuraRoutes from "./desarrollos/AventuraRoutes";
import DaniaBeachRoutes from "./desarrollos/DaniaBeachRoutes";
import PompanoBeachRoutes from "./desarrollos/PompanoBeachRoutes";
import HollywoodRoutes from "./desarrollos/HollywoodRoutes";
import MidtownMiamiRoutes from "./desarrollos/MidtownMiamiRoutes";

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
      {FtLauderdaleRoutes()}
      {WynwoodRoutes()}
      {MidtownMiamiRoutes()}
      {AventuraRoutes()}
      {DaniaBeachRoutes()}
      {PompanoBeachRoutes()}
      {HollywoodRoutes()}
    </React.Fragment>
  );
}
