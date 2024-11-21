import Desarrollo from '../../../models/desarrollos/Desarrollo';
import Downtown from '../../areas/Downtown';
import Constructora from '../../../models/constructora/Constructora';

export default function Jem() {
    const Jem = new Desarrollo();
    Jem.name = "jem";
    Jem.title = "The Jem Miami Private Residences";
    Jem.numberOfUnits = 259;
    Jem.typeOfUnits = "Studios";
    Jem.constructora = new Constructora("Naftali Group");
    Jem.numberOfRooms = {start: 1, end: 4};
    Jem.añoDeConstrucciónOFinalización = 2027;

    Jem.subtitulo = "La Joya de Miami";
    Jem.introduccion = ["Concebido como una audaz declaración arquitectónica que redefine el horizonte, JEM ofrece una experiencia de vida singular—donde cada detalle es cuidadosamente diseñado y ejecutado impecablemente por Naftali Group. Desde la llegada a través del bucólico ‘porte-cochère’ privado hasta la icónica piscina infinita en el exclusivo JEM Club, la colección de residencias privadas tiene en cuenta cada matiz de un estilo de vida global contemporáneo dentro del próximo vecindario ‘it’ de Miami."];
    Jem.area = Downtown();
    Jem.ubicación = '110 NE 10th St, Miami, FL 33132';
    Jem.añoDeConstrucciónOFinalización = 2026;
    Jem.residencias = ["RESIDENCIAS", "Desde  estudios  hasta  residencias  de  cuatro  dormitorios, incluidas  espectaculares  residencias  Penthouse  en  la  corona  del  edificio", "Ventanas  de  impacto  de  piso  a  techo  que  abarcan  espacios  completos  con  puertas  de  balcón  que  conducen  a  terrazas  completamente  ", "revestidas  con  barandillas  de  vidrio.", "Pisos  de  tablones  de  roble  blanco  en  todas  las  residencias.", "Puertas  interiores  de  madera  con  herrajes  cromados  en  todas  partes.", "Las  salas  de  lavandería  incluyen  lavadoras  y  secadoras  de  carga  frontal  apiladas  o  una  al  lado  de  la  otra.Lavanderías  con  fregadero  en  ", "residencias  selectas", "COCINA", "Gabinetes  de  carpintería  diseñados  a  medida  por  Rockwell  Group", "Encimera  y  protector  contra  salpicaduras  de  losa  de  cuarzo  dorado  Calacatta  pulido", "Isla  de  cocina  de  losa  de  cuarzo  dorado  Calacatta  pulido  con  bases  de  roble;  en  residencias  selectas", "Frigorífico  y  congelador  con  paneles  de  roble  Miele(o  similar)", "Lavavajillas  con  paneles  de  roble  Miele(o  similar)", "Neveras  para  vinos  totalmente  integradas  Miele(o  comparables);  Sub­Zero  de  altura  completa(o  comparable)  en  residencias  ", "selectas", "Estufa  Miele(o  similar)  con  horno  rápido;  cajón  calentador  y  horno  de  convección  en  residencias  selectas", "Fregadero  bajo  encimera  de  acero  inoxidable  Kohler  combinado  con  rociador  extraíble  con  tres  funciones  y  triturador  de  ", "basura", "Machine Translated by Google", "BAÑO  PRINCIPAL", "Tocadores  personalizados  diseñados  por  Rockwell  Group, con  acabados  de  roble  y  herrajes  de  níquel  pulido  con  almacenamiento  y  estantes  ", "abiertos.", "Botiquines  de  diseño  personalizado  con  iluminación  y  almacenamiento  integrados  montados  en  espejos", "Encimera  de  losa  de  porcelana  blanca  Bianco  Dolomite  perfeccionada", "Pisos  y  paredes  de  porcelanato  blanco  Bianco  Dolomite  pulido;  piso  de  mosaico  en  la  ducha", "Lavabos  de  tocador  Kohler  con  grifos  Kohler  de  níquel  pulido", "Ducha  de  mano  de  níquel  pulido  Kohler, cabezal  de  ducha", "Bañera  independiente  de  Porcelanosa  con  grifo  para  bañera  independiente  de  níquel  pulido  Kohler;  en  residencias  selectas", "Nicho  de  piedra  personalizado  en  las  duchas", "Inodoro  Kohler  con  mecanismo  de  doble  descarga.", "BAÑOS  SECUNDARIOS", "Tocadores  personalizados  diseñados  por  Rockwell  Group  con  acabado  en  roble  blanco  y  herrajes  en  níquel  pulido.", "Encimera  de  losa  de  porcelana  blanca  Bianco  Dolomite  perfeccionada", "Pavimentos  y  revestimientos  de  piedra  porcelánica  blanca  Bianco  Dolomite  pulidos", "Lavabos  de  tocador  Kohler  con  grifos  Kohler  de  níquel  pulido", "Tinas  Kohler", "Inodoros  Kohler", "TOCADORES", "Tocadores  a  medida  con  losas  de  porcelana  Honed  Dolomite  y  una  pared  característica  de  losa  estriada  de  Dolomite", "Suelos  de  tablones  de  madera  de  roble  blanco", "Lavabo  Kohler  con  grifo  Kohler  en  níquel  pulido", "Apliques  personalizados  que  flanquean  un  espejo  personalizado", "Inodoro  Kohler  con  mecanismo  de  doble  descarga.", "Iluminación  de  cala  personalizada"];

    Jem.amenidades = ["Vestíbulo  atendido  las  24  horas  con  un  mostrador  de  recepción  hecho  a  medida,  amplia  sala  de  estar  con  chimenea,  obras  ", "de  arte  esculpidas  personalizadas, iluminación  y  detalles  intrincados  en  paredes, techos  y  pisos.", "Gran  puerta  cochera  que  ofrece  servicio  de  valet  las  24  horas  y  está  decorada  con  abundante  follaje, una  pieza  central  ", "escultórica  y  detalles  de  carpintería.Entrada  porte­cochère  exclusiva  residencial  privada  y  valet  en  el  segundo  nivel.", "JEM  Club, una  colección  de  comodidades  para  interiores  y  exteriores  magistralmente  seleccionada  que  ocupa  el  piso  50, que  incluye:", "ENTRETENIMIENTO  AL  AIRE  LIBRE", "Piscina  estilo  centro  turístico  con  cabañas, tumbonas  flotantes  y  una  escultura  exclusiva", "Zona  de  jacuzzi  con  sillones  y  ducha  tropical  al  aire  libre", "Salón  al  aire  libre  con  exuberantes  jardines  tropicales, detalles  acuáticos  y  una  variedad  de  áreas  para  sentarse", "Área  de  descanso  hundida  rodeada  de  piscinas  reflectantes", "Área  de  comedor  al  aire  libre  Summer  Kitchen, que  proporciona  un  oasis  para  cenar  al  aire  libre", "ENTRETENIMIENTO", "Sky  Lounge  interior  con  chimenea, barra  de  piedra  personalizada  y  áreas  de  descanso  íntimas", "Comedor  privado  acristalado  con  bar  con  fregadero  con  acceso  directo  al  exterior", "cubierta  de  servicios", "Sala  de  juegos  y  salón  de  entretenimiento  con  carpintería  personalizada  y  mesa  de  billar, un  gran  formato", "Televisión, sillones  y  acceso  directo  al  exterior.", "Sala  de  degustación  de  bebidas  espirituosas  con  estantes  de  vidrio  ámbar  y  estantes  para  decantadores  de  bronce.", "OFICINAS", "Salón  de  coworking  con  áreas  de  descanso  individuales  y  grupales", "Cabinas  telefónicas  privadas  y  una  sala  de  podcasts.", "SALUD  Y  BIENESTAR", "Gimnasio  con  estudio  privado  de  entrenamiento / yoga  y  equipos  de  última  generación.", "Área  de  fitness  al  aire  libre  con  campo  de  boxeo  y  oportunidades  de  entrenamiento  de  fuerza", "Patio  de  yoga  con  una  piscina  fría  adyacente  y  un  jardín  paisajístico", "Suite  de  spa  que  incluye  una  escultural  sauna  seca, una  sala  de  vapor  y  una  sala  de  sal  rosa  del  Himalaya", "Sala  de  tratamientos  privada  con  sillón  reclinable  para  masajes  y  servicios  cosméticos  a  domicilio.", "Vestuarios  con  taquillas  y  zona  de  duchas."];
    Jem.banner = true;
    Jem.caracteristicas = {
        amenidades: Jem.displayAmenidades(),
        residencias: Jem.displayCaracteristicasResidencias(),
        edificio: Jem.displayCaracteristicasEdificio()
    };
    Jem.numberOfImages = 12;
    return Jem;
}
