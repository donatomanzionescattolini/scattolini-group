import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";


const TulaResidences = new Desarrollo(MiamiBeach());
TulaResidences.nombre = "tula-residences";
TulaResidences.titulo="Tula Residences";
TulaResidences.banner = true;
TulaResidences.introduccion = [""];
TulaResidences.numberOfImages = 16;
TulaResidences.numberOfUnits = 0;
TulaResidences.numberOfFloors = 0;
TulaResidences.typeOfUnits = "";
TulaResidences.estimatedCompletionYear = 0;
TulaResidences.direccion = "";

TulaResidences.caracteristicas = {
    edificio: <></>,
    residencias: <></>,
    amenidades: <></>

};



export default TulaResidences;