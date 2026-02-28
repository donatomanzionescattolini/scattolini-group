import {Route} from "react-router-dom";
import OriginProject from "../../components/desarrollos/BayHarbor/OriginProject";
import SalernoEstatesComponent from "../../components/desarrollos/Homestead/SalernoEstatesComponent";

export default function HomesteadRoutes() {
    return (
        <>
            <Route element={<SalernoEstatesComponent/>} path="/desarrollos/salerno-estates"/>
            <Route element={<OriginProject/>} path="/desarrollos/origin"/>
        </>
    );
}
