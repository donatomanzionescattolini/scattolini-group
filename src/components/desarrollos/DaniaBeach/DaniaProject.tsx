import ProjectTemplate from "../ProjectTemplate";
import createDaniaProject from "../../../objects/desarrollos/DaniaBeach/DaniaProject";

export default function DaniaProject() {
    return (
        <ProjectTemplate desarrollo={createDaniaProject}/>
    )
}

