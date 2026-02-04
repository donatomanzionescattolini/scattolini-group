import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Hollywood from "../../areas/Hollywood.tsx";

const SevenParkResidences = new Desarrollo(Hollywood());
SevenParkResidences.nombre = "seven-park-residences";
SevenParkResidences.titulo = "Seven Park Residences";
SevenParkResidences.slogan="";
SevenParkResidences.introduccion = [""];
SevenParkResidences.banner= true;




SevenParkResidences.direccion = '';
SevenParkResidences.estimatedCompletionYear = 0;
SevenParkResidences.numberOfFloors = 0;
SevenParkResidences.numberOfUnits = 0;
SevenParkResidences.typeOfUnits = '';

SevenParkResidences.caracteristicas={
    residencias:<></>,
    edificio: <>
        <dl>
            <dt>Dirección</dt>
            <dd>{SevenParkResidences.direccion}</dd>
            <dt>Año De Construcción O Finalización</dt>
            <dd>{SevenParkResidences.estimatedCompletionYear}</dd>
            <dt>Número De Pisos</dt>
            <dd>{SevenParkResidences.numberOfFloors}</dd>
            <dt>Número de Unidades</dt>
            <dd>{SevenParkResidences.numberOfUnits}</dd>
            <dt>Tipo De Unidades</dt>
            <dd>{SevenParkResidences.typeOfUnits}</dd>

        </dl>
    </>,
    amenidades:<></>
};
SevenParkResidences.numberOfImages = 33;



export default SevenParkResidences;