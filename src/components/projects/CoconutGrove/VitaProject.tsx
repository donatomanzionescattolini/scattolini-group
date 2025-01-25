import ProjectTemplate from "../ProjectTemplate.tsx";
import VitaObject from "../../../objects/desarrollos/CoconutGrove/VitaObject.tsx"

export default function VitaProject() {
    return (
        <ProjectTemplate
            project={VitaObject()}/>);
}