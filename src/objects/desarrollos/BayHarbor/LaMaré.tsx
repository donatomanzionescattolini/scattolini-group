import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function  LaMaré() {
    const LaMaréObject = new Desarrollo();

    LaMaréObject.nombre = "la-maré";

    LaMaréObject.caracteristicas = {
        edificio: (
            <>
                <dl>
                    <dt>Ubicación</dt>
                    <dd>
                        <address>
                            LaMaré.9927 E Bay Harbor Dr, Islas Bay Harbor, FL 33154, Estados
                            LaMaré.Unidos
                        </address>
                    </dd>
                    <dt>Pisos</dt>
                    <dd>7</dd>
                    <dt>Unidades</dt>
                    <dd>33 Studio Residences, de 1 a 2 dormitorios</dd>
                    <dt>Fecha Estimada de Finalización</dt>
                    <dd>2026</dd>
                </dl>
            </>
        ),
        residencias: (
            <>
                <ul>
                    <li> Planos de planta espaciosos</li>
                    <li>Techos de 10 pies</li>
                    <li>Elegantes gabinetes de cocina</li>
                    <li>Electrodomésticos de cocina de acero inoxidable</li>
                </ul>
            </>
        ),
        amenidades: (
            <>
                <ul>
                    <li>Piscina</li>
                    <li>Gimnasio</li>
                    <li>Exuberante paisaje</li>
                    <li>Salón</li>
                </ul>
            </>
        ),
    };
    LaMaréObject.introduccion = [
        "La Maré se compone de dos exquisitas torres que ofrecen una experiencia de vida extraordinaria.El Regency Collection es un moderno edificio de cristal definido por su sorprendente belleza, sostenibilidad y refinada sensación de comodidad, con un interior en el que destaca una paleta suave y natural.La Signature Collection, por su parte, es una estructura contemporánea de impresionante diseño con interiores armoniosos.Aquí, la exclusividad es la norma, ya que cada unidad cuenta con ventanas envolventes de suelo a techo que brindan una vista clara de su impresionante estética náutica.Con componentes aerodinámicos, elementos tropicales y el generoso uso de piedra color arena, travertino y maderas aclaradas, los residentes disfrutan de privacidad y se ven envueltos en una atmósfera estilo resort",
    ];
    LaMaréObject.titulo = "La Maré";
    LaMaréObject.subtitulo = "Regency";
    LaMaréObject.numberOfImages = 36;
    LaMaréObject.banner = true;

    return LaMaréObject;
}
