import Project from "./NewDevelopment.tsx";


export class PropertyDeveloper {
    private name: string;

    constructor(name?: string) {
        this.name = name ? name : "UNKNOWN";
    }


}

export default function OnGrandville() {
    const OnGrandville = new Project();

    OnGrandville.residences = new Map();
    OnGrandville.residences.set("Estructura", [
        "Construcción de Hormigón",
        "Ventanas a Prueba de Golpes",
        "Paredes con Acabado Texturizado",
        "Paredes con Acabado Liso",
    ]);

    OnGrandville.residences.set("Tecnología", [
        "Pre-Cableado de Fibra Óptica de Alta Velocidad de Internet",
        "Timbre",
        "Smart Entry Lock",
        "Exterior Security Cameras",
    ]);
    OnGrandville.residences.set("Miscellaneous", [
        "Persianas para Ventanas",
        "Pasamanos de Escalera Blanco o Negro Mate",
        "Estantes de Malla en Vestidor",
        "Armario en Closet Vestidor",
    ]);
    OnGrandville.residences.set("Interiores", [
        "Encimeras de Cuarzo ",
        "Moderna Cocina Abierta",
        "Electrodomésticos de Acero Inoxidable",
        "Elegantes Herrajes para Puertas Interiores",
        "Pisos de Porcelanato",
        "Escaleras de Hormigón",
        "Lavadora y Secadora",
        "Vestidor en Dormitorio Principal",
        "Calentador de Agua Eléctrico sin Tanque",
    ]);
    OnGrandville.residences.set("Baño", [
        "Espejo Completo",
        "Gabinetes de Tocador Modernos",
        "Encimeras de Cuarzo",
        "Azulejos de Suelo a Techo en la Ducha",
        "Panel de Ducha de Cristal",
    ]);
    OnGrandville.residences.set("Exterior", [
        "Terraza en la Azotea",
        "Puerto de Carga para Vehículos Eléctricos",
        "Ventanas y Puertas a Prueba de Huracanes",
    ]);

    OnGrandville.traits = OnGrandville.createCaracteristicas();
    OnGrandville.amenities = [
        "Patios de juegos",
        "Área de Barbacoas",
        "Parque de Perros",
        "Estacionamiento Privado, de Garaje, y para Visitantes",
    ];
    // OnGrandville.residencias = [
    //   "Construcción de hormigón",
    //   "Ventanas de impacto",
    //   "Paredes con acabado texturizado",
    //   "Paredes de acabado liso",
    //   "Acceso a la terraza",
    //   "Cobertura extendida de la terraza",
    //   "Cocina de verano con electrodomésticos",
    //   "Pisos de terraza",
    //   "Porcelanato (Primer Piso)",
    //   "Pisos de madera de ingeniería Escaleras y pasillo",
    //   "Alfombra en los dormitorios",
    //   "Pisos de madera de ingeniería Dormitorios 2º piso",
    //   "Porcelanato Todos los pisos",
    //   "Encimeras de cocina de cuarzo",
    //   'Gabinetes de cocina de 30"',
    //   'Gabinetes de 36" Premium',
    //   "Fregadero doble con grifo de diseño",
    //   "Hardware estándar",
    //   "Hardware Premium (KOVA)",
    //   "Electrodomésticos de acero inoxidable Basic",
    //   "Electrodomésticos de acero inoxidable Premium",
    //   "Protector contra salpicaduras",
    //   "Pisos de porcelanato",
    //   "Baldosas de piso a techo en ducha",
    //   "Espejo de tocador estándar",
    //   "Espejo de tocador Premium Accesorios de iluminación estándar",
    //   "Luminarias Premium",
    //   "Hardware estándar",
    //   "Hardware Premium (KOVA)",
    //   "Accesorios de baño",
    //   "Panel de vidrio en la ducha",
    //   "Armario empotrado",
    //   "Listo para la instalación",
    //   "Lavadora y secadora",
    //   "Aislamiento de grado superior",
    //   "Calentador de agua eléctrico",
    //   "Conexión del cargador EV",
    //   "Instalación del cargador de vehículos eléctricos",
    //   "Internet de alta velocidad de fibra óptica precableada",
    //   "Sistema de Domótica",
    //   "Cerradura de entrada inteligente",
    //   "Cámaras de seguridad exteriores",
    //   "Cortinas para ventanas",
    // ];
    OnGrandville.traits = OnGrandville.createCaracteristicas();
    return OnGrandville;
}