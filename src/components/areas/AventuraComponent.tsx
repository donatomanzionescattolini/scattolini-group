import { Area } from "../../models/areas/Area";
import Aventura from "../../objects/areas/Aventura";
import ProjectTemplate from "../desarrollos/ProjectTemplate";
import AreaTemplate from "./AreaTemplate";



export default function AventuraComponent() {

    return <AreaTemplate area={Aventura()}/>


}