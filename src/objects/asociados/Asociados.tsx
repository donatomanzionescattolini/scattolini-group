import Asociado from "../../models/asociados/Asociado";

const EldaScattolini = new Asociado("Elda", "Scattolini", "🏘️ Dueña y Agente");
const DaniaScattolini = new Asociado("Dania", "Scattolini", "🏘️ Agente y Office Manager");
const LailaSaade = new Asociado("Laila", "Saade", "🏠 Agente");
const VerushkaJaimes = new Asociado("Veruschka", "Jaimes", "🏠 Agente");
const MonicaManzione = new Asociado(
  "Mónica",
  "Manzione",
  "🏘️ Agente y Property Manager"
);

const CarmenHerrera = new Asociado("Carmen", "Herrera", "🏠 Agente");
const RobinsonAvila = new Asociado("Róbinson", "Ávila", "🏠 Agente");
const MariolgaVillasana = new Asociado("Mariolga", "Villasana", "🏠 Agente");

const DayanaTrejo = new Asociado("Dayana", "Trejo", "🏠 Agente");
const VictoriaMartinez = new Asociado("Victoria", "Martínez", "🏠 Agente");

const GabrielaPena = new Asociado("Gabriela", "Peña", "🏠 Agente");
const AnahidChalikian = new Asociado("Anahid", "Chalikian", "🏚️ Broker");
const DaniaDominguez = new Asociado("Dania Dominguez", "", "🏠 Agente");
const SherezadeVacas = new Asociado("Sherezade", "Vacas", "🏠 Agente");
const LauraMartinez = new Asociado("Laura","Martínez", "🏠 Agente");
const asociados = [
  EldaScattolini,
  LauraMartinez,
  LailaSaade,
  VerushkaJaimes,

  DaniaScattolini,
  MonicaManzione,

  CarmenHerrera,
  MariolgaVillasana,
  DayanaTrejo,
  RobinsonAvila,
  VictoriaMartinez,
  GabrielaPena,
  DaniaDominguez,
  AnahidChalikian,
  SherezadeVacas
];

export default function Asociados() {
  return asociados;
}
