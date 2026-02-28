import {Route} from "react-router-dom";
import NomadResidencesComponent from "../../components/desarrollos/Wynwood/NomadResidencesComponent";

export default function WynwoodRoutes() {
    return (
        <>
            <Route element={<NomadResidencesComponent/>} path="/desarrollos/nomad-residences"/>
        </>
    );
}
