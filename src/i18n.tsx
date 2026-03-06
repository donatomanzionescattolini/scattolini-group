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
            servicios: "Servicios",
            quotes: "Testimonios",
            equipo: "Nuestro Equipo",
            search: "Buscar",
            toggleNavigation: "Alternar navegación",
            logoAlt: "Logo de Scattolini Group",
            switchToSpanish: "Cambiar a español",
            switchToEnglish: "Cambiar a inglés",
        },
        navComponent: {
            brand: "Scattolini Group",
            home: "Inicio",
            link: "Enlace",
            dropdown: "Opciones",
            action: "Acción",
            anotherAction: "Otra acción",
            somethingElse: "Algo más",
            disabled: "Deshabilitado",
            searchPlaceholder: "Buscar",
            searchButton: "Buscar",
        },
        hero: {
            title: "SCATTOLINI GROUP",
            subtitle: "Agencia Inmobiliaria",
            cta: "Contáctanos Hoy",
        },
        pages: {
            areas: {
                title: "Áreas",
                photoAlt: "Foto del área",
                orlando: {
                    titulo: "Orlando",
                    slogan: "The City Beautiful",
                    descripcion: [
                        "Orlando se ha consolidado como una de las ciudades más dinámicas y prometedoras de Florida, ideal tanto para quienes buscan un nuevo hogar como para quienes desean invertir estratégicamente en bienes raíces. Su crecimiento económico sostenido, la llegada constante de nuevas empresas y su calidad de vida —marcada por seguridad, áreas verdes y una oferta cultural en expansión— la convierten en una alternativa atractiva frente a los mercados más saturados del sur del estado. Además, su infraestructura moderna y su ubicación estratégica en el centro de Florida facilitan la conexión con el resto del país y con destinos internacionales.",
                        "Para los inversionistas, Orlando ofrece un mercado inmobiliario con alta demanda de alquileres a largo y corto plazo, impulsado por su industria turística de clase mundial y por un flujo continuo de nuevos residentes. La combinación de precios competitivos, apreciación constante y un entorno favorable para negocios crea un escenario ideal para maximizar el retorno de inversión. En resumen, Orlando representa una oportunidad sólida y versátil, perfecta para quienes buscan estabilidad, crecimiento y un estilo de vida excepcional."
                    ]
                }
            },
            aliados: {
                hueHouseAlt: "Logo de Hue House",
                manzioneDesignAlt: "Logo de Manzione Design",
                manzionePropertiesAlt: "Logo de Manzione Properties",
                hardwoodRetimacaAlt: "Logo de Hardwood Retimaca",
                manzioneScattoliniAlt: "Logo de Manzione Scattolini Interior Design",
            },
            desarrollos: {
                title: "Desarrollos",
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
            liderazgo: {
                title: "Equipo de expertos, servicio personalizado",
                paragraph1: "Scattolini Group está dirigido por Elda Scattolini, una agente de bienes raíces con 20 años de experiencia en el mercado del sur de Florida. Elda ha ayudado a cientos de clientes de diferentes partes del mundo a alcanzar sus objetivos inmobiliarios, con profesionalismo, integridad y dedicación.",
                paragraph2: "Elda y su equipo de agentes son expertos en el área del sur de Florida, con un amplio conocimiento de los vecindarios, las escuelas, las comodidades y las tendencias del mercado. Te guiarán en cada paso del proceso, desde encontrar la propiedad adecuada hasta negociar el mejor precio y cerrar el trato de manera eficiente y sin contratiempos.",
            },
            auth: {
                login: {
                    title: "Iniciar sesión",
                    subtitle: "Panel de administración",
                    emailLabel: "Correo electrónico",
                    passwordLabel: "Contraseña",
                    submit: "Iniciar sesión",
                    loading: "Iniciando sesión...",
                    errors: {
                        missingFields: "Por favor, ingrese email y contraseña",
                        invalidCredentials: "Email o contraseña incorrectos",
                        generic: "Error al iniciar sesión. Por favor, intente de nuevo.",
                    },
                },
            },
            editor: {
                title: "Panel de administración",
                signedInAs: "Sesión iniciada como",
                logout: "Cerrar sesión",
                edit: "Editar",
                backToList: "Volver a la lista",
                selectDesarrollo: "Seleccione un desarrollo para editar",
                selectArea: "Seleccione un área para editar",
                areaLabel: "Área",
                reviewTitle: "Revisión de cambios",
                addDesarrollo: "Agregar desarrollo",
                createDesarrollo: "Crear desarrollo",
                tabs: {
                    desarrollos: "Desarrollos",
                    areas: "Áreas",
                },
                messages: {
                    desarrolloSaved: "Desarrollo guardado exitosamente",
                    desarrolloSaveError: "Error al guardar el desarrollo",
                    areaSaved: "Área guardada exitosamente",
                    areaSaveError: "Error al guardar el área",
                },
                wizard: {
                    desarrollo: {
                        basic: "Información básica",
                        details: "Detalles",
                        features: "Características",
                        media: "Multimedia (S3)",
                        mediaUpload: "Recursos multimedia del proyecto",
                        mediaInfo: "Subir archivos a S3. Serán accesibles en:",
                        images: "Imágenes (Galería)",
                        imagesHelp: "Subir a: /image-gallery/image (1).jpg, etc.",
                        pdfs: "PDFs (Folletos/Planos)",
                        pdfsHelp: "Subir a: /pdfs/",
                        video: "Video",
                        videoHelp: "Subir a: /video.mp4",
                        uploadBtn: "Subir a S3",
                    },
                    area: {
                        basic: "Información básica",
                        description: "Descripción",
                    },
                    review: "Revisión",
                },
                fields: {
                    nombre: "Identificador (nombre)",
                    titulo: "Título",
                    slogan: "Slogan",
                    areaName: "Área",
                    introduccion: "Introducción",
                    ubicacion: "Ubicación",
                    "ubicación": "Ubicación",
                    numberOfUnits: "Número de unidades",
                    numberOfFloors: "Número de pisos",
                    estimatedCompletionYear: "Año estimado de finalización",
                    name: "Nombre",
                    descripcion: "Descripción",
                },
                selectAreaPlaceholder: "-- Seleccione un área --",
                areaHelp: "Seleccione el área donde se encuentra este desarrollo",
            },
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
                imageAlt: "Imagen de administración de propiedades",
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
                bannerAlt: "Banner del proyecto",
                galleryImageAlt: "Imagen de galería del proyecto",
                caracteristicas: "Características",
                edificio: "Edificio",
                residencias: "Residencias",
                amenidades: "Amenidades",
                galeria: "Galería Fotográfica",
                locatedIn: "Ubicado en",
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
                        parque: "Parque infantil: un espacio divertido y seguro para que los niños prueben.",
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
                slogan: "Un Santuario Urbano en el Corazón de Brickell",
                direccion: "2200 Brickell Ave, Miami, FL",
                typeOfUnits: "Residencias de 1 a 4 habitaciones",
                introduccion: [
                    "2200 Brickell is a new condominio de lujo in South Brickell, diseñado por Revuelta Architecture y con diseño interior de ODA New York.",
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
            cassia: {
                titulo: "Cassia",
                slogan: "A New Era of Classic Luxury",
                direccion: "Merrick Park District, Coral Gables",
                typeOfUnits: "1, 2 & 3 Bedrooms",
                caracteristicas: {
                    edificio: {
                        direccion: "Address",
                        pisos: "Number of Floors",
                        unidades: "Number of Units",
                        desarrollador: "Developer",
                        espacioAmenidades: "Amenity Space",
                        espacioAmenidadesValor: "Over 1 hectare of indoor and outdoor facilities",
                    },
                    residencias: {
                        muebles: "Fully furnished with RH",
                        cocina: "Italian kitchens with Bosch appliances",
                        ventanas: "Floor-to-ceiling windows",
                        tech: "Smart thermostats and TVs included",
                        pisos: "Elegant imported large-format flooring",
                        persianas: "Blackout blinds in bedrooms and living rooms",
                        armarios: "Custom closets in master bedroom",
                        armariosSeguridad: "Lockable closets for owners",
                        backsplash: "Stunning backsplashes and elegant surfaces",
                        gabinetes: "Imported soft-close cabinets",
                    },
                    amenidades: {
                        spa: {
                            titulo: "SPA",
                            piscina: "Indoor pool",
                            loungeRelax: "Relaxation lounge",
                            vapor: "Steam room",
                            sauna: "Sauna",
                            masajes: "Massage and treatment cabins",
                            banosDobles: "Spa baths for two",
                            lockers: "Fully equipped lockers and showers",
                            vestidores: "Dressing rooms",
                        },
                        fitness: {
                            titulo: "State-of-the-Art Fitness Center",
                            gym: "Fully equipped gym",
                            yoga: "Yoga / Barre fitness studio",
                            tech: "On-demand technology",
                            equipamiento: "Cardio and strength training equipment",
                            autoservicio: "24-hour self-service",
                        },
                        piscina: {
                            titulo: "Resort-Style Elevated Pool",
                            temperada: "Heated pool",
                            cabinas: "Cabanas",
                            espacioRelax: "Relaxation space",
                            reposeras: "Lounge chairs",
                            quincho: "BBQ/grill area",
                            comedorExterior: "Outdoor dining areas",
                            meson: "Bar and indoor dining",
                            lounge: "Tropical-style poolside lounge",
                            cocinaPrivada: "Private kitchen and dining for celebrations",
                            loungeAmplio: "Spacious lounge area",
                            entretenimiento: "Entertainment center",
                            paisajismo: "Serene landscaping with lush vegetation",
                        },
                        negocios: {
                            titulo: "Business Center",
                            coworking: "Co-working Lounge",
                            salaReuniones: "Meeting room",
                            zoom: "Zoom offices",
                            proyecciones: "Screening room",
                        },
                        lobby: {
                            titulo: "Grand Lobby",
                            cieloDoble: "Stunning double-height ceiling",
                            espacios: "Sophisticated spaces",
                        },
                    },
                },
                introduccion: [
                    "Discover a new dimension of luxury, where versatility meets refinement. Cassia brings a fresh perspective to the exclusive Coral Gables lifestyle, offering turnkey residences fully furnished by RH. Enjoy the flexibility to rent your home while traveling or keep it for your exclusive personal use.",
                    "Following George Merrick's vision, who founded Coral Gables with pink sidewalks, vibrant gardens, and stunning architecture, Cassia proudly arrives with its 174 residences. Spacious one, two, and three-bedroom apartments, fully furnished with RH, offer a perfect fusion of comfort and elegance and are ready to be inhabited immediately. A captivating address in the center of the Merrick Park District, in the heart of Coral Gables, surrounded by beautiful gardens and selected art pieces.",
                ],
                propiedadFlexible: "Enjoy the flexibility to rent your home when you're away or keep it exclusively for your personal use.",
            },
            "windsor-cay-resort": {
                titulo: "Windsor Cay Resort",
                slogan: "Casas vacacionales diseñadas para la vida estilo resort y una sólida proyección de alquiler",
                introduccion: [
                    "Windsor Cay Resort ofrece casas vacacionales en Orlando diseñadas para combinar estilo de resort, comodidad familiar y un fuerte atractivo para alquileres vacacionales.",
                    "La comunidad reúne amenidades en el lugar, seguridad 24 horas y ubicaciones pensadas para aprovechar al máximo la cercanía a las atracciones más reconocidas de la zona."
                ],
                caracteristicas: {
                    edificio: {
                        resort: "Amenidades del resort en el lugar",
                        marca: "Reconocimiento de marca internacional",
                        seguridad: "Comunidad cerrada con vigilancia 24 horas",
                        atracciones: "A minutos de atracciones de clase mundial",
                        planos: "Planos diseñados para maximizar alquileres y retornos"
                    },
                    residencias: {
                        titulo: "Características principales de la casa",
                        techo: "Techo de tejas",
                        piscina: "Piscina privada climatizada",
                        hab567: "5, 6 y 7 habitaciones con piscina de 12' x 24'",
                        hab8910: "8, 9 y 10 habitaciones con piscina de 12' x 26'",
                        townhomes: "Townhomes con piscina de 7.5' x 18'",
                        entradas: "Entradas y terrazas de piscina con adoquines de ladrillo",
                        electrodomesticos: "Electrodomésticos de acero inoxidable",
                        closet: "Closet de almacenamiento para propietarios",
                        granito: "Granito y azulejos en todas las cocinas y baños",
                        persianas: "Persianas incluidas",
                        lanai: "Lanai cubierto con cerca de seguridad para niños",
                        lavadora: "Lavadora y secadora"
                    },
                    hoa: {
                        titulo: "La asociación de propietarios incluye:",
                        jardineria: "Mantenimiento completo de jardinería incluyendo riego de césped",
                        internet: "Internet de alta velocidad y TV por cable",
                        basura: "Recolección diaria de basura"
                    }
                }
            },
        },
        common: {
            loading: "Cargando...",
            videoNotSupported: "Tu navegador no soporta el video.",
            videoUnsupported: "Tu navegador no soporta el video.",
            next: "Siguiente",
            previous: "Anterior",
            page: "Página",
            of: "de",
            cancel: "Cancelar",
            saving: "Guardando...",
            saveChanges: "Guardar cambios",
            na: "N/A",
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
            servicios: "Services",
            quotes: "Testimonials",
            equipo: "Our Team",
            search: "Search",
            toggleNavigation: "Toggle navigation",
            logoAlt: "Scattolini Group logo",
            switchToSpanish: "Switch to Spanish",
            switchToEnglish: "Switch to English",
        },
        navComponent: {
            brand: "Scattolini Group",
            home: "Home",
            link: "Link",
            dropdown: "Dropdown",
            action: "Action",
            anotherAction: "Another action",
            somethingElse: "Something else",
            disabled: "Disabled",
            searchPlaceholder: "Search",
            searchButton: "Search",
        },
        hero: {
            title: "SCATTOLINI GROUP",
            subtitle: "Real Estate Agency",
            cta: "Contact Us Today",
        },
        pages: {
            areas: {
                title: "Areas",
                photoAlt: "Area photo",
                orlando: {
                    titulo: "Orlando",
                    slogan: "The City Beautiful",
                    descripcion: [
                        "Orlando has established itself as one of Florida's most dynamic and promising cities, ideal for both those seeking a new home and those looking to invest strategically in real estate. Its sustained economic growth, the constant arrival of new companies, and its quality of life—marked by safety, green spaces, and an expanding cultural offering—make it an attractive alternative to the more saturated markets in the southern part of the state. Additionally, its modern infrastructure and strategic location in central Florida facilitate connections with the rest of the country and international destinations.",
                        "For investors, Orlando offers a real estate market with high demand for long and short-term rentals, driven by its world-class tourism industry and a continuous flow of new residents. The combination of competitive prices, constant appreciation, and a business-friendly environment creates an ideal scenario to maximize return on investment. In summary, Orlando represents a solid and versatile opportunity, perfect for those seeking stability, growth, and an exceptional lifestyle."
                    ]
                }
            },
            aliados: {
                hueHouseAlt: "Hue House logo",
                manzioneDesignAlt: "Manzione Design logo",
                manzionePropertiesAlt: "Manzione Properties logo",
                hardwoodRetimacaAlt: "Hardwood Retimaca logo",
                manzioneScattoliniAlt: "Manzione Scattolini Interior Design logo",
            },
            desarrollos: {
                title: "Developments",
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
            liderazgo: {
                title: "Expert team, personalized service",
                paragraph1: "Scattolini Group is led by Elda Scattolini, a real estate agent with 20 years of experience in the South Florida market. Elda has helped hundreds of clients from around the world reach their real estate goals with professionalism, integrity, and dedication.",
                paragraph2: "Elda and her team are experts in South Florida, with deep knowledge of neighborhoods, schools, amenities, and market trends. They will guide you through every step of the process, from finding the right property to negotiating the best price and closing efficiently.",
            },
            auth: {
                login: {
                    title: "Sign in",
                    subtitle: "Admin panel",
                    emailLabel: "Email",
                    passwordLabel: "Password",
                    submit: "Sign in",
                    loading: "Signing in...",
                    errors: {
                        missingFields: "Please enter email and password",
                        invalidCredentials: "Incorrect email or password",
                        generic: "Error signing in. Please try again.",
                    },
                },
            },
            editor: {
                title: "Admin panel",
                signedInAs: "Signed in as",
                logout: "Sign out",
                edit: "Edit",
                backToList: "Back to list",
                selectDesarrollo: "Select a development to edit",
                selectArea: "Select an area to edit",
                areaLabel: "Area",
                reviewTitle: "Review changes",
                addDesarrollo: "Add development",
                createDesarrollo: "Create development",
                tabs: {
                    desarrollos: "Developments",
                    areas: "Areas",
                },
                messages: {
                    desarrolloSaved: "Development saved successfully",
                    desarrolloSaveError: "Error saving development",
                    areaSaved: "Area saved successfully",
                    areaSaveError: "Error saving area",
                },
                wizard: {
                    desarrollo: {
                        basic: "Basic info",
                        details: "Details",
                        features: "Features",
                        media: "Media (S3)",
                        mediaUpload: "Project Media Assets",
                        mediaInfo: "Upload files to S3. They will be accessible at:",
                        images: "Images (Gallery)",
                        imagesHelp: "Upload to: /image-gallery/image (1).jpg, etc.",
                        pdfs: "PDFs (Brochures/Floorplans)",
                        pdfsHelp: "Upload to: /pdfs/",
                        video: "Video",
                        videoHelp: "Upload to: /video.mp4",
                        uploadBtn: "Upload to S3",
                    },
                    area: {
                        basic: "Basic info",
                        description: "Description",
                    },
                    review: "Review",
                },
                fields: {
                    nombre: "Identifier (name)",
                    titulo: "Title",
                    slogan: "Slogan",
                    areaName: "Area",
                    introduccion: "Introduction",
                    ubicacion: "Location",
                    "ubicación": "Location",
                    numberOfUnits: "Number of units",
                    numberOfFloors: "Number of floors",
                    estimatedCompletionYear: "Estimated completion year",
                    name: "Name",
                    descripcion: "Description",
                },
                selectAreaPlaceholder: "-- Select an area --",
                areaHelp: "Select the area where this development is located",
            },
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
                descripcion: "In our company, we specialize in property management. We ensure that each property is well cared for and maintained, and we take care of all the details so that our clients can enjoy the peace of mind of knowing their property is in good hands.",
                imageAlt: "Property management image",
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
                bannerAlt: "Project banner",
                galleryImageAlt: "Project gallery image",
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
                slogan: "An Urban Sanctuary in the Heart of Brickell",
                direccion: "2200 Brickell Ave, Miami, FL",
                typeOfUnits: "1 to 4 bedroom residences",
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
                direccion: "3618 NE 5th Ave, Miami, FL 33137, Estados Unidos",
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
                        pisos: "95 residencias",
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
            cassia: {
                titulo: "Cassia",
                slogan: "A New Era of Classic Luxury",
                direccion: "Merrick Park District, Coral Gables",
                typeOfUnits: "1, 2 & 3 Bedrooms",
                caracteristicas: {
                    edificio: {
                        direccion: "Address",
                        pisos: "Number of Floors",
                        unidades: "Number of Units",
                        desarrollador: "Developer",
                        espacioAmenidades: "Amenity Space",
                        espacioAmenidadesValor: "Over 1 hectare of indoor and outdoor facilities",
                    },
                    residencias: {
                        muebles: "Fully furnished with RH",
                        cocina: "Italian kitchens with Bosch appliances",
                        ventanas: "Floor-to-ceiling windows",
                        tech: "Smart thermostats and TVs included",
                        pisos: "Elegant imported large-format flooring",
                        persianas: "Blackout blinds in bedrooms and living rooms",
                        armarios: "Custom closets in master bedroom",
                        armariosSeguridad: "Lockable closets for owners",
                        backsplash: "Stunning backsplashes and elegant surfaces",
                        gabinetes: "Imported soft-close cabinets",
                    },
                    amenidades: {
                        spa: {
                            titulo: "SPA",
                            piscina: "Indoor pool",
                            loungeRelax: "Relaxation lounge",
                            vapor: "Steam room",
                            sauna: "Sauna",
                            masajes: "Massage and treatment cabins",
                            banosDobles: "Spa baths for two",
                            lockers: "Fully equipped lockers and showers",
                            vestidores: "Dressing rooms",
                        },
                        fitness: {
                            titulo: "State-of-the-Art Fitness Center",
                            gym: "Fully equipped gym",
                            yoga: "Yoga / Barre fitness studio",
                            tech: "On-demand technology",
                            equipamiento: "Cardio and strength training equipment",
                            autoservicio: "24-hour self-service",
                        },
                        piscina: {
                            titulo: "Resort-Style Elevated Pool",
                            temperada: "Heated pool",
                            cabinas: "Cabanas",
                            espacioRelax: "Relaxation space",
                            reposeras: "Lounge chairs",
                            quincho: "BBQ/grill area",
                            comedorExterior: "Outdoor dining areas",
                            meson: "Bar and indoor dining",
                            lounge: "Tropical-style poolside lounge",
                            cocinaPrivada: "Private kitchen and dining for celebrations",
                            loungeAmplio: "Spacious lounge area",
                            entretenimiento: "Entertainment center",
                            paisajismo: "Serene landscaping with lush vegetation",
                        },
                        negocios: {
                            titulo: "Business Center",
                            coworking: "Co-working Lounge",
                            salaReuniones: "Meeting room",
                            zoom: "Zoom offices",
                            proyecciones: "Screening room",
                        },
                        lobby: {
                            titulo: "Grand Lobby",
                            cieloDoble: "Stunning double-height ceiling",
                            espacios: "Sophisticated spaces",
                        },
                    },
                },
                introduccion: [
                    "Discover a new dimension of luxury, where versatility meets refinement. Cassia brings a fresh perspective to the exclusive Coral Gables lifestyle, offering turnkey residences fully furnished by RH. Enjoy the flexibility to rent your home while traveling or keep it for your exclusive personal use.",
                    "Following George Merrick's vision, who founded Coral Gables with pink sidewalks, vibrant gardens, and stunning architecture, Cassia proudly arrives with its 174 residences. Spacious one, two, and three-bedroom apartments, fully furnished with RH, offer a perfect fusion of comfort and elegance and are ready to be inhabited immediately. A captivating address in the center of the Merrick Park District, in the heart of Coral Gables, surrounded by beautiful gardens and selected art pieces.",
                ],
                propiedadFlexible: "Enjoy the flexibility to rent your home when you're away or keep it exclusively for your personal use.",
            },
            "windsor-cay-resort": {
                titulo: "Windsor Cay Resort",
                slogan: "Vacation homes designed for resort living and strong rental appeal",
                introduccion: [
                    "Windsor Cay Resort offers vacation homes in Orlando designed to combine resort-style living, family comfort, and strong short-term rental appeal.",
                    "The community brings together on-site resort amenities, 24-hour gated security, and a location planned to make the most of its proximity to the area's best-known attractions."
                ],
                caracteristicas: {
                    edificio: {
                        resort: "Resort amenities on site",
                        marca: "International brand recognition",
                        seguridad: "24-hour manned gated community",
                        atracciones: "Minutes from world-class attractions",
                        planos: "Floor plans designed to maximize rentals and returns"
                    },
                    residencias: {
                        titulo: "Key home features",
                        techo: "Shingle roof",
                        piscina: "Private heated pool",
                        hab567: "5, 6, and 7 bedrooms with a 12' x 24' pool",
                        hab8910: "8, 9, and 10 bedrooms with a 12' x 26' pool",
                        townhomes: "Townhomes with a 7.5' x 18' pool",
                        entradas: "Brick paver driveways and pool decks",
                        electrodomesticos: "Stainless steel appliances",
                        closet: "Owner storage closet",
                        granito: "Granite and tile throughout kitchens and all bathrooms",
                        persianas: "Blinds included",
                        lanai: "Covered lanai with child safety fence",
                        lavadora: "Washer and dryer"
                    },
                    hoa: {
                        titulo: "Homeowners association includes:",
                        jardineria: "Fully maintained landscaping including lawn irrigation",
                        internet: "High-speed internet and cable TV",
                        basura: "Daily garbage disposal"
                    }
                }
            },
        },
        common: {
            loading: "Loading...",
            videoNotSupported: "Your browser does not support the video tag.",
            videoUnsupported: "Your browser does not support the video tag.",
            next: "Next",
            previous: "Previous",
            page: "Page",
            of: "of",
            cancel: "Cancel",
            saving: "Saving...",
            saveChanges: "Save changes",
            na: "N/A",
        },
        footer: {
            contact: "Get in touch",
            address: "Doral, FL",
        },
    },
};

function resolvePathValue(source: unknown, path: string): unknown {
    const keys = path.split(".");
    let cur: unknown = source;
    for (const key of keys) {
        if (cur && typeof cur === "object" && key in (cur as Record<string, unknown>)) {
            cur = (cur as Record<string, unknown>)[key];
            continue;
        }
        return undefined;
    }
    return cur;
}

function buildPathCandidates(path: string): string[] {
    if (path.startsWith("pages.")) {
        return [path, path.slice(6)];
    }
    return [path, `pages.${path}`];
}

function lookupTranslationValue(lang: Lang, path: string): unknown {
    const source = translations[lang];
    for (const candidate of buildPathCandidates(path)) {
        const value = resolvePathValue(source, candidate);
        if (value !== undefined) {
            return value;
        }
    }
    return undefined;
}

function isPlaceholderValue(value: unknown): boolean {
    return typeof value === "string" && value.trim().toLowerCase() === "latest";
}

function isUsableTranslationValue(value: unknown): boolean {
    return value !== undefined && value !== null && !isPlaceholderValue(value);
}

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
            // Priority 1: Current session setting
            const sessionSaved = sessionStorage.getItem("scattolini_lang");
            if (sessionSaved === "en" || sessionSaved === "es") return sessionSaved;

            // Priority 2: New session always starts with Spanish (as per requirement)
            // We ignore localStorage here to satisfy "if the session is new, start with spanish"
        } catch (e) {
            /* ignore */
        }
        return defaultLang;
    })();

    const [lang, setLangState] = useState<Lang>(initial);

    useEffect(() => {
        try {
            sessionStorage.setItem("scattolini_lang", lang);
            // Also keep it in localStorage in case they actually wanted persistence,
            // but the initial logic above will favor the "new session -> spanish" rule.
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
            const fallbackLang: Lang = lang === "es" ? "en" : "es";
            const currentValue = lookupTranslationValue(lang, path);
            const fallbackValue = lookupTranslationValue(fallbackLang, path);
            const resolved = isUsableTranslationValue(currentValue)
                ? currentValue
                : fallbackValue;

            if (resolved === null) return null;
            if (typeof resolved === "string" || Array.isArray(resolved)) return resolved;
            return fallback !== undefined ? (fallback as string) : path;
        };
    }, [lang]);

    const setLang = (l: Lang) => setLangState(l);
    const value = useMemo(() => ({lang, setLang, t}), [lang, t]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function getTranslation(path: string, lang: Lang, fallback?: string | string[] | null): string | string[] | null {
    const fallbackLang: Lang = lang === "es" ? "en" : "es";
    const currentValue = lookupTranslationValue(lang, path);
    const fallbackValue = lookupTranslationValue(fallbackLang, path);
    const resolved = isUsableTranslationValue(currentValue)
        ? currentValue
        : fallbackValue;

    if (resolved === null) return null;
    if (typeof resolved === "string" || Array.isArray(resolved)) return resolved;
    return fallback !== undefined ? (fallback as string) : path;
}

export function useTranslation() {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error("useTranslation must be used within TranslationProvider");
    }
    return {t: ctx.t, lang: ctx.lang, setLang: ctx.setLang};
}

