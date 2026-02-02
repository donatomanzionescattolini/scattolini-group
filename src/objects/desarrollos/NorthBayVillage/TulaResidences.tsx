import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";


const TulaResidences = new Desarrollo(MiamiBeach());
TulaResidences.nombre = "tula-residences";
TulaResidences.titulo="Tula Residences";
TulaResidences.banner = true;
TulaResidences.introduccion = ["Tula Residences Miami es un condominio frente al mar de lujo de 21 pisos, con 54 residencias en total, incluyendo seis áticos únicos. Su arquitectura contemporánea combina la simetría con la individualidad. Mejorando el paisaje panorámico de la Bahía de Biscayne, la exuberante vegetación circundante crea un ambiente sereno. Las instalaciones de Tula enfatizan la conexión, la exclusividad, la elegancia y el diseño espacioso. A solo un breve paseo de distancia se encuentra Treasure Island Park, un lugar ideal para hacer picnics y ver una variedad de barcos deslizarse por la bahía."];
TulaResidences.numberOfImages = 16;
TulaResidences.numberOfUnits = 54;
TulaResidences.numberOfFloors = 21;
TulaResidences.typeOfUnits = "Condominios de lujo de 2, 3 y 5 dormitorios";
TulaResidences.estimatedCompletionYear = 2026;
TulaResidences.direccion = "7918 West Dr, Miami, FL 33141";

TulaResidences.caracteristicas = {
    edificio: <>
        <dl>
            <dt>Dirección</dt>
            <dd>{TulaResidences.direccion}</dd>
            <dt>Año De Construcción O Finalización</dt>
            <dd>{TulaResidences.estimatedCompletionYear}</dd>
            <dt>Número De Pisos</dt>
            <dd>{TulaResidences.numberOfFloors}</dd>
            <dt>Número de Unidades</dt>
            <dd>{TulaResidences.numberOfUnits}</dd>
            <dt>Tipo De Unidades</dt>
            <dd>{TulaResidences.typeOfUnits}</dd>

        </dl>
    </>,
    amenidades: <>
        <ul>
            <li>n</li>
            <li></li>
            <li>Gran entrada en un vestíbulo de diseño llamativo con conserje las 24 horas</li>
            <li></li>
            <li>Piscina de estilo resort con terraza ajardinada y cabañas que ofrecen vistas al amanecer, al atardecer y nocturnas del horizonte de Miami y la Bahía de Biscayne</li>
            <li></li>
            <li>Suite de servicios de sexto piso con vistas panorámicas y oportunidades interiores / exteriores para el bienestar y la socialización</li>
            <li></li>
            <li>Gran habitación con chimenea de mármol, ventanas de piso a techo y vistas a la bahía</li>
            <li></li>
            <li>Habitación Skyline Club, disponible para reservas privadas</li>
            <li></li>
            <li>Comedor privado para doce con cocina de calentamiento de chef para eventos atendidos</li>
            <li></li>
            <li>Gimnasio con 2.100 pies cuadrados de equipo totalmente equipado y de última generación</li>
            <li></li>
            <li>Edificio que admite mascotas con spa dedicado a mascotas</li>
            <li></li>
            <li>Garaje de estacionamiento sobre el suelo</li>
            <li></li>
            <li>Sala de paquetes segura</li>
            <li></li>
            <li>Almacenamiento privado, disponible a un costo adicional</li>
        </ul>

    </>,
    residencias: <></>

};



export default TulaResidences;