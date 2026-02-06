import ProjectTemplate from "../ProjectTemplate.tsx";
import VitaObject from "../../../objects/desarrollos/CoconutGrove/Vita.tsx"

export default function VitaProject() {
    return (
        <ProjectTemplate
            desarrollo={VitaObject()}/>);
}