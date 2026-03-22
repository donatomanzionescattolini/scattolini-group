import {Route} from "react-router-dom";
import AreasComponent from "../components/areas/AreasComponent";
import AventuraComponent from "../components/areas/AventuraComponent";
import BayHarborComponent from "../components/areas/BayHarborComponent";
import BrickellComponent from "../components/areas/BrickellComponent";
import CoconutGroveComponent from "../components/areas/CoconutGroveComponent";
import CoralGablesComponent from "../components/areas/CoralGablesComponent";
import DaniaBeachComponent from "../components/areas/DaniaBeachComponent";
import DoralComponent from "../components/areas/DoralComponent";
import DowntownComponent from "../components/areas/DowntownComponent";
import EdgewaterComponent from "../components/areas/EdgewaterComponent";
import FloridaCityComponent from "../components/areas/FloridaCityComponent";
import FtLauderdaleComponent from "../components/areas/FtLauderdaleComponent";
import HollyWoodComponent from "../components/areas/HollywoodComponent";
import HomesteadComponent from "../components/areas/HomesteadComponent";
import MiamiBeachComponent from "../components/areas/MiamiBeachComponent";
import MidtownMiamiProject from "../components/areas/MidtownMiamiProject";
import NorthBayVillageComponent from "../components/areas/NorthBayVillageComponent";
import PembrokePinesComponent from "../components/areas/PembrokePinesComponent";
import PinecrestComponent from "../components/areas/PinecrestComponent";
import PompanoBeachComponent from "../components/areas/PompanoBeachComponent";
import SouthMiamiComponent from "../components/areas/SouthMiamiComponent";
import SunnyIslesComponent from "../components/areas/SunnyIslesComponent";
import WynwoodCoponent from "../components/areas/WynwoodComponent";
import {OrlandoComponent} from "../components/areas/OrlandoComponent.tsx";
import DynamicAreaRoute from "../components/areas/DynamicAreaRoute.tsx";

export default function AreasRoutes() {
    return (
        <>
            <Route element={<AreasComponent/>} path="/areas"/>
            <Route element={<BrickellComponent/>} path="/areas/brickell"/>
            <Route element={<DowntownComponent/>} path="/areas/downtown"/>
            <Route element={<HomesteadComponent/>} path="/areas/homestead"/>
            <Route element={<BayHarborComponent/>} path="/areas/bay-harbor"/>
            <Route
                element={<NorthBayVillageComponent/>}
                path="/areas/north-bay-village"
            />
            <Route element={<SouthMiamiComponent/>} path="/areas/south-miami"/>
            <Route element={<CoralGablesComponent/>} path="/areas/coral-gables"/>
            <Route element={<CoconutGroveComponent/>} path="/areas/coconut-grove"/>
            <Route element={<DoralComponent/>} path="/areas/doral"></Route>
            <Route element={<PinecrestComponent/>} path="/areas/pinecrest"></Route>
            <Route
                element={<SunnyIslesComponent/>}
                path="/areas/sunny-isles"
            ></Route>
            <Route element={<EdgewaterComponent/>} path="/areas/edgewater"></Route>
            <Route
                element={<MiamiBeachComponent/>}
                path="/areas/miami-beach"
            />
                <Route element={<OrlandoComponent/>} path={"/areas/orlando"}/>
            <Route
                element={<FtLauderdaleComponent/>}
                path={"/areas/ft-lauderdale"}
            />
            <Route
                element={<FloridaCityComponent/>}
                path="/areas/florida-city"
            ></Route>
            <Route
                element={<PompanoBeachComponent/>}
                path={"/areas/pompano-beach"}
            />
            <Route element={<AventuraComponent/>} path="/areas/aventura"/>
            <Route
                element={<PembrokePinesComponent/>}
                path="/areas/pembroke-pines"
            />
            <Route element={<WynwoodCoponent/>} path="/areas/wynwood"/>
            <Route element={<HollyWoodComponent/>} path="/areas/hollywood"/>
            <Route element={<DaniaBeachComponent/>} path="/areas/dania-beach"/>
            <Route element={<MidtownMiamiProject/>} path="/areas/midtown-miami"/>
            <Route element={<DynamicAreaRoute/>} path="/areas/:slug"/>
        </>
    );
}
