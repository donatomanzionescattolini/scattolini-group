import {Route} from "react-router-dom";
import EnvyResidenceProject from "../../components/desarrollos/PompanoBeach/EnvyResidenceProject";
import WPompanoBeachComponent from "../../components/desarrollos/PompanoBeach/WPompanoBeachComponent";

export default function PompanoBeachRoutes() {
    return (
        <>
            <Route element={<WPompanoBeachComponent/>} path="/desarrollos/w-pompano-beach"/>
            <Route path="/desarrollos/envy-residence" element={<EnvyResidenceProject/>}/>
        </>
    );
}
