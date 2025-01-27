import React from 'react'
import Project from '../../../models/desarrollos/NewDevelopment.tsx';
import FtLauderdale from '../../areas/FtLauderdale';

export default function NattivoFtLauderdale() {
    const NatiivoFtLauderdaleObject = new Project(FtLauderdale());
    NatiivoFtLauderdaleObject.area = FtLauderdale();
    NatiivoFtLauderdaleObject.nameForProjectFolders = "natiivo-ft-lauderdale";
    NatiivoFtLauderdaleObject.traits = {
        building: <ul>
            <li>Pisos:48</li>
            384 residencias llave en mano
            <li>Residencias: 384</li>
            <li>De estudio Hasta 3 dormitorios, totalmente terminadas
                y amuebladas diseñadas para alquileres a corto plazo
            </li>
            <li>Ubicacion: 200 West Broward Blvd.
                Fort Lauderdale, Florida 33311
            </li>
        </ul>,
        residences: <>
            <ul>
                <li>Natiivo Fort Lauderdale 10th Level Fit Inspiración Escalada</li>
                <li>Servicio de limpieza, servicio de toallas y lavandería, entrega de comestibles, servicios de
                    aeropuerto y automóviles
                </li>
                <li>Programa de Gestión de Alquiler Flexible de Natiivo</li>
                <li>Hospitalidad disponible para los propietarios de Natiivo</li>
                <li>Acceso a la aplicación Natiivo</li>
                <li>Mantenimiento manos libres para sistemas mecánicos, eléctricos y electrodomésticos</li>
                <li>Natiivo Privileges / Rewards</li>
                <li>Tarifas Preferenciales y Reservaciones Prioritarias</li>
            </ul>
        </>,
        amenities: <>
            <ul>

                <li>Piscina en la azotea con impresionantes vistas</li>
                <li>Salón Club y Salón Social</li>
                <li>Gimnasio de última generación con spa, vestuario y duchas</li>
                <li>Restaurante de autor en la planta baja</li>
                <li>Locales comerciales y espacio de coworking adicionales en la planta baja</li>
                <li>Servicios del hotel para propietarios y huéspedes</li>
                <li>Programa hotelero flexible para alquiler de unidades</li>
                <li>Terraza de la piscina con exuberante follaje tropical</li>
                <li>Vista de la calle Natiivo Fort Lauderdale</li>
            </ul>
        </>
    };
    NatiivoFtLauderdaleObject.officialName = "Natiivo | Ft. Lauderdale";
    NatiivoFtLauderdaleObject.subtitle = "Un nuevo impulso. Una nueva era. Un nuevo Fort Lauderdale.";
    NatiivoFtLauderdaleObject.numberOfImages = 38;
    NatiivoFtLauderdaleObject.video =
        <iframe width="1080" height="608" src="https://www.youtube.com/embed/xQe3MFkbhUc?autoplay=1"
                title="Natiivo Fort Lauderdale - First Turnkey, Residential &amp; Hospitality Property in Fort Lauderdale, FL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-sharel"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen autoFocus></iframe>
    NatiivoFtLauderdaleObject.address = "";
    NatiivoFtLauderdaleObject.yearOfCompletion = 2022;
    NatiivoFtLauderdaleObject.banner = true;

    NatiivoFtLauderdaleObject.introduction = ["Natiivo Fort Lauderdale es la primera propiedad residencial y hotelera llave en mano en Fort Lauderdale. Diseñado, construido y con licencia para alquileres a corto plazo, Natiivo ofrece una casa compartida oportunidad que permite a los residentes una forma inteligente de poseer. Una icónica torre de 40 pisos en el centro de la ciudad epicentro, Natiivo ofrecerá un estilo de vida flexible de espacios de diseño, comodidades sin precedentes y la muy lo mejor de Fort Lauderdale."]
    return NatiivoFtLauderdaleObject

        ;
}
