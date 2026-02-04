import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Hollywood from "../../areas/Hollywood.tsx";

const SevenParkResidences = new Desarrollo(Hollywood());
SevenParkResidences.nombre = "seven-park-residences";
SevenParkResidences.titulo = "Seven Park Residences";
SevenParkResidences.slogan="Estilo de vida costero de lujo, redefinido";
SevenParkResidences.introduccion = ["Seven Park Residences es un moderno desarrollo de condominios que ofrece 121 unidades de lujo, desde estudios hasta apartamentos de tres habitaciones. Ofrece una política de alquiler flexible, lo que permite a los propietarios optimizar la rentabilidad a través de plataformas populares para estancias cortas, de temporada o prolongadas, como Airbnb. Cada residencia inteligente incluye diseños de concepto abierto, amplios ventanales, acabados elegantes y vistas panorámicas del parque y la ciudad. Su ubicación privilegiada proporciona fácil acceso a tiendas, restaurantes, la costa, centros de salud y mucho más."];
SevenParkResidences.banner= true;




SevenParkResidences.direccion = '218 SE 7th St, Hallandale Beach, FL 33009, EE. UU.';
SevenParkResidences.estimatedCompletionYear = 2028;
SevenParkResidences.numberOfFloors = 8;
SevenParkResidences.numberOfUnits = 121;
SevenParkResidences.typeOfUnits = 'Condominios de lujo';
SevenParkResidences.numberOfRooms = 'Estudios, 1, 2 y 3 dormitorios';

SevenParkResidences.caracteristicas={
    residencias:<>
        <ul>
            <li>Amplios diseños de concepto abierto con techos de 10 pies y balcones de gran tamaño.</li>
            <li>Distribuciones abiertas y luminosas con suelos de porcelana.</li>
            <li>Ventanas de vidrio de piso a techo</li>
            <li>Amplios planos de planta diseñados con amplio espacio de almacenamiento.</li>
            <li>Vestidores en los dormitorios principales</li>
            <li>Paquetes de diseño seleccionados por Addison House disponibles</li>
            <li>Lavadora y secadora en la unidad (excepto estudios)</li>
            <li>Termostatos programables</li>
            <li>Gabinetes italianos modernos MIA CUCINA</li>
            <li>Electrodomésticos empotrados de lujo de Bosch con panel europeo</li>
            <li>Encimeras italianas de cuarzo de una sola pieza en forma de cascada</li>
            <li>Grifos y accesorios de latón de marca</li>
            <li>Duchas de cristal sin marco</li>
            <li>suelos de porcelana italiana</li>
            <li>Encimeras de una sola pieza de porcelana italiana</li>
            <li>Grifos, accesorios y grifería de latón de marca</li>
        </ul>
    </>,
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
            <dt>Número de cuartos</dt>
            <dd>{SevenParkResidences.numberOfRooms as string}</dd>

        </dl>
    </>,
    amenidades:<>
        <ul>
            <li>Alquiler flexible</li>
            <li>Estación de bicicletas y patinetes eléctricos</li>
            <li>Edificio inteligente, listo y conectado</li>
            <li>Entrada con teclado para todos los residentes</li>
            <li>24 estaciones de carga de vehículos eléctricos</li>
            <li>Local comercial en planta baja</li>
            <li>Edificio ecológico con certificación LEED Gold</li>
            <li>Almacenamiento privado limitado disponible para la venta</li>
            <li>Estacionamiento incluido para residentes y visitantes</li>
            <li>Edificio que admite mascotas</li>
            <li>Paisaje exuberante que fluye con un entorno tipo parque.</li>
            <li>30.000 pies cuadrados de comodidades premium</li>
            <li>Gimnasio de última generación de 3000 pies cuadrados</li>
            <li>Centro de bienestar con duchas de vapor, sauna y baños de agua fría.</li>
            <li>Salón y sala de fiestas</li>
            <li>Piscina de borde limpio y 2 jacuzzis</li>
            <li>Cabañas y tumbonas privadas</li>
            <li>Estaciones de barbacoa privadas y comunitarias para residentes</li>
            <li>Césped al aire libre, mesas de ping pong y arenero grande.</li>
            <li>Espacio de coworking con sala de conferencias privada</li>
            <li>Sala de creación de contenidos</li>
            <li>Sala multimedia con pantalla grande</li>
            <li>Entrenamiento personal, meditación y yoga a pedido</li>
        </ul>
    </>
};
SevenParkResidences.numberOfImages = 33;



export default SevenParkResidences;