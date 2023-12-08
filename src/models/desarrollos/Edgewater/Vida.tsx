import {Desarrollo} from "../Desarrollo.tsx";


const Vida = new Desarrollo();
Vida.nombre = "vida";
Vida.direccion = "3050 Biscayne Blvd, Miami, FL 33137";
Vida.caracteristicas = {
    edificio: (
        <>
            <ul>
                <li>Pisos: 9</li>
                <li>Residencias: 121</li>
                <li>Ubicación: 3050 Biscayne Blvd, Miami, FL 33137</li>
                <li>Más de 22,000 pies cuadrados de comodidades</li>
                <li>
                    Amplia piscina de tranquilidad en la azotea con jacuzzi, cabañas
                    y estaciones de parrilla
                </li>
                <li>Restaurante/bar privado en la azotea</li>
                <li>Impresionantes vistas de la Bahía de Biscayne</li>
                <li>Gimnasio de última generación</li>
                <li>Conveniente barra de jugos y café</li>
                <li>Centro de coworking HiTech</li>
                <li>Acceso controlado a la propiedad</li>
                <li>
                    Servicios de conserjería las 24 horas del día, los 7 días de la
                    semana
                </li>
            </ul>
        </>
    ),
    residencias: (
        <>
            <ul>
                <li>
                    Estudio completamente terminado y amueblado, residencias de 1,
                    2, 3 y 4 habitaciones
                </li>
                <li>Techos de 9 pies de altura</li>
                <li>Balcón con cada residencia</li>
                <li>Pavimentos terminados</li>
                <li>Cocinas gourmet</li>
                <li>Electrodomésticos de estilo europeo</li>
                <li>Duchas de lluvia en baños primarios</li>
                <li>Tocadores personalizados</li>
                <li>Lavadora y secadora en residencias</li>
                <li>Armarios empotrados</li>
                <li>Paquetes de iluminación contemporánea</li>
                <li>Sistemas de hogar inteligente</li>
                <li>Sistema de entrada sin llave</li>
            </ul>
        </>
    ),
    amenidades: (
        <>
            <ul>
                <li>Espacio de Trabajo</li>
                <li>Spa</li>
                <li>Rooftop</li>
                <li>Restaurantes</li>
                <li>Lounge</li>
                <li>Áreas al aire libre</li>

                <li>Gimnasio</li>
            </ul>
        </>
    ),
};
Vida.introduccion = [
    "Vida = Life",
    "VIDA Residences es un edificio innovador y contemporáneo de 9 pisos. Cuenta con un total de 121 residencias y cuenta con un gimnasio de última generación, terraza en la azotea con parrillas para barbacoa, espacios de coworking, spa, conserje las 24 horas y vistas a la Bahía de Biscayne. Las residencias en VIDA EdgewaterComponent ofrecen balcones espaciosos, cocina gourmet, electrodomésticos de estilo europeo, armarios empotrados y mucho más. El equipo de diseño que concibió VIDA es Kobi Karp Miami; y fue desarrollado por Urbana Holdings y Urbana Bueno, las mentes maestras detrás del Hotel Artmore, Sheraton Arlington y más. VIDA está ubicado en la vibrante zona de EdgewaterComponent, en el condado de Miami Dade, donde los nuevos rascacielos residenciales de súper lujo están transformando el horizonte de Miami y justo al lado del centro de la ciudad, Midtown, el Design District y Wynwood.",
];
Vida.titulo = "Vida Residences";
Vida.subtitulo = "Un tramo más allá de lo ordinario...";
Vida.numberOfImages = 24;
Vida.banner = true;


export default Vida;