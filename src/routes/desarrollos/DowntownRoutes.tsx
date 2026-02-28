import {Route} from "react-router-dom";
import AstonMartinProject from "../../components/desarrollos/Downtown/AstonMartinProject";
import CasaBellaProject from "../../components/desarrollos/Downtown/CasaBellaProject";
import JemProject from "../../components/desarrollos/Downtown/JemProject";
import TheElserProject from "../../components/desarrollos/Downtown/TheElserProject";
import WaldorfAstoriaProject from "../../components/desarrollos/Downtown/WaldorfAstoriaProject";
import {W11Project} from "../../components/desarrollos/Downtown/W11Project";

export default function DowntownRoutes() {
    return (
        <>
            <Route element={<AstonMartinProject/>} path="/desarrollos/aston-martin"/>
            <Route element={<TheElserProject/>} path="/desarrollos/the-elser"/>
            <Route element={<W11Project/>} path="/desarrollos/w11"/>
            <Route element={<CasaBellaProject/>} path="/desarrollos/casa-bella"/>
            <Route element={<WaldorfAstoriaProject/>} path="/desarrollos/waldorf-astoria"/>
            <Route path="/desarrollos/jem" element={<JemProject/>}/>
        </>
    );
}
