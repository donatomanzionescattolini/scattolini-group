export default class Quote {
    public quote: string;
    public author: string;

    constructor(quote: string, author: string) {
        this.quote = quote;
        this.author = author;

    }


}

const quotes = [new Quote(
    "Los bienes raíces no se pueden perder ni robar, ni pueden ser llevados [como carga ligera]. Comprados con sentido común, pagados en su totalidad, y administrados con cuidado razonable, son la inversión más segura del mundo.",
    "Franklin D. Roosevelt"), new Quote("Los propietarios se enriquecen mientras duermen",
    "John Stuart Mill"), new Quote("La mejor inversión en la Tierra es la tierra.",
    "Louis Glickman, ejecutivo de negocios estadounidense"), new Quote("Los bienes raíces son un activo imperecedero, cuyo valor aumenta constantemente. Es la seguridad más sólida que ha ideado el ingenio humano. Es la base de toda seguridad y casi la única seguridad indestructible.",
    "Russel Sage, financiero, ejecutivo ferroviario y político whig de Nueva York, Estados Unidos"), new Quote("El éxito en el sector inmobiliario comienza cuando crees que lo mereces.",
    "Miguel Ferrara"), new Quote("La cualidad más importante para un inversionista es el temperamento, no el intelecto… Se necesita un temperamento que no obtenga gran placer de estar con la multitud o contra la multitud."
    , "Warren Buffett"),
    new Quote("Pero la tierra es la tierra, y es más segura que las acciones y los bonos de los estafadores de Wall Street"
        , "Eugene O'Neill"),
    new Quote("Compre al margen y espere. ¡Compre un terreno cerca de una ciudad en crecimiento! Compra bienes raíces cuando otras personas quieren vender. ¡Guarda lo que compras!"
        , "Juan Jacob Astor"), new Quote("Cuando inviertes, estás comprando un día que no tienes que trabajar."
        , "Aya Laraya"), new Quote("El éxito en el sector inmobiliario comienza cuando crees que lo mereces.", "Miguel Ferrara"), new Quote("Los propietarios se enriquecen mientras duermen.", "John Stuart Mill"), new Quote("No espere para comprar bienes raíces, compre bienes raíces y espere."
        , " Will Rogers"), new Quote("En el negocio de bienes raíces aprendes más sobre las personas y aprendes más sobre los problemas de la comunidad, aprendes más sobre la vida, aprendes más sobre el impacto del gobierno, probablemente que en cualquier otra profesión que yo conozca."
        , "Johnny Isakson"), new Quote("Si puedes, debes hacerlo, y si eres lo suficientemente valiente como para empezar, lo harás", "Stephen King")];
export {quotes};