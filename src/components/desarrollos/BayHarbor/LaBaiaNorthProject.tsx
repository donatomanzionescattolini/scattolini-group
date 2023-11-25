import ProjectTemplate from "../ProjectTemplate.tsx";
import PropiedadesBayHarbor from "./PropiedadesBayHarbor.tsx";


export default function LaBaiaNorthProject(){



    return (<ProjectTemplate banner properties={<PropiedadesBayHarbor/>} nombre={'la-baia'} caracteristicas={{edificio:<dl><dt>Ubicación</dt><dd>9481 East Bay Harbor Dr, Islas de Bay Harbor, FL 33154, Estados Unidos
        </dd><dt>Número de Pisos</dt><dd>8</dd><dt>Número de Residencias</dt><dd>57</dd></dl>, residencias:<></>, amenidades:<></>}} introduccion={[]} titulo={"La Baia Norte"} subtitulo={""} numberOfImages={66}/>)

}