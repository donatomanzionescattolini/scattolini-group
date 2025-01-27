import React from 'react'
import Project from '../../../models/desarrollos/NewDevelopment.tsx';
import Edgewater from '../../areas/Edgewater';

export default function ElleResidences() {
    const ElleResidencesObject = new Project();

    ElleResidencesObject.nameForProjectFolders = "elle-residences";

    ElleResidencesObject.officialName = 'Elle Residences';
    ElleResidencesObject.area = Edgewater();
    ElleResidencesObject.address = "3618 NE 5th Ave, Miami, FL 33137, Estados Unidos";

    ElleResidencesObject.amenities = [];
    ElleResidencesObject.introduction = ["Viva en la pasarela de los distritos de diseño, moda y cultura de Miami en ELLE Residences, inspirada por 80 años de moda y decoración que marcan tendencia: totalmente terminado, perfectamente amueblado y listo para vivir.", "Elle Residences Miami es una colección de 180 residencias elegantes sin restricciones de alquiler. Su diseño interior presenta un guiño a las raíces parisinas de la revista. Un diseño exclusivo de Behar Font & Partners e interiores refinados de The One Atelier se unen para ofrecer una exquisita colección de viviendas en el área de Edgewater. Las comodidades están ubicadas en dos niveles exclusivos e incluyen: un gimnasio de última generación, césped para ejercicios al aire libre, jardín de meditación, spa, piscina en la azotea, salón exclusivo para residentes y más. Edgewater es un vecindario popular para quienes se dedican a las artes o buscan restaurantes de vanguardia en Miami."];
    ElleResidencesObject.banner = true;
    ElleResidencesObject.numberOfImages = 24;
    ElleResidencesObject.subtitle = "El Nuevo Hogar Del Alto Estilo";
    ElleResidencesObject.traits = {
        residences: <><p>Adquiera su propio piso en el corazón de Miami.
            Inspiradas por las páginas de ELLE Decor, las residencias combinan el estilo moderno de mediados de siglo y
            el estilo francés contemporáneo con un toque de lujo tropical, para darle un nuevo giro a la vida en el sur
            de Florida.</p>
            <ul>
                <li>Planos de planta bien pensados ​​con techos altos y vistas al agua y al horizonte.</li>
                <li>Suites Grande en el piso superior con techos de 11 pies</li>
                <li>Ventanas y puertas resistentes a impactos de piso a techo</li>
                <li>Cocinas elegantes con el conjunto de electrodomésticos Miele</li>
                <li>Muebles y carpintería italianos importados de Italkraft</li>
                <li>Exquisitas encimeras de cuarzo</li>
                <li>Suelo de madera con diseño de chevrones de inspiración francesa</li>
                <li>Accesorios y acabados modernos de latón.</li>
                <li>Sistemas de control climático inteligentes</li>
                <li>Lavadora/secadora de alta eficiencia</li>
                <li>Armarios empotrados</li>
                <li>Opción de utilizar plataformas de alquiler flexibles o utilizar un programa de alquiler
                    completamente administrado
                </li>
            </ul>
        </>,
        building:
            <ul>
                <li>25 Pisos</li>
                <li>180 Residencias de 1 a 2 dormitorios</li>
                <li>Ubicación: 3618 NE 5th Ave, Miami, FL 33137, Estados Unidos</li>
            </ul>
        ,
        amenities:
            <><p>Descubra una colección de comodidades de estilo de vida diseñadas para una vida elegante y sin
                esfuerzo. No es solo un apartamento tipo piso. ELLE es su salón, cafetería, club de piscina, área de
                juegos y mucho más.</p>
                <ul>
                    <dt>El vestíbulo</dt>
                    <li>Gran vestíbulo de doble altura</li>
                    <li>Servicios de check-in de huéspedes</li>
                    <li>Servicio de aparcacoches</li>
                    <li>Conserjería 24 horas</li>
                    <li>Seguridad y control las 24 horas</li>
                    <li>Limpieza y mantenimiento las 24 horas</li>
                    <li>Oficina de administración</li>
                    <li>Sala de correo y paquetes</li>
                    <li>Tiendas minoristas boutique</li>
                    <li>Casa de bicicletas y almacenamiento de bicicletas</li>
                    <li>WiFi de alta velocidad</li>
                    <dt>La Terraza</dt>
                    <li>Terraza estilo resort inspirada en la Riviera Francesa</li>
                    <li>Piscina del complejo con exposición de norte a sur.</li>
                    <li>Cabañas privadas y tumbonas</li>
                    <li>Cocina de verano gourmet con barra y zona de estar al aire libre</li>
                    <li>Cine al aire libre</li>
                    <li>Canchas de tejo y bochas</li>
                    <li>Gimnasio de última generación con programación de fitness de marca.</li>
                    <li>Gimnasio al aire libre y área de yoga con jardín de meditación, spa y piscina de agua fría</li>
                    <li>Spa con sauna, baño de vapor, ducha de sensaciones y pared de sal.</li>
                    <li>Sala privada para tratamientos de salón y bienestar.</li>
                    <dt>La Azotea de Sommet</dt>
                    <li>Piscina del complejo con vistas despejadas al norte, este y oeste.</li>
                    <li>Terraza solárium con cabañas privadas</li>
                    <li>Club de residentes con biblioteca, sala de escucha, salón con bar y espacio de
                        entretenimiento.
                    </li>
                    <li>Sala de cine</li>
                </ul>
            </>
    }

    return ElleResidencesObject;
}
