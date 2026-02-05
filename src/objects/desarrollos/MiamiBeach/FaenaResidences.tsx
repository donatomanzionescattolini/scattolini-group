import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

const FaenaResidences = new Desarrollo(MiamiBeach());
FaenaResidences.nombre = "faena-residences";
FaenaResidences.titulo = "Faena Residences Miami Beach";
FaenaResidences.slogan = "";
FaenaResidences.introduccion = ["Faena House Miami Beach cuenta con 47 unidades de lujo supremo en un extraordinario condominio de 18 pisos. La visión de Alan Faena y el diseño arquitectónico de Foster+Partners concibieron un nuevo y transformador vecindario en perfecta armonía con su entorno frente al mar; los innovadores avances arquitectónicos permiten vistas panorámicas desde el océano hasta la bahía. Ubicado en la franja de arena blanca más extensa de todo Miami Beach, Faena se encuentra a solo diez minutos en coche de Bal Harbour Shops, el Distrito de Diseño de Miami y South Beach.\n" +
"\n"];
FaenaResidences.banner = true;
FaenaResidences.numberOfImages = 22;


FaenaResidences.direccion = "3315 Collins Avenue, Miami Beach, FL 33140";
FaenaResidences.numberOfUnits = 47;
FaenaResidences.numberOfFloors = 16;
FaenaResidences.typeOfUnits = "Condominios";
FaenaResidences.estimatedCompletionYear = 2016;
FaenaResidences.numberOfRooms = "1, 2, 3, 4 y 5 dormitorios";
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
    amenidades:<><ul>
        <li>Espectacular vestíbulo de triple altura, con tranquilas piscinas que atraviesan el área.</li>
        <li>Ascensores de alta velocidad</li>
        <li>Entrada de porte-coch</li>
        <li>Servicios de portero, valet parking, seguridad y conserjería las 24 horas.</li>
        <li>Spa con sauna y baño de vapor separados para hombres y mujeres.</li>
        <li>Gimnasio con vistas directas al mar.</li>
        <li>Club de Playa con servicio de cabañas Piscina ajardinada, piscina infantil y sala de juegos</li>


    </ul></>,
    residencias:<><ul>
        <li>Alturas de techo de 10'-6", 11' en los pisos 14 y 15, 13' en el penthouse</li>
        <li>Baños principales con tocadores con lavabos dobles y bañeras separadas.</li>
        <li>Gabinetes con laca blanca brillante en cocina</li>
        <li>Gabinetes de cocina lacados en blanco brillante</li>
        <li>Electrodomésticos de cocina Miele</li>
        <li>Paredes de mármol blanco en el baño.</li>
        <li>Duchas de lluvia de cristal con acabados en cromo pulido</li>

    </ul></>
};

export default FaenaResidences;