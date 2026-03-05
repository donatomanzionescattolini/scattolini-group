import {Route} from "react-router-dom";
import CoraMerrickParkProject from "../../components/desarrollos/CoralGables/CoraMerrickParkProject";
import TheAvenueProject from "../../components/desarrollos/CoralGables/TheAvenueProject";
import {CassiaProject} from "../../components/desarrollos/CoralGables/CassiaProject.tsx";

export default function CoralGablesRoutes() {
    return (
        <>
            <Route element={<TheAvenueProject/>} path="/desarrollos/the-avenue"/>
            <Route element={<CoraMerrickParkProject/>} path="/desarrollos/cora-merrick-park"/>
            <Route element={<CassiaProject></CassiaProject>} path="/desarrollos/cassia"/>
        </>
    );
}
