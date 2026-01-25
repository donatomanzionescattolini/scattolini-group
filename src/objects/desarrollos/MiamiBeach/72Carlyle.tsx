import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";
import MiamiBeach from "../../areas/MiamiBeach.tsx";

const SeventyTwoCarlyle = new Desarrollo(MiamiBeach());

SeventyTwoCarlyle.nombre = "seventy-two-carlyle";
SeventyTwoCarlyle.titulo = "72 Carlyle - Miami Beach Residences";

SeventyTwoCarlyle.slogan = "La Riviera Italiana en Miami Beach";

SeventyTwoCarlyle.introduccion = ["72 Carlyle Miami Beach cuenta con 134 residencias de lujo en una torre de 239,424 pies cuadrados. El reconocido arquitecto Piero Lissoni desarrolló una estética audaz y moderna. Las comodidades incluyen piscina, gimnasio, exuberantes jardines y salón social. Su eficiente diseño moderno se puede apreciar en todas las comodidades y residencias. 72 Carlyle Miami Beach establece un nuevo estándar para los desarrollos residenciales de Miami. Su privilegiada ubicación en North Miami Beach, cerca de cafeterías, clubes de campo, Lincoln Road y Bal Harbour Shops, ofrece algo diferente que hacer cada día."];

SeventyTwoCarlyle.banner = true;
SeventyTwoCarlyle.numberOfImages = 20;

SeventyTwoCarlyle.direccion = "72 Carlyle Ave, Miami Beach, FL 33139";
SeventyTwoCarlyle.numberOfFloors = 21;
SeventyTwoCarlyle.numberOfUnits = 134;
SeventyTwoCarlyle.typeOfUnits = "Condominios de lujo";
SeventyTwoCarlyle.estimatedCompletionYear = 2027;

SeventyTwoCarlyle.caracteristicas = {
    edificio: <>
        <dl>
            <dt>Dirección</dt>
            <dd>{SeventyTwoCarlyle.direccion}</dd>
            <dt>Año De Construcción O Finalización</dt>
            <dd>{SeventyTwoCarlyle.estimatedCompletionYear}</dd>
            <dt>Número De Pisos</dt>
            <dd>{SeventyTwoCarlyle.numberOfFloors}</dd>
            <dt>Número de Unidades</dt>
            <dd>{SeventyTwoCarlyle.numberOfUnits}</dd>
            <dt>Tipo De Unidades</dt>
            <dd>{SeventyTwoCarlyle.typeOfUnits}</dd>
        </dl>
    </>, amenidades: <>
        <ul>
            <li>134 residencias en condominio y penthouses de una a cuatro habitaciones.</li>
            <li>Espectaculares vistas panorámicas y directas del océano, el canal Intracostero y el parque</li>
            <li>Vestíbulo de doble altura enmarcado por ventanas desde el piso al techo</li>
            <li>Recepción atendida las 24 horas</li>
            <li>Puerta cochera privada con valet parking y acceso a carga de EVs</li>
            <li>Edificio inteligente integrado con acceso a internet por fibra óptica inalámbrica de alta velocidad en
                todas las áreas comunes
            </li>
            <li>Monitoreo las 24 horas en todos los puntos de acceso al edificio</li>
            <li>Más de 45,000 pies cuadrados de exclusivas comodidades residenciales interiores y exteriores, diseñadas
                y seleccionadas por Piero Lissoni Piscina de resort con lujosos jardines y cabañas con vistas al canal
                Intracostero
            </li>
            <li>Lujosas pistas de pádel de exhibición en exteriores</li>
            <li>Terraza Lido y pérgola gastronómica para socializar al aire libre</li>
            <li>Tres suites sociales interconectadas que pueden combinarse para eventos más grandes, incluyendo el salón
                de aperitivos con múltiples áreas para sentarse y una bodega de vinos con mesa del chef
            </li>
            <li>Salón social, disponible para celebraciones y eventos privados</li>
            <li>Estudio técnico de gimnasia, un centro de ejercitación totalmente equipado de última generación</li>
            <li>Estudio de yoga, ideal para sesiones de entrenamiento privadas</li>
            <li>Spa para residentes con espacio reservado para tratamientos, sala de vapor y sauna</li>
            <li>Piscinas de inmersión exteriores calientes y frías</li>
            <li>Biblioteca Lissoni con estanterías de piso al techo</li>
            <li>Espacio de co-working con salas de reuniones privadas</li>
            <li>Salón de juegos envolvente para niños</li>
            <li>Lujosa terraza panorámica con jardines en el último piso del edificio, áreas de comedor, bar y vistas
                del océano, parques, el canal Intracostero y el horizonte de Miami
            </li>
        </ul>
    </>, residencias:
        <ul>
            <dt>Condominio de residencias meticulosamente detalladas, diseñadas por Piero Lissoni</dt>
            <li>Cada residencia ofrece una amplia terraza privada, las viviendas selectas cuentan con un bar en
                exteriores
            </li>
            <li>Espectaculares vistas panorámicas y directas del océano, el canal Intracostero y el parque</li>
            <li>Techos elevados de hasta 10 pies de altura</li>
            <li>Puertas corredizas de vidrio resistente a los impactos de piso a techo en todas las aberturas</li>
            <li>Ascensores de alta velocidad con control de acceso</li>
            <li>Eleven excepcionales residencias en penthouses ubicadas en los dos pisos superiores</li>
            <li>Rellanos de ascensor privados con acceso directo (en residencias selectas)</li>
            <li>Los diseños dramáticos ofrecen techos de 14 pies de altura y paredes de vidrio envolventes que dan a
                terrazas privadas
            </li>
            <li>Selectos penthouses con terrazas para eventos sociales diseñadas por Lissoni con piscina privada,
                amplios espacios para sentarse, cocina exterior, refrigerador de vinos y lavabo
            </li>
            <li>Cuidadosamente curados con ebanistería italiana a medida y herrajes contemporáneos</li>
            <li>Suite con electrodomésticos integrados Gaggenau de primera calidad</li>
            <li>Cava de vinos bajo mesada con control de temperatura y paneles de vidrio</li>
            <li>Mesadas y salpicaderos elegantes de mármol importado</li>
            <li>Fregadero y grifería gourmet</li>
            <li>La mayoría de las unidades ofrecen baños con cinco accesorios, tocador doble, una tina independiente y
                una ducha con efecto lluvia separada y mampara de vidrio.
            </li>
            <li>Tocador con lavabo doble tallado importado de fabricación europea con accesorios exclusivos</li>
            <li>Mesadas y salpicaderos elegantes de mármol importado</li>
        </ul>
};



export default SeventyTwoCarlyle;