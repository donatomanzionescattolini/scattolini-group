import "bootstrap/dist/css/bootstrap.min.css";

import * as React from "react";

import ProjectTemplate from "../../../models/desarrollos/ProjectTemplate.tsx";
import W11 from "../../../models/desarrollos/Downtown/W11.tsx";

export function W11Project(): JSX.Element {
    return (<ProjectTemplate desarrollo={W11}/>);
}
