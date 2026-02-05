import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

const FaenaResidences = new Desarrollo(MiamiBeach());
FaenaResidences.nombre = "faena-residences";
FaenaResidences.titulo = "Faena Residences Miami Beach";
FaenaResidences.slogan = "";
FaenaResidences.introduccion = [""];
FaenaResidences.banner = true;
FaenaResidences.numberOfImages = 22;


FaenaResidences.direccion = "";
FaenaResidences.numberOfUnits = 0;
FaenaResidences.numberOfFloors = 0;
FaenaResidences.typeOfUnits = "";
FaenaResidences.estimatedCompletionYear = 0;
FaenaResidences.numberOfRooms = "";
FaenaResidences.caracteristicas = {
    edificio: <>
        <dl>
            <dt>Dirección</dt>
            <dd>{FaenaResidences.direccion}</dd>
            <dt>Año De Construcción O Finalización</dt>
            <dd>{FaenaResidences.estimatedCompletionYear}</dd>
            <dt>Número De Pisos</dt>
            <dd>{FaenaResidences.numberOfFloors}</dd>
            <dt>Número de Unidades</dt>
            <dd>{FaenaResidences.numberOfUnits}</dd>
            <dt>Tipo De Unidades</dt>
            <dd>{FaenaResidences.typeOfUnits}</dd>
            <dt>Número de cuartos</dt>
            <dd>{FaenaResidences.numberOfRooms as string}</dd>

        </dl>
    </>,
    amenidades:<></>,
    residencias:<>s</>
};

export default FaenaResidences;