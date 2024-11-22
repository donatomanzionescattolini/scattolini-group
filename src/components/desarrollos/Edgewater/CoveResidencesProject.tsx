import Project from "../../../models/desarrollos/Project.tsx";
import Edgewater from "../../../objects/areas/Edgewater.tsx";


export default CoveResidencesComponent () => {


    const CoveResidencesObject = new Project(Edgewater());

    return CoveResidencesObject;
}