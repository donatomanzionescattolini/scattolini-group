import "bootstrap/dist/css/bootstrap.min.css";

import * as React from "react";

import ProjectTemplate from "../ProjectTemplate.tsx";
import W11 from "../../../objects/desarrollos/Downtown/W11.tsx";

export function W11Project(): JSX.Element {
    return (<ProjectTemplate project={W11()}/>);
}
