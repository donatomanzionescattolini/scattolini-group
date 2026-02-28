import {Route} from "react-router-dom";
import _2200BrickellComponent from "../../components/desarrollos/Brickell/2200BrickellComponent";
import BrickellDolceAndGabbanaResidencesProject
    from "../../components/desarrollos/Brickell/888BrickellDolceAndGabbanaResidencesProject";
import BaccaratResidencesComponent from "../../components/desarrollos/Brickell/BaccaratResidencesComponent";
import DomusBrickellCenterComponent from "../../components/desarrollos/Brickell/DomusBrickellCenterComponent";
import DomusProject from "../../components/desarrollos/Brickell/DomusProject";
import LoftyProject from "../../components/desarrollos/Brickell/LoftyProject";
import MercedesBenzPlacesComponent from "../../components/desarrollos/Brickell/MercedesBenzPlacesComponent";
import OraProject from "../../components/desarrollos/Brickell/OraProject";
import ViceroyBrickellProject from "../../components/desarrollos/Brickell/ViceroyBrickellProject";
import {CiprianiProjec} from "../../components/desarrollos/Brickell/CiprianiProject";
import {FourteenTwentyEightProject} from "../../components/desarrollos/Brickell/FourteenTwentyEightProject";

export default function BrickellRoutes() {
    return (
        <>
            <Route element={<DomusProject/>} path="/desarrollos/domus"/>
            <Route element={<LoftyProject/>} path="/desarrollos/lofty"/>
            <Route element={<FourteenTwentyEightProject/>} path="/desarrollos/1428-brickell"/>

            <Route element={<BaccaratResidencesComponent/>} path="/desarrollos/baccarat"/>
            <Route element={<OraProject/>} path="/desarrollos/ora"/>
            <Route element={<MercedesBenzPlacesComponent/>} path="/desarrollos/mercedes-benz-places-miami"/>
            <Route element={<DomusBrickellCenterComponent/>} path="/desarrollos/domus-brickell-center"/>
            <Route element={<_2200BrickellComponent/>} path="/desarrollos/2200-brickell"/>
            <Route element={<CiprianiProjec/>} path="/desarrollos/cipriani"/>
            <Route
                element={<BrickellDolceAndGabbanaResidencesProject/>}
                path="/desarrollos/888-brickell-dolce-and-gabbana-residences"
            />
            <Route element={<ViceroyBrickellProject/>} path="/desarrollos/viceroy-brickell"/>
        </>
    );
}
