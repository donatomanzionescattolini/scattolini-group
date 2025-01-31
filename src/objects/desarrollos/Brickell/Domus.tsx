import Project from "../../../models/desarrollos/Project.tsx";
import Brickell from "../../areas/Brickell.tsx";

export default function Domus() {
    const Domus = new Project();
    Domus.name = "domus";
    Domus.title = "Domus FLATS"
    Domus.area = Brickell();
    Domus.traits = {
        building: (
            <ul>
                <li>Vestíbulo</li>
                <li>Mini Mercado</li>
                <li>Aparcacoches</li>
                <li>Aparcamiento de bicicletas</li>
                <li>Cafetería</li>
                <li>Salón Jardín</li>
                <li>Coworking</li>
                <li>Habitación de paquetes</li>
                <li>Gimnasio</li>
                <li>Yoga y Pilates</li>
                <li>Piscina</li>
                <li>Jacuzzi</li>
                <li>Sauna</li>
                <li>Zona de barbacoa</li>
                <li>Bar de vinos y cervezas</li>
            </ul>
        ),
        residences: (
            <ul>
                <li>Residencias 100% amuebladas</li>
                <li>72 estacionamientos comunes</li>
                <li>Alquileres a corto plazo</li>
                <li>Plataforma digital (Airbnb, Booking, etc.)</li>
                <li>Centro de llamadas 24/7</li>
            </ul>
        ),
        amenities: (
            <>
                <p>
                    Domus Brickell ofrece un espacio ideal para socializar y
                    establecer contactos, con 500 metros cuadrados de áreas comunes
                    modernas y acogedoras adecuadas para cualquier ocasión. Desde su
                    vestíbulo, perfecto para reuniones de negocios y relajación, hasta
                    el minimercado, el espacio de trabajo, la cafetería y el hermoso
                    jardín, Domus Brickell Park ofrece un refugio tranquilo sin tener
                    que salir de casa. Por supuesto, la experiencia solo se completa
                    con disfrutar de su impresionante piscina en la azotea, con vistas
                    únicas de Brickell.
                </p>
                <ul>
                    <li>Más de 4.200 pies cuadrados de lobby de hospitalidad</li>
                    <li>La habitación del pavo real</li>
                    <li>Parque de bolsillo cubierto al aire libre</li>
                    <li>Cafetería y panadería con terraza cubierta</li>
                    <li>Mercado artesanal que ofrece opciones gourmet</li>
                    <li>Exuberante salón en el jardín</li>
                    <li>Bar de vinos y cervezas</li>
                    <li>Gimnasio con equipos de última generación</li>
                    <li>Baño de vapor</li>
                    <li>Terraza de la piscina en la azotea con cabañas</li>
                    <li>Jacuzzi</li>
                </ul>
            </>
        ),
    };

    Domus.introduction = [
        "Bienvenido a Domus, una colección de FLATS (Apartamentos Flexibles para Estancias Temporales) diseñada para adaptarse a tu vida: las comodidades del hogar con el servicio, la seguridad y la consistencia de un hotel en un entorno local, divertido y totalmente conectado. Domus ofrece todos los elementos esenciales con excelente gusto y todas las comodidades que importan. Ubicado en el corazón de Domus Brickell Park, encontrará Peacock Room: un espacio de reunión colectivo y alegre con un ambiente que atrae naturalmente a una multitud y se nutre de la energía del vecindario siempre activo de Brickell.",
    ];
    Domus.banner = true;
    Domus.video =
        <iframe id="ytplayer" width="720" height="405"
                src="https://www.youtube.com/embed/M_9_sCBNLDQ?autoplay=1&controls=0"
                frameBorder={0} allowFullScreen/>
    ;
    Domus.title = "Domus FLATS";
    Domus.subtitle = "";
    Domus.numberOfImages = 7;
    return Domus;
}