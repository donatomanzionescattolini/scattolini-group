import {MDBRow} from "mdb-react-ui-kit";

import PropiedadesBayHarbor from "./BayHarbor/PropiedadesBayHarbor";
import PropiedadesBrickell from "./Brickell/PropiedadesBrickell";
import PropiedadesCoconutGrove from "./CoconutGrove/PropiedadesCoconutGrove";
import PropiedadesCoralGables from "./CoralGables/PropiedadesCoralGables";
import PropiedadesDoral from "./Doral/PropiedadesDoral";
import PropiedadesDowntown from "./Downtown/PropiedadesDowntown";
import PropiedadesEdgewater from "./Edgewater/PropiedadesEdgewater";
import PropiedadesHomestead from "./Homestead/PropiedadesHomestead";
import PropiedadesMiamiBeach from "./MiamiBeach/PropiedadesMiamiBeach";
import PropiedadesNorthBayVillage from "./NorthBayVillage/PropiedadesNorthBayVillage";
import PropiedadesPinecrest from "./Pinecrest/PropiedadesPinecrest";
import PropiedadesSunnyIsles from "./SunnyIsles/PropiedadesSunnyIsles";

export default function DesarrollosTodos() {
    return (
        <>
            <br></br>
            <h2 className="text-center mt-5 pt-xs-5 pt-sm-5 pt-md-2 pt-lg-0 ">
                Proyectos en Desarrollo
            </h2>
            {/* <hr className="mx-auto" /> */}
            <hr className="hr hr-blurry w-50 mx-auto"/>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <br></br>
            <MDBRow className="">
                <PropiedadesBayHarbor/>
                <PropiedadesDoral/>
                <PropiedadesBrickell/>
                <PropiedadesEdgewater/>
                <PropiedadesMiamiBeach/>
                <PropiedadesSunnyIsles/>
                <PropiedadesNorthBayVillage/>
                <PropiedadesPinecrest/>
                <PropiedadesDowntown/>
                <PropiedadesCoralGables/>
                <PropiedadesCoconutGrove/>
                <PropiedadesHomestead/>
            </MDBRow>
        </>
    );
}
