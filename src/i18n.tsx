


import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from "react";

type Lang = "es" | "en";

type Translations = {
    [key: string]: string | string[] | Translations;
};

const translations: Record<Lang, any> = {
    es: {
        nav: {
            inicio: "Inicio",
            liderazgo: "Liderazgo",
            asociados: "Asociados",
            aliados: "Aliados",
            areas: "Áreas",
            contacto: "Contacto",
            desarrollos: "Desarrollos",
            equipo: "Nuestro Equipo",
        },
        hero: {
            title: "SCATTOLINI GROUP",
            subtitle: "Agencia Inmobiliaria",
            cta: "Contáctanos Hoy",
        },
        pages: {
            areas: {title: "Áreas"},
            desarrollos: {
                envyResidence: {
                    titulo: "ENVY Pompano Beach",
                    subtitulo: "Vive más allá de lo ordinario",
                    slogan: "Vive más allá de lo ordinario.",
                    direccion: "475 SE 1st St, Pompano Beach, FL 33060",
                    ubicacion: "475 SE 1st St, Pompano Beach, FL 33060",
                },
                baccarat: {title: "Proyectos en Desarrollo"},
            },
            asociados: {title: "Asociados"},
            contacto: {
                title: "Contacto",
                address: "12750 NW 17th Street Unit 222, Miami, Florida 33182",
                telefono: "Teléfono:",
                fax: "Fax:",
                horasOficina: "Horas de Oficina",
                horasTexto: "Lunes a viernes: 9am - 5pm\nSábado: Con cita\nDomingo: Cerrado",
                enviarCorreo: "Enviar un correo",
                cerrarFormulario: "Cerrar Formulario de Contacto",
                formularioTitulo: "Formulario de contacto",
                officeHours: "Horas de Oficina",
                openForm: "Enviar un correo",
                closeForm: "Cerrar Formulario de Contacto",
                contactFormTitle: "Formulario de contacto",
                form: {
                    name: "Nombre",
                    email: "Correo electrónico",
                    phone: "Número de Teléfono",
                    message: "Mensaje",
                    sendButton: "Enviar",
                    emailLink: "este correo",
                },
                alerts: {
                    successTitle: "Mensaje enviado",
                    successMessage: "¡Mensaje enviado con éxito!",
                    failureTitle: "Error al enviar",
                    failureMessage: "Hubo un problema enviando el correo. Por favor intente de nuevo o envíenos un correo desde su propio servicio a",
                },
                officeHoursText: "Lunes a viernes: 9am - 5pm\nSábado: Con cita\nDomingo: Cerrado",
                phone_label: "Teléfono",
                fax_label: "Fax",
                mondayFriday: "Lunes a viernes",
                saturday: "Sábado",
                sunday: "Domingo",
                byAppointment: "Con cita",
                closed: "Cerrado",
            },
            manzione: {
                title: "Administración de propiedades en la que puedes confiar",
                descripcion: "En nuestra empresa, nos especializamos en la administración de propiedades. Nos aseguramos de que cada propiedad esté bien cuidada y mantenida, y nos encargamos de todos los detalles para que nuestros clientes puedan disfrutar de la tranquilidad de saber que su propiedad está en buenas manos.",
            },
            about: {
                title: "Scattolini Group",
                whoWeAre: "Quiénes Somos",
                requestConsultation: "Solicita una consulta",
                callUs: "Llámanos hoy",
                paragraph: "Scattolini Group es un equipo de expertos con décadas de experiencia en el mercado inmobiliario del sur de Florida. Hemos tenido el privilegio de asistir a numerosos clientes provenientes de diversas partes del mundo, brindándoles nuestra amplia gama de servicios en el ámbito de los bienes raíces en esta vibrante región.",
                consultationText: "Cualquiera de nuestros expertos estaría encantado de programar una consulta para explorar las opciones disponibles de acuerdo a tus necesidades",
                seeMore: "Ver Más",
            },
            services: {
                title: "Servicios",
                advisory: "Asesoramiento Inmobiliario",
                propertyManagement: "Administración de Propiedades",
                sales: "Venta de Propiedades",
                purchase: "Compra de Propiedades",
                moreInfo: "Obtener más información",
                advisoryDesc: "Brindamos asesoramiento experto en todas las áreas del mercado inmobiliario.",
                propertyManagementDesc: "Administración de propiedades con servicio completo para propietarios e inversores.",
                salesDesc: "Servicios de venta de propiedades de alta calidad para ayudarle a encontrar y vender bienes raíces premium.",
                purchaseDesc: "Ayudamos a los clientes a encontrar la propiedad perfecta que se ajuste a sus necesidades y presupuesto.",
            },
            project: {
                caracteristicas: "Características",
                edificio: "Edificio",
                residencias: "Residencias",
                amenidades: "Amenidades",
                galeria: "Galería Fotográfica",
                pdf: {
                    brochure: "Brochure",
                    hoja: "Hoja de Datos",
                    planos: "Planos",
                },
                pdfUI: {
                    cantDisplay: "No se puede mostrar el archivo PDF.",
                    download: "Descárgalo",
                    downloadBtn: "Descargar",
                    documentsTitle: "Documentos De Interés",
                    instead: "en vez.",
                },
                propertiesInArea: "Propiedades en el Área",
                contactUsToday: "Contáctanos Hoy",
            },
            leadership: {
                subtitle: "Equipo de expertos, Servicio Personalizado",
                paragraph1: "Scattolini Group está dirigido por Elda Scattolini, una agente de bienes raíces con 20 años de experiencia en el mercado del sur de Florida. Elda ha ayudado a cientos de clientes de diferentes partes del mundo a alcanzar sus objetivos inmobiliarios, con profesionalismo, integridad y dedicación.",
                paragraph2: "Elda y su equipo de agentes son expertos en el área del sur de Florida, con un amplio conocimiento de los vecindarios, las escuelas, las comodidades y las tendencias del mercado. Te guiarán en cada paso del proceso, desde encontrar la propiedad adecuada hasta negociar el mejor precio y cerrar el trato de manera eficiente y sin contratiempos.",
            },
        },
        whatsapp: {
            placeholder: "Quisiera programar una llamada telefónica o una reunión con un agente para aprender más sobre el mercado inmobiliario en el Sur de la Florida y analizar las opciones disponibles para mí",
            status: "Respuestas dentro de las primeras 24 horas",
        },
        roles: {
            owner: "😸 Dueña y Agente",
            officeManager: "😸 Agente y Office Manager",
            agent: "🤠 Agente",
            propertyManager: "😸 Agente y Property Manager",
            broker: "🚀 Broker",
        },
        desarrollos: {
            envyResidence: {
                titulo: "ENVY Pompano Beach",
                subtitulo: "Vive más allá de lo ordinario",
                slogan: "Vive más allá de lo ordinario.",
                direccion: "475 SE 1st St, Pompano Beach, FL 33060",
                ubicacion: "475 SE 1st St, Pompano Beach, FL 33060",
                introduccion: [
                    "Envy Residences combina la vibra moderno y ubicación estratégica. Construido en 2021, ofrece 214 unidades desde estudios hasta apartamentos de 3 habitaciones. Disfruta de amenidades de primera clase, como piscina estilo resort, gimnasio con pared de escalar, mini golf y áreas sociales. A solo 1.8 millas de la playa y con restricciones de alquiler flexibles, Envy es perfecto para vivir o invertir.",
                ],
                caracteristicas: {
                    edificio: {
                        ubicacion: "Ubicación",
                        unidades: "Número de Unidades",
                        unidadesCount: "213 Residencias",
                        pisos: "Pisos",
                        pisosCount: "Dos torres de 11 pisos cada una",
                        tipoResidencia: "Tipo de Residencia",
                        tipoResidenciaDesc: "Amplios planos de planta que incluyen estudios y residencias de 1, 2 y 3 habitaciones",
                        apertura: "Año de Apertura",
                        aperturaYear: "2025",
                    },
                    residencias: {
                        disenos: "Diseños de concepto abierto con ventanas de piso a techo.",
                        cocinas: "Cocinas de diseño con electrodomésticos premium.",
                        banos: "Baños inspirados en el spa con elegantes acabados.",
                        balcones: "Balcones privados con impresionantes vistas de la playa de Pompano.",
                    },
                    amenidades: {
                        bienestar: "Centro de bienestar: un gimnasio de última generación y espacio de yoga.",
                        piscina: "Piscina estilo resort: una cubierta de piscina hermosamente ajardinada para la máxima relajación.",
                        salon: "Sofisticado salón y sala de entretenimiento: un área común elegante para socializar.",
                        mascotas: "Ventajas para mascotas: un área de mascotas designada para sus amigos peludos.",
                        parque: "Parque infantil: un espacio divertido y seguro para que los niños prueguen.",
                    },
                },
                tipos: {
                    estudio: "Estudios",
                    habitacion1: "1 Habitación",
                    habitacion2: "2 Habitaciones",
                    habitacion3: "3 Habitaciones",
                },
            },
            baccarat: {
                titulo: "Baccarat Residences",
                subtitulo: "Donde la vida brilla para siempre",
                introduccion: [
                    "Baccarat presenta con orgullo su primera colección de residencias al mercado de Miami.",
                    "Iluminada por el brillo infinito del sol, esta torre elevada se mantendrá radiante en el paseo marítimo donde el río se encuentra con la bahía, en el corazón de las brillantes luces de la ciudad. Combinando la vitalidad brillante y el dinamismo magnético de Brickel con un diseño iluminado y un servicio ingenioso, los residentes pueden esperar un estilo de vida infundido con delicias inesperadas y brillantez inspirada",
                    "Penthouse residences disponibles para vista previa exclusiva.",
                ],
            },
            brickell2200: {
                titulo: "2200 Brickell",
                subtitulo: "Un Santuario Urbano en el Corazón de Brickell",
                introduccion: [
                    "2200 Brickell is a new condominio de lujo en South Brickell, diseñado por Revuelta Architecture y con diseño interior de ODA New York.",
                    "Estas lujosas residencias de 1 a 4 habitaciones ofrecen acabados espectaculares, electrodomésticos de alta calidad, ventanas de vidrio de piso a techo, estacionamiento asignado en espacios en el mismo piso y mucho más.",
                    "Los residentes en 2200 Brickell disfrutan de comodidades como una piscina estilo centro turístico con spa al aire libre y cabañas junto a la piscina, cancha de pickleball, cocina de verano, área de fitness al aire libre, área de juegos para niños, una pista para caminar de un cuarto de milla y más.",
                ],
            },
            labaia: {
                titulo: "La Baia",
                subtitulo: "Elegancia frente a la Bahía",
                introduccion: [
                    "La Baia ofrece 57 residencias de lujo en las Islas de Bay Harbor con vistas espectaculares de la Bahía de Biscayne y el Océano Atlántico.",
                    "Cada residencia cuenta con techos altos de 9 a 10 pies, terrazas privadas, pisos de madera importada y acabados de mármol.",
                    "Disfrute de un estilo de vida exclusivo con amenities de lujo y una ubicación privilegiada.",
                ],
            },
            elleResidences: {
                titulo: "Elle Residences",
                subtitulo: "El Nuevo Hogar Del Alto Estilo",
                introduccion: [
                    "Viva en la pasarela de los distritos de diseño, moda y cultura de Miami en ELLE Residences, inspirada por 80 años de moda y decoración que marcan tendencia.",
                    "Elle Residences Miami es una colección de 180 residencias elegantes sin restricciones de alquiler. Su diseño interior presenta un guiño a las raíces parisinas de la revista.",
                    "Un diseño exclusivo de Behar Font & Partners e interiores refinados de The One Atelier se unen para ofrecer una exquisita colección de viviendas en el área de Edgewater.",
                ],
                direccion: "3618 NE 5th Ave, Miami, FL 33137, Estados Unidos",
                caracteristicas: {
                    residencias: {
                        descripcion: "Adquiera su propio piso en el corazón de Miami. Inspiradas por las páginas de ELLE Decor, las residencias combinan el estilo moderno de mediados de siglo y el estilo francés contemporáneo con un toque de lujo tropical.",
                        planos: "Planos de planta bien pensados ‍con techos altos y vistas al agua y al horizonte.",
                        suites: "Suites Grande en el piso superior con techos de 11 pies",
                        ventanas: "Ventanas y puertas resistentes a impactos de piso a techo",
                        cocinas: "Cocinas elegantes con el conjunto de electrodomésticos Miele",
                        muebles: "Muebles y carpintería italianos importados de Italkraft",
                        encimeras: "Exquisitas encimeras de cuarzo",
                        suelos: "Suelo de madera con diseño de chevrones de inspiración francesa",
                        accesorios: "Accesorios y acabados modernos de latón",
                    },
                },
            },
            ariaReserve: {
                titulo: "Aria Reserve",
                subtitulo: "Lujo sin Compromisos",
                introduccion: [
                    "Aria Reserve presenta residencias de ultra lujo con vistas panorámicas de la bahía y la ciudad.",
                    "Diseñado por los arquitectos más prestigiosos, cada detalle refleja elegancia y sofisticación.",
                    "Disfrute de amenities de clase mundial y una ubicación inmejorable en Edgewater.",
                ],
            },
            ella: {
                titulo: "Ella Miami Beach",
                subtitulo: "Un Tributo Al Glamuroso Pasado De Miami Beach",
                introduccion: [
                    "Ella, un tributo a la espléndida historia de Miami Beach, combina la elegancia vintage con líneas contemporáneas, creando una atmósfera conmovedora que captura el espíritu de Miami Beach.",
                    "Meticulosamente diseñada, Ella ofrece experiencias de vida excepcionales, cumpliendo con los más altos estándares de sofisticación contemporánea.",
                    "Ella establece un nuevo estándar para los desarrollos residenciales de Miami con alquileres a corto plazo. La reconocida firma Arquitectonica desarrolló una estética atrevida y moderna.",
                ],
                direccion: "6940 Abbot Avenue, Miami Beach, FL 33141",
                caracteristicas: {
                    edificio: {
                        pisos: "95 residencias",
                        unidades: "Apartamentos de 1 a 2 dormitorios",
                        constructora: "Constellation",
                        finalizacion: "2026",
                    },
                    residencias: {
                        vistas: "Vistas al mar / bahía",
                        proximidad: "Proximidad a la playa",
                        techos: "Aproximadamente 9' + alturas de techo",
                        lavanderia: "Lavadora/secadora en el apartamento",
                        terrazas: "Terrazas con outlets",
                        alquileres: "Se permiten alquileres a corto plazo",
                        cocinas: "Cocinas ItalKraft",
                        electrodomesticos: "Paquete de electrodomésticos Jennair, estufa de inducción de 30\", refrigeradores de 24 a 36\"",
                        armarios: "Armarios de diseño",
                        encimeras: "Encimeras de piedra",
                    },
                },
            },
            astonMartin: {
                titulo: "Aston Martin Residences",
                subtitulo: "Lujo Automotriz Redefinido",
                introduccion: [
                    "Aston Martin Residences lleva la legendaria artesanía de Aston Martin al corazón de Miami.",
                    "391 residencias de lujo con vistas impresionantes a la bahía y la ciudad.",
                    "Experimente el epitome del lujo urbano con amenities de clase mundial y diseño sofisticado.",
                ],
                direccion: "300 Biscayne Boulevard Way",
                caracteristicas: {
                    edificio: {
                        ubicacion: "300 Biscayne Boulevard Way",
                        residencias: "391 Residencias en Condominio",
                        diseno: "Diseñado por Aston Martin",
                    },
                },
            },
            domusBrickellCenter: {
                titulo: "Domus Brickell Center",
                subtitulo: "La cima del lujo en el corazón de Brickell",
                introduccion: [
                    "Domus Brickell Center es un desarrollo residencial contemporáneo que ofrece estudios, pisos de uno y dos dormitorios, totalmente amueblados y con estilo, equipados con comodidades de hotel y propiedad flexible, ubicado perfectamente en el vibrante barrio de Brickell en Miami. Esta torre de 35 pisos cuenta con 579 residencias diseñadas por MC+G Architecture y desarrolladas por North Development, una alianza entre Edifica (Perú) y Oak Capital (Miami).",
                    "Domus Brickell Center redefine el estilo de vida en Miami al combinar lujo, ubicación y estilo bajo un mismo techo. Proporciona una combinación única de comodidades tipo hotel con la privacidad y conveniencia de una residencia personal. Es una oportunidad ideal para compradores locales, inversionistas internacionales y nómadas digitales que buscan un espacio moderno y flexible con un alto potencial de rentabilidad y administración profesional.",
                ],
                direccion: "1034 SW 2nd Ave, Miami FL 33130",
                ubicacion: "1034 SW 2nd Ave, Miami FL 33130",
                caracteristicas: {
                    amenidades: {
                        descripcion: "Domus Brickell Center ofrece comodidades únicas para satisfacer las necesidades de sus residentes, como una piscina en la azotea, bar, área de parrilla, salón, alimentos y bebidas en la planta baja de 143 metros cuadrados, amplio lobby con aproximadamente 371 metros cuadrados de espacio para reuniones, parlantes con sonido envolvente y ambiente. Música, edificio que admite mascotas, estaciones de carga para vehículos eléctricos, bicicletas compartidas Domus, sistema de filtración de aire especializado en todas las áreas comunes y más...",
                        salonVestibulo: "Salón del vestíbulo 'The Cypress Room'",
                        cafe: "Café con barista y panadería",
                        vinos: "Bar de vinos con terraza cubierta",
                        mercado: "Mercado artesanal",
                        patio: "Patio externo en un jardín cubierto",
                        gimnasio: "Gimnasio con equipos de última generación",
                        piscinaAzotea: "Piscina en la azotea con vistas panorámicas de la ciudad y la bahia.",
                        cabanas: "Cabañas con camas de día",
                        jacuzzi: "Jacuzzi",
                        yoga: "Espacio de yoga en la azotea",
                        barAzotea: "Bar en la azotea",
                        coworking: "Amplio espacio de coworking",
                        reuniones: "Sala de reuniones/conferencias",
                        bienvenida: "Sala de bienvenida las 24 horas",
                        valet: "Servicio de valet las 24 horas",
                        atencion: "Línea de atención al cliente las 24 horas",
                        operador: "Operador hotelero con amplia experiencia para supervisar el manejo de las unidades",
                        limpieza: "Equipo de limpieza con experiencia",
                        hoteleria: "en hotelería",
                        portal: "Portal de alquiler para propietarios",
                    },
                    residencias: {
                        descripcion: "¡Todas las residencias de lujo en Domus Brickell Center incluyen planos de planta espaciosos, techos de más de 2.7 metros, ventanas resistentes al impacto del viento, balcones, elegantes gabinetes de cocina, electrodomésticos de cocina de acero inoxidable, Agua filtrada por rayos ultravioleta y más! Disfrute de vistas espectaculares de los lujosos edificios de Brickell y del centro y de todo el horizonte de Miami.",
                        terminados: "Entregados completamente terminados y amueblados Balcón privado en todos los departamentos",
                        cerradura: "Sistema de cerradura inteligente con entrada sin llave",
                        cocinaEquipada: "Cocina equipada con electrodomésticos marca Bosch",
                        accesorios: "Modern fixtures",
                        cubiertas: "Cubiertas de cuarzo",
                        lavadora: "Lavadora/Secadora",
                        aguaFiltrada: "Agua filtrada por rayos ultravioleta en todas los departamentos",
                    },
                    edificio: {
                        ubicacion: "Ubicación",
                        pisos: "Pisos",
                        pisosCount: "35",
                        residencias: "Número de Residencias",
                        residenciasCount: "579",
                        tiposResidencias: "Tipos de Residencias",
                        tiposResidenciasDesc: "Estudios, 1 y 2 dormitorios",
                        finalizacion: "Año de Finalizacion de la Construcción",
                        finalizacionYear: "2027",
                        techos: "Techos con más de 9 pies de altura en todos los departamentos",
                        vestibuloAmplio: "Vestíbulo amplio con aproximadamente 390 metros cuadrados de espacio de reunión y ventanas altas de piso a techo",
                        altavoces: "Altavoces con musica ambiental en el Cypress Room",
                        petFriendly: "Pet Friendly (acceptamos mascotas)",
                        ventanas: "Ventanas resistentes al impacto del viento",
                        estaciones: "Estaciones de carga para vehículos eléctricos",
                        bicicletas: "Bicicletas para el uso de los residentes",
                        aire: "Aire acondicionado filtrado en todas las áreas comunes",
                    },
                },
            },
            "viceroy-brickell": {
                titulo: "Viceroy Brickell",
                introduccion: [
                    "Viceroy Residences Brickell es una torre de lujo ubicada en Brickell, con impresionantes vistas y amenidades premium."
                ],
                direccion: "77 SE 5th St, Miami, FL 33131",
                banner: "true",
                numberOfImages: "35",
                caracteristicas: {
                    edificio: {
                        direccionLabel: "Dirección",
                        añoLabel: "Año De Construcción O Finalización",
                        pisosLabel: "Número De Pisos",
                        unidadesLabel: "Número de Unidades",
                        tipoLabel: "Tipo De Unidades",
                        cuartosLabel: "Número de cuartos",
                    },
                    residencias: {
                        p1: "Colección de residencias de torre con penthouses.",
                        p2: "Planos de planta con estudios y residencias de 1–3 habitaciones."
                    },
                    amenidades: {
                        p1: "Ubicación privilegiada en One Brickell con acceso al riverwalk.",
                        p2: "Terraza estilo resort y servicios de bienestar."
                    }
                }
            },
            cipriani: {
                titulo: "Cipriani Residences",
                introduccion: ["Brillantemente diseñadas por Arquitectonica y 1508 London, estas elegantes residencias ofrecen lujo y servicio Cipriani."],
                banner: "true",
                numberOfImages: "14",
                caracteristicas: {
                    edificio: {
                        p1: "Una adición distintiva al horizonte de Brickell.",
                        li1: "Una elegante torre de 80 pisos con una fachada curva de vidrio en cascada",
                        li2: "Colección de residencias incluidas áticos excepcionales",
                        li3: "Servicios de comedor solo para residentes de Cipriani",
                        li4: "Vistas panorámicas a la bahía y skyline",
                    },
                    residencias: {
                        li1: "Amplias salas de estar con alturas de techo de 10 pies",
                        li2: "Puertas y ventanas corredizas de vidrio de piso a techo",
                        li3: "Acceso a terraza desde sala y dormitorio principal",
                        li4: "Elegantes vestidores en cada dormitorio principal"
                    },
                    amenidades: {
                        li1: "Entrada privada con jardines",
                        li2: "Vestíbulo y ascensores de alta velocidad",
                        li3: "Experiencias gastronómicas privadas Cipriani"
                    }
                }
            },
            lofty: {
                titulo: "Lofty Residences Brickell",
                introduccion: ["Lofty Residences es un condominio de 43 pisos que presenta un nuevo estándar de vida cosmopolita en Brickell."],
                slogan: "Un Nuevo Estándar de Vida Cosmopolita en Brickell",
                banner: "true",
                numberOfImages: "55",
                caracteristicas: {
                    residencias: {
                        title: "Las Residencias",
                        li1: "Residencias urbanas de lujo con diseños abiertos modernos desde 485SF — 930 SF",
                        li2: "Residencias entregadas completamente terminadas y amuebladas",
                        li3: "Vistas panorámicas del río Miami"
                    },
                    edificio: {
                        li1: "Alquileres a corto plazo permitidos",
                        li2: "Vestíbulo de 2 pisos",
                        li3: "Servicio de aparcacoches 24/7"
                    },
                    amenidades: {
                        li1: "Piscina exótica del resort con cabañas",
                        li2: "Bar y parrilla en la terraza de la piscina",
                        li3: "Sala de coworking"
                    }
                }
            },
            "1428-brickell": {
                titulo: "The Residences at 1428 Brickell",
                introduccion: ["The Residences at 1428 Brickell fue cuidadosamente planificada para ofrecer comodidades y privacidad a cada residente."],
                slogan: "Tu vida. A tu manera.",
                banner: "true",
                numberOfImages: "39"
            },
            "14-river-district": {
                titulo: "14 River District",
                introduccion: ["River District 14 ofrece un estilo de vida completo junto al río Miami y la bahía de Biscayne."],
                direccion: "1420 NW 14th Ave, Miami, FL 33125",
                numberOfImages: "27",
                banner: "true"
            },
            "888-brickell-dolce-and-gabbana-residences": {
                titulo: "888 Brickell Dolce & Gabbana Residences",
                introduccion: ["888 Brickell by Dolce & Gabbana redefine la elegancia con residencias y hotel de marca en Miami."],
                banner: "true",
                numberOfImages: "21",
                numberOfFloors: "90",
                numberOfUnits: "259",
                direccion: "888 Brickell Ave, Miami, FL 33131"
            },
            "mercedes-benz-places-miami": {
                titulo: "Mercedes-Benz Places Miami",
                introduccion: ["Mercedes-Benz Places Miami ofrece residencias de lujo con diseño y tecnología de primer nivel."],
                slogan: "Miami, Living, Elevated",
                nombre: "mercedes-benz-places-miami",
                banner: "true",
                numberOfImages: "17"
            },
            ora: {
                titulo: "Ora by Casa Tua",
                introduccion: ["ORA by Casa Tua ofrece residencias de propiedad flexible en Brickell con diseño italiano y servicios de hospitalidad."],
                slogan: "Residencias con Alma en el Corazón de Miami",
                banner: "true",
                numberOfImages: "14",
                video: "https://player.vimeo.com/video/806352821?autoplay=true"
            },
        },
        footer: {
            contact: "Contáctanos",
            address: "Doral, FL",
        },
    },
    en: {
        nav: {
            inicio: "Home",
            liderazgo: "Leadership",
            asociados: "Team",
            aliados: "Allies",
            areas: "Areas",
            contacto: "Contact",
            desarrollos: "Developments",
            equipo: "Our Team",
        },
        hero: {
            title: "SCATTOLINI GROUP",
            subtitle: "Real Estate Agency",
            cta: "Contact Us Today",
        },
        pages: {
            areas: {title: "Areas"},
            desarrollos: {
                envyResidence: {
                    titulo: "ENVY Pompano Beach",
                    subtitulo: "Live Beyond the Ordinary",
                    slogan: "Live Beyond the Ordinary.",
                    direccion: "475 SE 1st St, Pompano Beach, FL 33060",
                    ubicacion: "475 SE 1st St, Pompano Beach, FL 33060",
                },
                baccarat: {title: "Developments"},
            },
            asociados: {title: "Associates"},
            contacto: {
                title: "Contact",
                address: "12750 NW 17th Street Unit 222, Miami, Florida 33182",
                telefono: "Phone:",
                fax: "Fax:",
                horasOficina: "Office Hours",
                horasTexto: "Monday to Friday: 9am - 5pm\nSaturday: By appointment\nSunday: Closed",
                enviarCorreo: "Send an email",
                cerrarFormulario: "Close contact form",
                formularioTitulo: "Contact form",
                officeHours: "Office Hours",
                openForm: "Send an email",
                closeForm: "Close contact form",
                contactFormTitle: "Contact form",
                form: {
                    name: "Name",
                    email: "Email",
                    phone: "Phone Number",
                    message: "Message",
                    sendButton: "Send",
                    emailLink: "this email",
                },
                alerts: {
                    successTitle: "Message sent",
                    successMessage: "Message sent successfully!",
                    failureTitle: "Send failed",
                    failureMessage: "There was a problem sending the email. Please try again or email us directly at",
                },
                officeHoursText: "Monday - Friday: 9am - 5pm\nSaturday: By appointment\nSunday: Closed",
                phone_label: "Phone",
                fax_label: "Fax",
                mondayFriday: "Monday - Friday",
                saturday: "Saturday",
                sunday: "Sunday",
                byAppointment: "By appointment",
                closed: "Closed",
            },
            manzione: {
                title: "Property Management You Can Trust",
                description: "In our company, we specialize in property management. We ensure that each property is well cared for and maintained, and we take care of all the details so that our clients can enjoy the peace of mind of knowing their property is in good hands.",
            },
            about: {
                title: "Scattolini Group",
                whoWeAre: "Who We Are",
                requestConsultation: "Request a consultation",
                callUs: "Call us today",
                paragraph: "Scattolini Group is a team of experts with decades of experience in the South Florida real estate market. We have had the privilege of assisting numerous clients from around the world by providing a full range of real estate services in this vibrant region.",
                consultationText: "One of our experts would be happy to schedule a consultation to explore options tailored to your needs",
                seeMore: "See More",
            },
            services: {
                title: "Services",
                advisory: "Real Estate Advisory",
                propertyManagement: "Property Management",
                sales: "Property Sales",
                purchase: "Property Purchase",
                moreInfo: "Get more info",
                advisoryDesc: "We provide expert advisory across all areas of the real estate market.",
                propertyManagementDesc: "Full-service property management for owners and investors.",
                salesDesc: "High-quality property sales services to help you find and sell premium real estate.",
                purchaseDesc: "We help clients find the perfect property matching needs and budget.",
            },
            project: {
                caracteristicas: "Features",
                edificio: "Building",
                residencias: "Residences",
                amenidades: "Amenities",
                galeria: "Photo Gallery",
                pdf: {
                    brochure: "Brochure",
                    hoja: "Spec Sheet",
                    planos: "Plans",
                },
                pdfUI: {
                    cantDisplay: "Cannot display PDF file.",
                    download: "Download it",
                    downloadBtn: "Download",
                    documentsTitle: "Project Documents",
                    instead: "instead.",
                },
                propertiesInArea: "Properties in the Area",
                contactUsToday: "Contact Us Today",
            },
            leadership: {
                subtitle: "Expert team, personalized service",
                paragraph1: "Scattolini Group is led by Elda Scattolini, a real estate agent with 20 years of experience in the South Florida market. Elda has helped hundreds of clients from around the world reach their real estate goals with professionalism, integrity, and dedication.",
                paragraph2: "Elda and her team of agents are experts in the South Florida area, with deep knowledge of neighborhoods, schools, amenities, and market trends. They will guide you every step of the way, from finding the right property to negotiating the best price and closing the deal smoothly.",
            },
        },
        whatsapp: {
            placeholder: "I'd like to schedule a call or meeting with an agent to learn more about the South Florida real estate market and discuss options available to me",
            status: "Replies within the first 24 hours",
        },
        roles: {
            owner: "😸 Owner & Agent",
            officeManager: "😸 Agent & Office Manager",
            agent: "🤠 Agent",
            propertyManager: "😸 Agent & Property Manager",
            broker: "🚀 Broker",
        },
        desarrollos: {
            envyResidence: {
                titulo: "ENVY Pompano Beach",
                subtitulo: "Live Beyond the Ordinary",
                slogan: "Live Beyond the Ordinary.",
                direccion: "475 SE 1st St, Pompano Beach, FL 33060",
                ubicacion: "475 SE 1st St, Pompano Beach, FL 33060",
                introduccion: [
                    "Envy Residences combines modern vibes and a strategic location. Built in 2021, it offers 214 units ranging from studios to 3-bedroom apartments. Enjoy first-class amenities such as a resort-style pool, fitness center with a climbing wall, mini-golf, and social areas. Just 1.8 miles from the beach and with flexible rental restrictions, Envy is perfect for living or investing.",
                ],
                caracteristicas: {
                    edificio: {
                        ubicacion: "Location",
                        unidades: "Number of Units",
                        unidadesCount: "213 Residences",
                        pisos: "Floors",
                        pisosCount: "Two towers of 11 floors each",
                        tipoResidencia: "Residence Type",
                        tipoResidenciaDesc: "Spacious floor plans including studios and 1, 2, and 3-bedroom residences",
                        apertura: "Opening Year",
                        aperturaYear: "2025",
                    },
                    residencias: {
                        disenos: "Open-concept designs with floor-to-ceiling windows.",
                        cocinas: "Designer kitchens with premium appliances.",
                        banos: "Spa-inspired bathrooms with elegant finishes.",
                        balcones: "Private balconies with stunning views of Pompano Beach.",
                    },
                    amenidades: {
                        bienestar: "Wellness center: a state-of-the-art gym and yoga space.",
                        piscina: "Resort-style pool: a beautifully landscaped pool deck for ultimate relaxation.",
                        salon: "Sophisticated lounge and entertainment room: an elegant common area for socializing.",
                        mascotas: "Pet perks: a designated pet area for your furry friends.",
                        parque: "Children's park: a fun and safe space for kids to play.",
                    },
                },
                tipos: {
                    estudio: "Studios",
                    habitacion1: "1 Bedroom",
                    habitacion2: "2 Bedrooms",
                    habitacion3: "3 Bedrooms",
                },
            },
            baccarat: {
                titulo: "Baccarat Residences",
                subtitulo: "Where life shines forever",
                introduccion: [
                    "Baccarat proudly presents its first collection of residences to the Miami market.",
                    "Illuminated by the infinite glow of the sun, this elevated tower will stand radiant on the waterfront where the river meets the bay, in the heart of the city's bright lights. Combining the vibrant vitality and magnetic dynamism of Brickell with enlightened design and ingenious service, residents can expect a lifestyle infused with unexpected delights and inspired brilliance",
                    "Penthouse residences available for exclusive preview.",
                ],
            },
            brickell2200: {
                titulo: "2200 Brickell",
                subtitulo: "An Urban Sanctuary in the Heart of Brickell",
                introduccion: [
                    "2200 Brickell is a new luxury condominium in South Brickell, designed by Revuelta Architecture and featuring interior design by ODA New York.",
                    "These 1 to 4 bedroom luxury residences offer spectacular finishes, high-end appliances, floor-to-ceiling glass windows, assigned parking on same floor, and much more.",
                    "Residents at 2200 Brickell enjoy amenities such as a resort-style pool with outdoor spa and poolside cabanas, pickleball court, summer kitchen, outdoor fitness area, children's play area, a quarter-mile walking track, and more.",
                ],
            },
            labaia: {
                titulo: "La Baia",
                subtitulo: "Waterfront Elegance",
                introduccion: [
                    "La Baia offers 57 luxury residences in Bay Harbor Islands with spectacular views of Biscayne Bay and the Atlantic Ocean.",
                    "Each residence features 9 to 10-foot high ceilings, private terraces, imported wood flooring and marble finishes.",
                    "Enjoy an exclusive lifestyle with luxury amenities and a prime location.",
                ],
            },
            elleResidences: {
                titulo: "Elle Residences",
                subtitulo: "The New Home of High Style",
                introduccion: [
                    "Live on the runway of Miami's design, fashion and culture districts at ELLE Residences, inspired by 80 years of trend-setting fashion and decor.",
                    "Elle Residences Miami is a collection of 180 elegant residences with no rental restrictions. Its interior design features a nod to the magazine's Parisian roots.",
                    "Exclusive design by Behar Font & Partners and refined interiors by The One Atelier come together to offer an exquisite collection of homes in the Edgewater area.",
                ],
                direccion: "3618 NE 5th Ave, Miami, FL 33137, United States",
                caracteristicas: {
                    residencias: {
                        descripcion: "Acquire your own floor in the heart of Miami. Inspired by the pages of ELLE Decor, the residences combine mid-century modern style and contemporary French style with a touch of tropical luxury.",
                        planos: "Well-thought-out floor plans with high ceilings and water and horizon views.",
                        suites: "Grande Suites on the upper floor with 11-foot ceilings",
                        ventanas: "Impact-resistant floor-to-ceiling windows and doors",
                        cocinas: "Elegant kitchens with Miele appliance package",
                        muebles: "Italian furniture and carpentry imported from Italkraft",
                        encimeras: "Exquisite quartz countertops",
                        suelos: "French-inspired chevron pattern wood flooring",
                        accesorios: "Modern brass accessories and finishes",
                    },
                },
            },
            ariaReserve: {
                titulo: "Aria Reserve",
                subtitulo: "Uncompromising Luxury",
                introduccion: [
                    "Aria Reserve presents ultra-luxury residences with panoramic bay and city views.",
                    "Designed by the most prestigious architects, every detail reflects elegance and sophistication.",
                    "Enjoy world-class amenities and an unbeatable location in Edgewater.",
                ],
            },
            ella: {
                titulo: "Ella Miami Beach",
                subtitulo: "A Tribute To Miami Beach's Glamorous Past",
                introduccion: [
                    "Ella, a tribute to the splendid history of Miami Beach, combines vintage elegance with contemporary lines, creating a moving atmosphere that captures the spirit of Miami Beach.",
                    "Meticulously designed, Ella offers exceptional living experiences, meeting the highest standards of contemporary sophistication.",
                    "Ella sets a new standard for Miami residential developments with short-term rentals. The renowned firm Arquitectonica developed a bold and modern aesthetic.",
                ],
                direccion: "6940 Abbot Avenue, Miami Beach, FL 33141",
                caracteristicas: {
                    edificio: {
                        pisos: "95 residences",
                        unidades: "1 to 2 bedroom apartments",
                        constructora: "Constellation",
                        finalizacion: "2026",
                    },
                    residencias: {
                        vistas: "Ocean / bay views",
                        proximidad: "Beach proximity",
                        techos: "Approximately 9' + ceiling heights",
                        lavanderia: "Washer/dryer in apartment",
                        terrazas: "Terraces with outlets",
                        alquileres: "Short-term rentals allowed",
                        cocinas: "ItalKraft kitchens",
                        electrodomesticos: "Jennair appliance package, 30\" induction stove, 24 to 36\" refrigerators",
                        armarios: "Designer closets",
                        encimeras: "Stone countertops",
                    },
                },
            },
            astonMartin: {
                titulo: "Aston Martin Residences",
                subtitulo: "Automotive Luxury Redefined",
                introduccion: [
                    "Aston Martin Residences brings the legendary craftsmanship of Aston Martin to the heart of Miami.",
                    "391 luxury residences with stunning views of the bay and city.",
                    "Experience the epitome of urban luxury with world-class amenities and sophisticated design.",
                ],
                direccion: "300 Biscayne Boulevard Way",
                caracteristicas: {
                    edificio: {
                        ubicacion: "300 Biscayne Boulevard Way",
                        residencias: "391 Residences in Condominium",
                        diseno: "Designed by Aston Martin",
                    },
                },
            },
            domusBrickellCenter: {
                titulo: "Domus Brickell Center",
                subtitulo: "The height of luxury in the heart of Brickell",
                introduccion: [
                    "Domus Brickell Center is a contemporary residential development offering stylish, fully-furnished studios, one, and two-bedroom apartments equipped with hotel-like amenities and flexible ownership, perfectly located in Miami’s vibrant Brickell neighborhood. This 35-story tower features 579 residences designed by MC+G Architecture and developed by North Development, an alliance between Edifica (Peru) and Oak Capital (Miami).",
                    "Domus Brickell Center redefines Miami living by combining luxury, location, and style under one roof. It provides a unique blend of hotel-style amenities with the privacy and convenience of a personal residence. It’s an ideal opportunity for local buyers, international investors, and digital nomads seeking a modern, flexible space with high yield potential and professional management.",
                ],
                direccion: "1034 SW 2nd Ave, Miami FL 33130",
                ubicacion: "1034 SW 2nd Ave, Miami FL 33130",
                caracteristicas: {
                    amenidades: {
                        descripcion: "Domus Brickell Center offers unique amenities to cater to its residents' needs, such as a rooftop pool, bar, grilling area, lounge, 1,540-square-foot ground floor food and beverage, spacious lobby with approximately 4,000 square feet of meeting space, surround sound speakers and ambient music, pet-friendly building, EV charging stations, Domus bike sharing, specialized air filtration system in all common areas and more...",
                        salonVestibulo: "The Cypress Room lobby lounge",
                        cafe: "Barista café and bakery",
                        vinos: "Wine bar with covered terrace",
                        mercado: "Artisanal market",
                        patio: "Outdoor patio in a covered garden",
                        gimnasio: "State-of-the-art fitness center",
                        piscinaAzotea: "Rooftop pool with panoramic city and bay views",
                        cabanas: "Cabanas with day beds",
                        jacuzzi: "Hot tub",
                        yoga: "Rooftop yoga space",
                        barAzotea: "Rooftop bar",
                        coworking: "Ample coworking space",
                        reuniones: "Meeting/conference room",
                        bienvenida: "24-hour welcome room",
                        valet: "24-hour valet service",
                        atencion: "24-hour customer service line",
                        operador: "Experienced hotel operator to oversee unit management",
                        limpieza: "Experienced housekeeping team",
                        hoteleria: "in hospitality",
                        portal: "Rental portal for owners",
                    },
                    residencias: {
                        descripcion: "All luxury residences at Domus Brickell Center include spacious floor plans, 9+ foot ceilings, wind-impact resistant windows, balconies, sleek kitchen cabinetry, stainless steel kitchen appliances, UV-filtered water and more! Enjoy spectacular views of the luxurious Brickell and Downtown buildings and the entire Miami skyline.",
                        terminados: "Delivered fully finished and furnished. Private balcony in all apartments",
                        cerradura: "Smart lock system with keyless entry",
                        cocinaEquipada: "Kitchen equipped with Bosch appliances",
                        accesorios: "Modern fixtures",
                        cubiertas: "Quartz countertops",
                        lavadora: "Washer/Dryer",
                        aguaFiltrada: "UV-filtered water in all apartments",
                    },
                    edificio: {
                        ubicacion: "Location",
                        pisos: "Floors",
                        pisosCount: "35",
                        residencias: "Number of Residences",
                        residenciasCount: "579",
                        tiposResidencias: "Types of Residences",
                        tiposResidenciasDesc: "Studios, 1 & 2 bedrooms",
                        finalizacion: "Year of Construction Completion",
                        finalizacionYear: "2027",
                        techos: "9+ foot ceilings in all apartments",
                        vestibuloAmplio: "Spacious lobby with approximately 4,200 square feet of meeting space and high floor-to-ceiling windows",
                        altavoces: "Speakers with ambient music in the Cypress Room",
                        petFriendly: "Pet Friendly",
                        ventanas: "Wind-impact resistant windows",
                        estaciones: "Electric vehicle charging stations",
                        bicicletas: "Bicycles for resident use",
                        aire: "Filtered air conditioning in all common areas",
                    },
                },
            },
            "viceroy-brickell": {
                titulo: "Viceroy Brickell",
                introduccion: [
                    "Viceroy Residences Brickell is a luxury tower in Brickell with impressive views and premium amenities."
                ],
                direccion: "77 SE 5th St, Miami, FL 33131, USA",
                banner: "true",
                numberOfImages: "35",
                caracteristicas: {
                    edificio: {
                        direccionLabel: "Address",
                        añoLabel: "Year of Construction / Completion",
                        pisosLabel: "Number of Floors",
                        unidadesLabel: "Number of Units",
                        tipoLabel: "Type of Units",
                        cuartosLabel: "Number of Rooms",
                    },
                    residencias: {
                        p1: "Collection of tower residences topped by penthouses.",
                        p2: "Floor plans offering studios and 1–3 bedroom residences."
                    },
                    amenidades: {
                        p1: "Prime location at One Brickell with direct access to the riverwalk.",
                        p2: "Resort-style terrace and wellness facilities."
                    }
                }
            },
            cipriani: {
                titulo: "Cipriani Residences",
                introduccion: ["Brilliantly designed by Arquitectonica and 1508 London, these elegant residences offer Cipriani-level service and luxury."],
                banner: "true",
                numberOfImages: "14",
                caracteristicas: {
                    edificio: {
                        p1: "A distinctive addition to the Brickell skyline.",
                        li1: "An elegant 80-story tower with cascading curved glass facade",
                        li2: "A collection of residences including exceptional penthouses",
                        li3: "Dining services exclusively for Cipriani residents",
                        li4: "Panoramic views of Biscayne Bay and Brickell skyline",
                    },
                    residencias: {
                        li1: "Spacious living rooms with 10-foot ceilings",
                        li2: "Floor-to-ceiling sliding glass doors",
                        li3: "Terrace access from living room and master bedroom",
                        li4: "Elegant walk-in closets in each master bedroom"
                    },
                    amenidades: {
                        li1: "Private porte cochere with lush gardens",
                        li2: "Impressive lobby and high-speed elevators",
                        li3: "Private dining experiences by Cipriani"
                    }
                }
            },
            lofty: {
                titulo: "Lofty Residences Brickell",
                introduccion: ["Lofty Residences is a 43-story condominium setting a new standard of cosmopolitan living in Brickell."],
                slogan: "A New Standard of Cosmopolitan Living in Brickell",
                banner: "true",
                numberOfImages: "55",
                caracteristicas: {
                    residencias: {
                        title: "The Residences",
                        li1: "Urban luxury residences with modern open layouts from 485SF — 930 SF",
                        li2: "Fully finished and specially furnished residences",
                        li3: "Panoramic views of the Miami River and skyline"
                    },
                    edificio: {
                        li1: "Short-term rentals permitted by right",
                        li2: "Two-story lobby with floor-to-ceiling windows",
                        li3: "24/7 valet service"
                    },
                    amenidades: {
                        li1: "Resort-style pool with cabanas",
                        li2: "Pool terrace grill and bar",
                        li3: "Coworking lounge"
                    }
                }
            },
            "1428-brickell": {
                titulo: "The Residences at 1428 Brickell",
                introduccion: ["The Residences at 1428 Brickell was carefully planned to deliver amenities and privacy to every resident."],
                slogan: "Your life. Your way.",
                banner: "true",
                numberOfImages: "39"
            },
            "14-river-district": {
                titulo: "14 River District",
                introduccion: ["River District 14 offers a complete waterfront lifestyle along the Miami River and Biscayne Bay."],
                direccion: "1420 NW 14th Ave, Miami, FL 33125, USA",
                numberOfImages: "27",
                banner: "true"
            },
            "888-brickell-dolce-and-gabbana-residences": {
                titulo: "888 Brickell Dolce & Gabbana Residences",
                introduccion: ["888 Brickell by Dolce & Gabbana redefines Italian luxury with branded residences and hotel in Miami."],
                banner: "true",
                numberOfImages: "21",
                numberOfFloors: "90",
                numberOfUnits: "259",
                direccion: "888 Brickell Ave, Miami, FL 33131, USA"
            },
            "mercedes-benz-places-miami": {
                titulo: "Mercedes-Benz Places Miami",
                introduccion: ["Mercedes-Benz Places Miami offers design-forward residences with integrated technology and premium amenities."],
                slogan: "Miami, Living, Elevated",
                nombre: "mercedes-benz-places-miami",
                banner: "true",
                numberOfImages: "17"
            },
            ora: {
                titulo: "Ora by Casa Tua",
                introduccion: ["ORA by Casa Tua delivers flexible ownership residences in Brickell with Italian design and hospitality-led services."],
                slogan: "Residences with Soul in the Heart of Miami",
                banner: "true",
                numberOfImages: "14",
                video: "https://player.vimeo.com/video/806352821?autoplay=true"
            },
        },
        footer: {
            contact: "Get in touch",
            address: "Doral, FL",
        },
    },
};

