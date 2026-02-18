import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Brickell from "../../areas/Brickell.tsx";

const StRegisBrickell = new Desarrollo(Brickell());
StRegisBrickell.nombre = "st-regis-brickell";
StRegisBrickell.titulo = "St Regis Brickell";
StRegisBrickell.banner = true;
StRegisBrickell.numberOfImages = 61;

StRegisBrickell.slogan = { es: "", en: "" };
StRegisBrickell.area = Brickell();

StRegisBrickell.direccion = "";
StRegisBrickell.numberOfUnits = 0;
StRegisBrickell.typeOfUnits = "";
StRegisBrickell.numberOfFloors = 0;

StRegisBrickell.caracteristicas = {
    edificio: <>
        <dl>
            <dt>Dirección</dt>
            <dd>{StRegisBrickell.direccion}</dd>

            <dt>Numero de Pisos</dt>
            <dd>{StRegisBrickell.numberOfFloors}</dd>
            <dt>Numero de Unidades</dt>
            <dd>{StRegisBrickell.numberOfUnits}</dd>
            <dt>Tipo de Unidades</dt>
            <dd>{StRegisBrickell.typeOfUnits}</dd>

        </dl>
    </>,
    residencias: <></>,
    amenidades: <></>,
};

StRegisBrickell.introduccion = [];

export default StRegisBrickell;