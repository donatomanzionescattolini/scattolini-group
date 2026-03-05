import {Route} from "react-router-dom";
import {WindsorCayResortProject} from "../../components/desarrollos/Orlando/WindsorCayResortProject.tsx";

export default function OrlandoRoutes() {
    return (<>
    <Route element={<WindsorCayResortProject></WindsorCayResortProject>} path="/desarrollos/windsor-cay-resort"/>
    </>);
}