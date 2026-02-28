import {Route} from "react-router-dom";
import ShomaBayProject from "../../components/desarrollos/NorthBayVillage/ShomaBayProject";
import {TulaResidencesProject} from "../../components/desarrollos/NorthBayVillage/TulaResidencesProject";

export default function NorthBayVillageRoutes() {
    return (
        <>
            <Route element={<ShomaBayProject/>} path="/desarrollos/shoma-bay"/>
            <Route element={<TulaResidencesProject/>} path="/desarrollos/tula-residences"/>
        </>
    );
}
