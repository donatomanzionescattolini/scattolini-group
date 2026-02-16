import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import Hollywood from "../../areas/Hollywood.tsx";

export default function SevenParkResidencesObject(lang: "en" | "es" = "es") {
const SevenParkResidences = new Desarrollo(Hollywood());
SevenParkResidences.nombre = "seven-park-residences";
SevenParkResidences.titulo = {
    es: "Seven Park Residences",
    en: "Seven Park Residences"
};
SevenParkResidences.slogan = {
    es: "Estilo de vida costero de lujo, redefinido",
    en: "Luxury coastal lifestyle, redefined"
};
SevenParkResidences.introduccion = [lang === "en" ? "Seven Park Residences is a modern condominium development offering 121 luxury units, from studios to three-bedroom apartments. It features a flexible rental policy, allowing owners to optimize profitability through popular platforms for short-term, seasonal or extended stays, such as Airbnb. Each smart residence includes open-concept designs, expansive windows, elegant finishes and panoramic park and city views. Its prime location provides easy access to shopping, dining, the coast, health centers and much more." : "Seven Park Residences es un moderno desarrollo de condominios que ofrece 121 unidades de lujo, desde estudios hasta apartamentos de tres habitaciones. Ofrece una política de alquiler flexible, lo que permite a los propietarios optimizar la rentabilidad a través de plataformas populares para estancias cortas, de temporada o prolongadas, como Airbnb. Cada residencia inteligente incluye diseños de concepto abierto, amplios ventanales, acabados elegantes y vistas panorámicas del parque y la ciudad. Su ubicación privilegiada proporciona fácil acceso a tiendas, restaurantes, la costa, centros de salud y mucho más."];
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
            <li>{lang === "en" ? "Spacious open-concept designs with 10-foot ceilings and oversized balconies" : "Amplios diseños de concepto abierto con techos de 10 pies y balcones de gran tamaño."}</li>
            <li>{lang === "en" ? "Open and bright layouts with porcelain floors" : "Distribuciones abiertas y luminosas con suelos de porcelana."}</li>
            <li>{lang === "en" ? "Floor-to-ceiling glass windows" : "Ventanas de vidrio de piso a techo"}</li>
            <li>{lang === "en" ? "Spacious floor plans designed with ample storage space" : "Amplios planos de planta diseñados con amplio espacio de almacenamiento."}</li>
            <li>{lang === "en" ? "Walk-in closets in master bedrooms" : "Vestidores en los dormitorios principales"}</li>
            <li>{lang === "en" ? "Design packages curated by Addison House available" : "Paquetes de diseño seleccionados por Addison House disponibles"}</li>
            <li>{lang === "en" ? "In-unit washer and dryer (except studios)" : "Lavadora y secadora en la unidad (excepto estudios)"}</li>
            <li>{lang === "en" ? "Programmable thermostats" : "Termostatos programables"}</li>
            <li>{lang === "en" ? "Modern Italian MIA CUCINA cabinets" : "Gabinetes italianos modernos MIA CUCINA"}</li>
            <li>{lang === "en" ? "Luxury built-in Bosch appliances with European panel" : "Electrodomésticos empotrados de lujo de Bosch con panel europeo"}</li>
            <li>{lang === "en" ? "Italian quartz waterfall countertops" : "Encimeras italianas de cuarzo de una sola pieza en forma de cascada"}</li>
            <li>{lang === "en" ? "Branded brass faucets and fixtures" : "Grifos y accesorios de latón de marca"}</li>
            <li>{lang === "en" ? "Frameless glass showers" : "Duchas de cristal sin marco"}</li>
            <li>{lang === "en" ? "Italian porcelain flooring" : "suelos de porcelana italiana"}</li>
            <li>{lang === "en" ? "One-piece Italian porcelain countertops" : "Encimeras de una sola pieza de porcelana italiana"}</li>
            <li>{lang === "en" ? "Branded brass faucets, fixtures and fittings" : "Grifos, accesorios y grifería de latón de marca"}</li>
        </ul>
    </>,
    edificio: <>
        <dl>
            <dt>{lang === "en" ? "Address" : "Dirección"}</dt>
            <dd>{SevenParkResidences.direccion}</dd>
            <dt>{lang === "en" ? "Year of Construction or Completion" : "Año De Construcción O Finalización"}</dt>
            <dd>{SevenParkResidences.estimatedCompletionYear}</dd>
            <dt>{lang === "en" ? "Number of Floors" : "Número De Pisos"}</dt>
            <dd>{SevenParkResidences.numberOfFloors}</dd>
            <dt>{lang === "en" ? "Number of Units" : "Número de Unidades"}</dt>
            <dd>{SevenParkResidences.numberOfUnits}</dd>
            <dt>{lang === "en" ? "Type of Units" : "Tipo De Unidades"}</dt>
            <dd>{SevenParkResidences.typeOfUnits}</dd>
            <dt>{lang === "en" ? "Number of Bedrooms" : "Número de cuartos"}</dt>
            <dd>{SevenParkResidences.numberOfRooms as string}</dd>

        </dl>
    </>,
    amenidades:<>
        <ul>
            <li>{lang === "en" ? "Flexible rental" : "Alquiler flexible"}</li>
            <li>{lang === "en" ? "Bicycle and electric scooter station" : "Estación de bicicletas y patinetes eléctricos"}</li>
            <li>{lang === "en" ? "Smart, ready and connected building" : "Edificio inteligente, listo y conectado"}</li>
            <li>{lang === "en" ? "Keypad entry for all residents" : "Entrada con teclado para todos los residentes"}</li>
            <li>{lang === "en" ? "24 electric vehicle charging stations" : "24 estaciones de carga de vehículos eléctricos"}</li>
            <li>{lang === "en" ? "Ground floor retail space" : "Local comercial en planta baja"}</li>
            <li>{lang === "en" ? "LEED Gold certified green building" : "Edificio ecológico con certificación LEED Gold"}</li>
            <li>{lang === "en" ? "Limited private storage available for purchase" : "Almacenamiento privado limitado disponible para la venta"}</li>
            <li>{lang === "en" ? "Parking included for residents and visitors" : "Estacionamiento incluido para residentes y visitantes"}</li>
            <li>{lang === "en" ? "Pet-friendly building" : "Edificio que admite mascotas"}</li>
            <li>{lang === "en" ? "Lush landscaping flowing with a park-like setting" : "Paisaje exuberante que fluye con un entorno tipo parque."}</li>
            <li>{lang === "en" ? "30,000 square feet of premium amenities" : "30.000 pies cuadrados de comodidades premium"}</li>
            <li>{lang === "en" ? "3,000 sq ft state-of-the-art fitness center" : "Gimnasio de última generación de 3000 pies cuadrados"}</li>
            <li>{lang === "en" ? "Wellness center with steam showers, sauna and cold water baths" : "Centro de bienestar con duchas de vapor, sauna y baños de agua fría."}</li>
            <li>{lang === "en" ? "Lounge and party room" : "Salón y sala de fiestas"}</li>
            <li>{lang === "en" ? "Clean edge pool and 2 jacuzzis" : "Piscina de borde limpio y 2 jacuzzis"}</li>
            <li>{lang === "en" ? "Private cabanas and lounge chairs" : "Cabañas y tumbonas privadas"}</li>
            <li>{lang === "en" ? "Private and communal barbecue stations for residents" : "Estaciones de barbacoa privadas y comunitarias para residentes"}</li>
            <li>{lang === "en" ? "Outdoor lawn, ping pong tables and large sandbox" : "Césped al aire libre, mesas de ping pong y arenero grande."}</li>
            <li>{lang === "en" ? "Co-working space with private conference room" : "Espacio de coworking con sala de conferencias privada"}</li>
            <li>{lang === "en" ? "Content creation room" : "Sala de creación de contenidos"}</li>
            <li>{lang === "en" ? "Media room with large screen" : "Sala multimedia con pantalla grande"}</li>
            <li>{lang === "en" ? "Personal training, meditation and yoga on demand" : "Entrenamiento personal, meditación y yoga a pedido"}</li>
        </ul>
    </>
};
SevenParkResidences.numberOfImages = 33;

return SevenParkResidences;
}