export default class Quote {
    public id: number;
    public quote: string | { es: string, en: string };
    public author: string;

    constructor(quote: string | { es: string, en: string }, author: string, id: number = 0) {
        this.quote = quote;
        this.author = author;
        this.id = id;

    }


}

const quotes = [new Quote(
    {
        es: "Los bienes raíces no se pueden perder ni robar, ni pueden ser llevados [como carga ligera]. Comprados con sentido común, pagados en su totalidad, y administrados con cuidado razonable, son la inversión más segura del mundo.",
        en:"latest"
    },
    "Franklin D. Roosevelt"), new Quote({
    es: "Los propietarios se enriquecen mientras duermen",
    en:"latest"
},
    "John Stuart Mill"), new Quote({
    es: "La mejor inversión en la Tierra es la tierra.",
    en:"latest"
},
    "Louis Glickman"), new Quote({
    es: "Los bienes raíces son un activo imperecedero, cuyo valor aumenta constantemente. Es la seguridad más sólida que ha ideado el ingenio humano. Es la base de toda seguridad y casi la única seguridad indestructible.",
    en:"latest"
},
    "Russel Sage"), new Quote({
    es: "El éxito en el sector inmobiliario comienza cuando crees que lo mereces.",
    en:"latest"
},
    "Miguel Ferrara"), new Quote({
    es: "La cualidad más importante para un inversionista es el temperamento, no el intelecto… Se necesita un temperamento que no obtenga gran placer de estar con la multitud o contra la multitud.",
    en:"latest"
}
    , "Warren Buffett"),
    new Quote({
        es: "Pero la tierra es la tierra, y es más segura que las acciones y los bonos de los estafadores de Wall Street",
        en:"latest"
    }
        , "Eugene O'Neill"),
    new Quote({
        es: "Compre al margen y espere. ¡Compre un terreno cerca de una ciudad en crecimiento! Compra bienes raíces cuando otras personas quieren vender. ¡Guarda lo que compras!",
        en:"latest"
    }
        , "Juan Jacob Astor"), new Quote({
    es: "Cuando inviertes, estás comprando un día que no tienes que trabajar.",
    en:"latest"
},
    "Aya Laraya"), new Quote({
    es: "No espere para comprar bienes raíces, compre bienes raíces y espere.",
    en:"latest"
}
        , " Will Rogers"), new Quote({
    es: "En el negocio de bienes raíces aprendes más sobre las personas y aprendes más sobre los problemas de la comunidad, aprendes más sobre la vida, aprendes más sobre el impacto del gobierno, probablemente que en cualquier otra profesión que yo conozca.",
    en:"latest"
}
        , "Johnny Isakson"), new Quote({
    es: "Si puedes, debes hacerlo, y si eres lo suficientemente valiente como para empezar, lo harás",
    en:"latest"
}, "Stephen King")];
export {quotes};
