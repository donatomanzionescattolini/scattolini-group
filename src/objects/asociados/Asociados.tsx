import Asociado from "../../models/asociados/Asociado";

const elda = new Asociado("Elda", "Scattolini", "🏘️ Dueña y Agente");
const dania = new Asociado("Dania", "Scattolini", "🏘️ Agente y Office Manager");
const laila = new Asociado("Laila", "Saade", "🏠 Agente");
const veru = new Asociado("Veruschka", "Jaimes", "🏠 Agente");
const monica = new Asociado(
  "Mónica",
  "Manzione",
  "🏘️ Agente y Property Manager"
);

const carmen = new Asociado("Carmen", "Herrera", "🏠 Agente");
const robinson = new Asociado("Róbinson", "Ávila", "🏠 Agente");
const mariolga = new Asociado("Mariolga", "Villasana", "🏠 Agente");

const dayana = new Asociado("Dayana", "Trejo", "🏠 Agente");
const victoria = new Asociado("Victoria", "Martínez", "🏠 Agente");

const gabriela = new Asociado("Gabriela", "Peña", "🏠 Agente");
const anahid = new Asociado("Anahid", "Chalikian", "🏚️ Broker");
const daniaDominguez = new Asociado("Dania Dominguez", "", "🏠 Agente");
const shere = new Asociado("Sherezade", "Vacas", "🏠 Agente");
const asociados = [
  elda,
  laila,
  veru,

  dania,
  monica,

  carmen,
  mariolga,
  dayana,
  robinson,
  victoria,
  gabriela,
  daniaDominguez,
  anahid,
  shere
];

export default function Asociados() {
  return asociados;
}
