import {Route} from "react-router-dom";
import AriaReserveProject from "../../components/desarrollos/Edgewater/AriaReserveProject";
import EdgeHouseProject from "../../components/desarrollos/Edgewater/EdgeHouseProject";
import ElleResidencesProject from "../../components/desarrollos/Edgewater/ElleResidencesProject";
import MissoniBaiaProject from "../../components/desarrollos/Edgewater/MissoniBaiaProject";
import {TheEditionResidencesProject} from "../../components/desarrollos/Edgewater/TheEditionResidencesProject";
import TheVillaProject from "../../components/desarrollos/Edgewater/TheVillaProject";
import VidaProject from "../../components/desarrollos/Edgewater/VidaProject";

export default function EdgewaterRoutes() {
    return (
        <>
            <Route element={<AriaReserveProject/>} path="/desarrollos/aria-reserve"/>
            <Route element={<ElleResidencesProject/>} path="/desarrollos/elle-residences"/>
            <Route element={<MissoniBaiaProject/>} path="/desarrollos/missoni-baia"/>
            <Route element={<TheVillaProject/>} path="/desarrollos/the-villa"/>
            <Route element={<TheEditionResidencesProject/>} path="/desarrollos/edition-residences"/>
            <Route element={<EdgeHouseProject/>} path="/desarrollos/edge-house-residences"/>
            <Route element={<VidaProject/>} path="/desarrollos/vida"/>
        </>
    );
}
