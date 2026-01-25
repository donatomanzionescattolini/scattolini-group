import Desarrollo from "../../../models/desarrollos/Desarrollo";
import PompanoBeach from "../../areas/PompanoBeach";

const EnvyResidence = new Desarrollo(PompanoBeach);

EnvyResidence.nombre = "envy-residence";
EnvyResidence.titulo = "ENVY Pompano Beach";
EnvyResidence.banner = true;
EnvyResidence.numberOfImages = 72;
EnvyResidence.introduccion = [
  "Envy Residences combina la vibra moderno y ubicación estratégica. Construido en 2021, ofrece 214 unidades desde estudios hasta apartamentos de 3 habitaciones. Disfruta de amenidades de primera clase, como piscina estilo resort, gimnasio con pared de escalar, mini golf y áreas sociales. A solo 1.8 millas de la playa y con restricciones de alquiler flexibles, Envy es perfecto para vivir o invertir.",
];
EnvyResidence.slogan = "Vive más allá de lo ordinario.";
EnvyResidence.direccion = "475 SE 1st St, Pompano Beach, FL 33060";
EnvyResidence.ubicación = "475 SE 1st St, Pompano Beach, FL 33060";
EnvyResidence.caracteristicas = {
  edificio: (
    <>
      <dl>
        <dt>Ubicación</dt>
        <dd>475 SE 1st St, Pompano Beach, FL 33060</dd>

        <dt>Número de Unidades</dt>
        <dd>213 Residencias</dd>
        <dt>Pisos</dt>
        <dd>Dos torres de 11 pisos cada una</dd>
        <dt>Tipo de Residencia</dt>
        <dd>
          Amplios planos de planta que incluyen estudios y residencias de 1, 2 y
          3 habitaciones
        </dd>
        <dt>Año de Apertura</dt>
        <dd>2025</dd>
      </dl>
    </>
  ),
  residencias: (
    <>
      <ul>
        <li>Diseños de concepto abierto con ventanas de piso a techo.</li>
        <li>Cocinas de diseño con electrodomésticos premium.</li>
        <li>Baños inspirados en el spa con elegantes acabados.</li>
        <li>
          Balcones privados con impresionantes vistas de la playa de Pompano.
        </li>
      </ul>
    </>
  ),
  amenidades: (
    <>
      <ul>
        <li>
          Centro de bienestar: un gimnasio de última generación y espacio de
          yoga.
        </li>
        <li>
          Piscina estilo resort: una cubierta de piscina hermosamente ajardinada
          para la máxima relajación.
        </li>
        <li>
          Sofisticado salón y sala de entretenimiento: un área común elegante
          para socializar.
        </li>
        <li>
          Ventajas para mascotas: un área de mascotas designada para sus amigos
          peludos.
        </li>
        <li>
          Parque infantil: un espacio divertido y seguro para que los niños
          jueguen.
        </li>
      </ul>
    </>
  ),
};
EnvyResidence.estimatedCompletionYear = 2025;
EnvyResidence.numberOfUnits = 213;
EnvyResidence.numberOfFloors = 11;
EnvyResidence.typeOfUnits = [
  "Estudios",
  "1 Habitación",
  "2 Habitaciones",
  "3 Habitaciones",
].join(", ");
EnvyResidence.numberOfRooms = {start:1,end: 3}  ;
export default EnvyResidence;
