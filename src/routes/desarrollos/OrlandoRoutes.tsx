import {Route} from "react-router-dom";
import {WindsorCayResortProject} from "../../components/desarrollos/Orlando/WindsorCayResortProject.tsx";
import DoppioProject from "../../components/desarrollos/Orlando/DoppioProject.tsx";

export default function OrlandoRoutes() {
    return (<>
    <Route element={<WindsorCayResortProject></WindsorCayResortProject>} path="/desarrollos/windsor-cay-resort"/>
        <Route element={<DoppioProject></DoppioProject>} path={"/desarrollos/doppio"}/>
    </>);
}