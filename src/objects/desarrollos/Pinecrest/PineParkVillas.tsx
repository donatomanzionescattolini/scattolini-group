import Desarrollo from "../../../models/desarrollos/Desarrollo.tsx";

export default function PineParkVillas() {
    const PineParkVillasObject = new Desarrollo();
    PineParkVillasObject.nombre = "pine-park-villas";
    PineParkVillasObject.caracteristicas = {
        edificio: (
            <>
                <p>
                    Pine Park Villas es un colectivo de 18 lujosas y costeras villas
                    de estilo contemporáneo de 3 pisos en un enclave privado y
                    cerrado. Se entrega completamente terminado con gabinetes
                    MiaCucina, electrodomésticos Sub-Zero & Wolf, ascensor, garaje
                    para 2 coches y patios traseros privados. Sumérgete en una piscina
                    comunitaria de borde infinito con cabañas de baño. Gracia
                    arquitectónica, detalles sin concesiones y calidad duradera. Pine
                    Park Villas está estableciendo el nuevo estándar de vida en casas
                    adosadas de lujo en uno de los vecindarios más atractivos del sur
                    de Florida. Pinecrest, un pueblo suburbano ideal, cuenta con
                    proximidad y fácil acceso a la Bahía de Biscayne, extraordinarios
                    parques públicos, excelentes tiendas y algunas de las mejores
                    escuelas públicas y privadas del sureste.
                </p>
                <dl>
                    <dt>Ubicación</dt>
                    <dd>
                        <address>
                            7520 SW 100th St
                            <br/>
                            Pinecrest, FL 33156
                        </address>
                    </dd>
                </dl>
            </>
        ),
        residencias: (
            <>
                <p>
                    Entregados completamente terminados y listos para mudarse, los
                    tres planos de planta de Pine Park Villas ofrecen una alternativa
                    perfecta a una casa unifamiliar.
                </p>
                <ul>
                    <li>4 Dormitorios, 3 Baños, 2 Tocadores</li>

                    <li>2,858 pies cuadrados – 3,145 pies cuadrados habitables</li>

                    <li>3,451 pies cuadrados – 3,725 pies cuadrados en total</li>

                    <li>Sala de estar/Medios/Sala familiar</li>

                    <li>Ascensor individual privado en cada residencia.</li>

                    <li>Garaje para dos coches</li>

                    <li>Espacios habitables de varios niveles</li>

                    <li>Amplias recámaras con walk-in closets</li>

                    <li>
                        Los patios traseros privados son la base de estas casas únicas.
                    </li>

                    <li>Gabinetes Mia Cucina</li>

                    <li>Electrodomésticos Sub-Zero y Wolf</li>

                    <li>Accesorios de plomería Isenberg</li>
                </ul>
            </>
        ),
        amenidades: (
            <ul>
                <li>Comunidad cerrada</li>

                <li>Piscina de borde infinito con descarga de agua</li>

                <li>Cabañas con baño</li>

                <li>Cerca prefabricada de 6 pies</li>
            </ul>
        ),
    };
    PineParkVillasObject.introduccion = [
        "Pine Park Villas está estableciendo el nuevo estándar de vida en casas adosadas de lujo en uno de los vecindarios más atractivos del sur de Florida. Pinecrest, un pueblo suburbano ideal, cuenta con proximidad y fácil acceso a la Bahía de Biscayne, extraordinarios parques públicos, excelentes tiendas y algunas de las mejores escuelas públicas y privadas del sureste.",
        "The Village of Pinecrest fue reconocido como uno de los diez mejores lugares de Florida por su calidad de vida en general por el South Florida Business Journal. Pine Park Villas ofrece una ubicación ideal en Pinecrest con fácil acceso al centro de Miami, Coral Gables y el aeropuerto internacional de Miami.      ",
    ];
    PineParkVillasObject.titulo = "Pine Park Villas";
    PineParkVillasObject.slogan = "Estilo de vida redefinido";
    PineParkVillasObject.numberOfImages = 33;
//   video={
//     <iframe
//       width="1280"
//       height="720"
//       src="https://www.youtube.com/embed/KMvPmEZyzx8"
//       title="Pine Park Villas in Pinecrest, FL"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       allowFullScreen
//     ></iframe>
//   }    PineParkVillasObject.banner=true;     PineParkVillasObject.area =  Pinecrest();

    return PineParkVillasObject;
}
