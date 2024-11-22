import React from 'react'
import Project from '../../../models/desarrollos/Project.tsx'
import Brickell from '../../areas/Brickell'

export default function MercedesBenzPlacesMiami() {
    const MercedesBenzPlacesObject = new Project(Brickell());
    MercedesBenzPlacesObject.area = Brickell();
    MercedesBenzPlacesObject.title = "Mercedes-Benz Places Miami";
    MercedesBenzPlacesObject.subtitle = "Miami, Living, Elevated";
    MercedesBenzPlacesObject.traits = {
        building: <>
            <ul>
                <li>Pisos: 64</li>
                <li>Residencias: 791</li>
                <li>Ubicación: 1133 SW 2nd Ave, Miami, FL 3313</li>
            </ul>
        </>,
        residencias: <>
            <ul>
                <dt><big>Interiores</big></dt>
                <li> Ventanas de piso a techo de hasta 10'</li>
                <li> Terrazas de 5' de profundidad</li>
                <li> Pisos de madera de nogal diseñados en todas partes</li>
                <li> Lavadora y secadora Miele</li>
                <li> Luminarias personalizadas en acabado cromado</li>
                <li> Tecnología integrada en el hogar</li>
                <dt>Cocina</dt>
                <li> Cocinas diseñadas a medida por Woods Bagot que cuentan con zócalos y rejillas de cromo pulido e
                    iluminación oculta debajo de los gabinetes.
                </li>
                <li> Gabinetes de roble rojo teñidos de blanco intenso</li>
                <li> Metal envuelto en un acabado oscuro.</li>
                <li> Encimeras de piedra negra</li>
                <li> Islas totalmente personalizadas con gabinetes lacados en negro y mostrador de comedor.</li>
                <li> Salpicadero de espejo grabado y teñido con pantalla de tecnología integrada</li>
                <li> Accesorios de plomería personalizados en acabado cromado.</li>
                <li> Conjunto totalmente integrado de electrodomésticos Miele que incluye: refrigerador, placa de
                    inducción, horno de convección, lavavajillas, refrigerador para vinos* y horno rápido
                </li>
                <dt>Bano Principal</dt>
                <li> Ducha de mármol Nero Marquina o Bianco Gioia con cabezal de ducha de lluvia totalmente integrado,
                    repisa de mármol Bianco Gioia iluminada y puertas de vidrio estriado
                </li>
                <li> Tocador flotante con encimeras de mármol Bianco Gioia y puertas con incrustaciones de nogal gris
                    pizarra acanaladas y tiradores personalizados
                </li>
                <li> Grifería y sistemas de ducha personalizados</li>
                <li> Lavabos, inodoros y bañeras Duravit</li>
                <li> Botiquines*</li>
            </ul>
        </>, amenities: <>
            <p className="text-justify">Los espacios comunes de varios niveles que abarcan más de 130.000 pies cuadrados
                reúnen a los residentes y la comunidad.</p>
            <ul>
                <li>Piscina exclusiva en la azotea para residentes</li>
                <li> Cafetería</li>
                <li> Dos restaurantes de autor</li>
                <li> Bar de cócteles</li>
                <li> Piscinas solárium y jardín con servicio de toallas y comida y bebida</li>
                <li> Salas de estar para residentes</li>
                <li> Espacios de coworking y biblioteca</li>
                <li> Sala de proyección</li>

                <li> Simulador de coches de carreras Mercedes-Benz personalizado</li>
                <li> Habitación de niño</li>
                <li> Cocina del chef con comedor privado.</li>
                <li> Cocina y comedor al aire libre</li>
                <li> Coches de la casa Mercedes-Benz</li>
                <li> Conserjería y valet parking 24 horas al día, 7 días a la semana</li>
                <li> Estaciones de carga para vehículos eléctricos</li>
                <li> Estudio de grabación</li>
            </ul>
        </>
    };


    MercedesBenzPlacesObject.introduction = ["Sumérgete en el estilo de vida elevado que es la esencia de cada residencia en Mercedes-Benz Places Miami. Aquí, la belleza no solo se ve, se experimenta, transformando cada aspecto de la vida en un viaje emocional sumamente deseable. Diseñadas por los reconocidos expertos en interiores de Woods Bagot, estas residencias redefinen la vida en Miami y ofrecen una combinación perfecta de innovación, exclusividad y sostenibilidad.", "Espacios habitables incomparables : cada residencia, desde un estudio hasta tres habitaciones, lo invita a un mundo de lujo moderno, donde los diseños meticulosamente concebidos se combinan con una artesanía incomparable. Las áreas de estar están adornadas con ventanales de piso a techo de 10 pies que no solo dejan entrar la luz natural, sino que también enmarcan el impresionante horizonte de Miami, convirtiendo cada vista en una obra maestra.", "Terrazas amplias : ampliando el espacio habitable, las terrazas de 5 pies de profundidad ofrecen un refugio privado al aire libre donde la belleza del paisaje de Miami se fusiona con la comodidad de su hogar, perfecto para el entretenimiento o la contemplación tranquila.", "Artesanía superior : los pisos de madera diseñados se distribuyen por cada residencia, brindando una base cálida y acogedora que complementa los elegantes accesorios cromados personalizados y la tecnología integrada en el hogar, estableciendo un nuevo estándar para el lujo residencial.", "Amenidades de última generación : la practicidad se combina con el lujo con la inclusión de una lavadora y secadora Miele en cada residencia, lo que garantiza que la comodidad nunca se vea comprometida.", "En Mercedes-Benz Places Miami, vivir no se trata solo del espacio que habitas, sino de la calidad de vida que ofrece. Cada residencia es un lienzo para la innovación, diseñada para elevar la experiencia de vida en Miami a niveles sin precedentes de lujo y modernidad."];
    MercedesBenzPlacesObject.name = "mercedes-benz-places-miami";
    MercedesBenzPlacesObject.banner = true;
    MercedesBenzPlacesObject.numberOfImages = 17;

    return MercedesBenzPlacesObject;

}
