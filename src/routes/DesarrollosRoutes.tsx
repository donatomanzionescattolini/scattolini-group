import React from "react";
import AventuraRoutes from "./desarrollos/AventuraRoutes";
import BayHarborIslandsRoutes from "./desarrollos/BayHarborIslandsRoutes";
import BrickellRoutes from "./desarrollos/BrickellRoutes";
import CoconutGroveRoutes from "./desarrollos/CoconutGroveRoutes";
import CoralGablesRoutes from "./desarrollos/CoralGablesRoutes";
import DaniaBeachRoutes from "./desarrollos/DaniaBeachRoutes";
import DowntownRoutes from "./desarrollos/DowntownRoutes";
import EdgewaterRoutes from "./desarrollos/EdgewaterRoutes";
import FloridaCityRoutes from "./desarrollos/FloridaCityRoutes";
import FtLauderdaleRoutes from "./desarrollos/FtLauderdaleRoutes";
import HollywoodRoutes from "./desarrollos/HollywoodRoutes";
import HomesteadRoutes from "./desarrollos/Homestead";
import MiamiBeachRoutes from "./desarrollos/MiamiBeachRoutes";
import MidtownMiamiRoutes from "./desarrollos/MidtownMiamiRoutes";
import NorthBayVillageRoutes from "./desarrollos/NorthBayVillageRoutes";
import PinecrestRoutes from "./desarrollos/PinecrestRoutes";
import PompanoBeachRoutes from "./desarrollos/PompanoBeachRoutes";
import SouthMiamiRoutes from "./desarrollos/SouthMiamiRoutes";
import SunnyIslesRoutes from "./desarrollos/SunnyIslesRoutes";
import WynwoodRoutes from "./desarrollos/WynwoodRoutes";
import OrlandoRoutes from "./desarrollos/OrlandoRoutes.tsx";

export default function DesarrollosRoutes() {
    return (
        <>
            {MiamiBeachRoutes()}
            {BrickellRoutes()}
            {DowntownRoutes()}
            {BayHarborIslandsRoutes()}
            {EdgewaterRoutes()}
            {HomesteadRoutes()}
            {PinecrestRoutes()}
            {SunnyIslesRoutes()}
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
            {OrlandoRoutes()}
        </>
    );
}
