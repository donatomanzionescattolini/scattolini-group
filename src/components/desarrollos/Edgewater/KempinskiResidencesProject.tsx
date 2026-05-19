import ProjectTemplate from "../ProjectTemplate.tsx";
import KempinskiResidences from "../../../objects/desarrollos/Edgewater/KempinskiResidences.tsx";

export default function KempinskiResidencesProject() {
    return (
        <ProjectTemplate desarrollo={KempinskiResidences()} />
    );
}

