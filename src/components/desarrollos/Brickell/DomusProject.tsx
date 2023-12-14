import ProjectTemplate from "../ProjectTemplate.tsx";
import Domus from "../../../objects/desarrollos/Brickell/Domus.tsx";

export default function DomusProject() {
  return (
    <div id="domus">
      {" "}
      <ProjectTemplate desarrollo={Domus()} />
    </div>
  );
}