function isLocalizedRecord(value: unknown): value is Record<string, unknown> {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;
    const record = value as Record<string, unknown>;
    return "es" in record || "en" in record;
}

function buildLanguagePriority(lang: Lang, fallbackLang?: Lang): Lang[] {
    const priority: Lang[] = [lang];
    if (fallbackLang && fallbackLang !== lang && !priority.includes(fallbackLang)) {
        priority.push(fallbackLang);
    }
    (["es", "en"] as Lang[]).forEach((candidate) => {
        if (!priority.includes(candidate)) {
            priority.push(candidate);
        }
    });
    return priority;
}

export function resolveLocalizedValue<T>(
    value: T | Record<string, T | undefined> | undefined,
    lang: Lang,
    fallbackLang?: Lang
): T | undefined {
    if (value === null || value === undefined) return undefined;
    if (isLocalizedRecord(value)) {
        const record = value as Record<string, T | undefined>;
        for (const currentLang of buildLanguagePriority(lang, fallbackLang)) {
            const candidate = record[currentLang];
            if (candidate !== undefined && candidate !== null && !isPlaceholderValue(candidate)) {
                return candidate as T;
            }
        }
        for (const candidate of Object.values(record)) {
            if (candidate !== undefined && candidate !== null && !isPlaceholderValue(candidate)) {
                return candidate as T;
            }
        }
        return undefined;
    }
    if (isPlaceholderValue(value)) return undefined;
    return value as T;
}

function buildDesarrolloKeyCandidates(desarrolloKey: string): string[] {
    const kebab = desarrolloKey
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase();

    const compact = desarrolloKey.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    return [...new Set([desarrolloKey, desarrolloKey.toLowerCase(), kebab, compact].filter(Boolean))];
}

export function getDesarrolloData(desarrolloKey: string, lang: Lang) {
    const data = translations[lang].desarrollos;
    if (!data || typeof data !== "object") return null;

    const candidates = buildDesarrolloKeyCandidates(desarrolloKey);
    for (const candidate of candidates) {
        const desarrolloData = data[candidate];
        if (desarrolloData) return desarrolloData;
    }

    return null;
}