interface I18nContextValue {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (path: string, fallback?: string | null) => string | string[] | null;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function TranslationProvider({children, defaultLang = "es" as Lang}: {
    children: ReactNode;
    defaultLang?: Lang
}) {
    const initial = ((): Lang => {
        try {
            const saved = localStorage.getItem("scattolini_lang");
            if (saved === "en" || saved === "es") return saved;
        } catch (e) {
            /* ignore */
        }
        return defaultLang;
    })();

    const [lang, setLangState] = useState<Lang>(initial);

    useEffect(() => {
        try {
            localStorage.setItem("scattolini_lang", lang);
        } catch (e) {
            // ignore
        }
        // update document lang attribute for SEO/accessibility
        try {
            document.documentElement.lang = lang;
        } catch (e) {
            // ignore (SSR or unavailable)
        }
    }, [lang]);

    const t = useMemo(() => {
        return (path: string, fallback?: string | null): string | string[] | null => {
            const keys = path.split(".");
            let cur: any = translations[lang];
            for (const k of keys) {
                if (cur && typeof cur === "object" && k in cur) {
                    cur = cur[k];
                } else {
                    return fallback !== undefined ? (fallback as string) : path;
                }
            }
            if (cur === null) return null;
            return (typeof cur === "string" || Array.isArray(cur)) ? cur : (fallback !== undefined ? (fallback as string) : path);
        };
    }, [lang]);

    const setLang = (l: Lang) => setLangState(l);
    const value = useMemo(() => ({lang, setLang, t}), [lang, t]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function getTranslation(path: string, lang: Lang, fallback?: string | null): string | string[] | null {
    const keys = path.split(".");
    let cur: any = translations[lang];
    for (const k of keys) {
        if (cur && typeof cur === "object" && k in cur) {
            cur = cur[k];
        } else {
            return fallback !== undefined ? (fallback as string) : path;
        }
    }
    if (cur === null) return null;
    return (typeof cur === "string" || Array.isArray(cur)) ? cur : (fallback !== undefined ? (fallback as string) : path);
}

export function useTranslation() {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error("useTranslation must be used within TranslationProvider");
    }
    return {t: ctx.t, lang: ctx.lang, setLang: ctx.setLang};
}

export function getDesarrolloData(desarrolloKey: string, lang: Lang) {
    const desarrolloData = translations[lang].desarrollos?.[desarrolloKey];
    return desarrolloData || null;
}
