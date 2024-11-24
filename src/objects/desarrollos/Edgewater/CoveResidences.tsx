import Project from "../../../models/desarrollos/Project.tsx";
import Edgewater from "../../../objects/areas/Edgewater.tsx";



const CoveResidences = new Project(Edgewater());


    CoveResidences.name = "cove-residences";
    CoveResidences.title = "Cove Residences";
    CoveResidences.address = <address>456 NE 29th St, Miami, FL 33137, USA</address>;
    CoveResidences.numberOfImages = 21;
    CoveResidences.numberOfUnits = 134;
    CoveResidences.numberOfFloors = 40;
    CoveResidences.numberOfRooms = { start: 2, end: 4 };
    CoveResidences.subtitle = "Vida Elevada Frente Al Mar";
    CoveResidences.introduction = ["Cove Miami ofrece un estilo de vida boutique elegante con una colección limitada y exclusiva de 134 residencias de lujo. Ventanas de piso a techo, amplias terrazas envolventes y materiales naturales cuidadosamente seleccionados contribuyen a un estilo de vida sereno y "];
    CoveResidences.area = Edgewater();
    CoveResidences.banner = true;
    CoveResidences.typeOfUnits = "Unidades de lujo: estudios y con 2, 3, o 4 habitaciones";
    CoveResidences.traits = {residences: ["Techos de 10 pies en todos los espacios habitables"," Un gran espacio de entretenimiento"," Pisos de baldosas de porcelana de gran tamaño en áreas de estar y dormitorios"," Ventanas de vidrio resistente a impactos de piso a techo y puertas corredizas de vidrio para balcones."," Balcones completamente revestidos con barandillas de vidrio con acceso desde la sala de estar y el dormitorio principal de cada residencia."," Cocina personalizada con encimera y protector contra salpicaduras en color Calacatta Gold Electrodomésticos de Bosch y Thermador que incluyen refrigerador, congelador, horno combinado de acero inoxidable negro y placa de inducción."," Enfriador de vinos en unidades seleccionadas"," Baños principales con tocador doble con encimeras de piedra y paredes húmedas Calacatta Gold"," Amplios armarios empotrados personalizados y totalmente empotrados."," Cada residencia está precableada para persianas automáticas."," Lavadora y secadora de tamaño completo en la unidad"],amenities:["Tres niveles de comodidades y azotea con vistas a la bahía de Biscayne "," Piscina infinita de estilo resort con cabañas privadas "," Gimnasio "," Spa con piscina de inmergete fría "," Salas de masaje, baño turco y sauna "," Sala de club "," Zona de Coworking y sala de reuniones "," Sala de juegos "," Propietarios salón con bodega "," Balneario para mascotas "," Microcinema "," Muelle para deportes acuáticos "," Habitación de huéspedes "," Bodegas privadas "," Puedes alquilar hasta dos veces al año, con un mínimo de tres meses "," Garaje en el edificio, con valet parking para dos coches"
        ],building:<dl>{CoveResidences.address ? (<><dt>Dirección</dt><dd>{CoveResidences.address}</dd></>):<></>}{CoveResidences.typeOfUnits&&<><dt>Tipo de Residencias</dt><dd>{CoveResidences.typeOfUnits}</dd></>}
            {CoveResidences.numberOfFloors?<><dt>Pisos</dt><dd>{CoveResidences.numberOfFloors}</dd></>:<></>}
            {CoveResidences.numberOfRooms&&<><dt>Habitaciones</dt><dd>{CoveResidences.numberOfRooms.start} a {CoveResidences.numberOfRooms.end}</dd></>}
            {CoveResidences.area&&<><dt>Área</dt><dd>{CoveResidences.area.name}</dd></>}

        </dl>};
    export default CoveResidences;
