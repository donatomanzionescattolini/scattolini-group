import {Route} from "react-router-dom";
import CoraMerrickParkProject from "../../components/desarrollos/CoralGables/CoraMerrickParkProject";
import TheAvenueProject from "../../components/desarrollos/CoralGables/TheAvenueProject";

export default function CoralGablesRoutes() {
    return (
        <>
            <Route element={<TheAvenueProject/>} path="/desarrollos/the-avenue"/>
            <Route element={<CoraMerrickParkProject/>} path="/desarrollos/cora-merrick-park"/>
        </>
    );
}
