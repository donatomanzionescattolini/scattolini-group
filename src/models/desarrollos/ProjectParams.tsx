import Project from "./Project.tsx";

export interface traits {
    building: React.JSX.Element | Element | "" |  Array<String>;
    residences: React.JSX.Element | Element | "" |  Array<String>;
    amenities: React.JSX.Element | Element | "" |  Array<String>;
}

export interface ProjectParams {
    project: Project;

}
