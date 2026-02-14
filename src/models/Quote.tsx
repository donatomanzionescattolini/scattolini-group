export default class Quote {
    public id?: number;
    public quote: string | { es: string, en: string };
    public author: string;

    constructor(quote: string | { es: string, en: string }, author: string, id?: number) {
        this.quote = quote;
        this.author = author;
        this.id = id;

    }


}

const quotes = [new Quote(
    {
        es: "Los bienes raíces no se pueden perder ni robar, ni pueden ser llevados [como carga ligera]. Comprados con sentido común, pagados en su totalidad, y administrados con cuidado razonable, son la inversión más segura del mundo.",
        en: "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world."
    },
    "Franklin D. Roosevelt"), new Quote({
    es: "Los propietarios se enriquecen mientras duermen",
    en: "Landlords grow rich in their sleep"
},
    "John Stuart Mill"), new Quote({
    es: "La mejor inversión en la Tierra es la tierra.",
    en: "The best investment on Earth is earth."
},
    "Louis Glickman"), new Quote({
    es: "Los bienes raíces son un activo imperecedero, cuyo valor aumenta constantemente. Es la seguridad más sólida que ha ideado el ingenio humano. Es la base de toda seguridad y casi la única seguridad indestructible.",
    en: "Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. It is the basis of all security and about the only indestructible security."
},
    "Russel Sage"), new Quote({
    es: "El éxito en el sector inmobiliario comienza cuando crees que lo mereces.",
    en: "Success in real estate starts when you believe you deserve it."
},
    "Miguel Ferrara"), new Quote({
    es: "La cualidad más importante para un inversionista es el temperamento, no el intelecto… Se necesita un temperamento que no obtenga gran placer de estar con la multitud o contra la multitud.",
    en: "The most important quality for an investor is temperament, not intellect. You need a temperament that derives no great pleasure from being with the crowd or against the crowd."
}
    , "Warren Buffett"),
    new Quote({
        es: "Pero la tierra es la tierra, y es más segura que las acciones y los bonos de los estafadores de Wall Street",
        en: "But land is land, and it's safer than the stocks and bonds of Wall Street swindlers"
    }
        , "Eugene O'Neill"),
    new Quote({
        es: "Compre al margen y espere. ¡Compre un terreno cerca de una ciudad en crecimiento! Compra bienes raíces cuando otras personas quieren vender. ¡Guarda lo que compras!",
        en: "Buy on the fringe and wait. Buy land near a growing city! Buy real estate when other people want to sell. Keep what you buy!"
    }
        , "Juan Jacob Astor"), new Quote({
    es: "Cuando inviertes, estás comprando un día que no tienes que trabajar.",
    en: "When you invest, you are buying a day that you don’t have to work."
},
    "Aya Laraya"), new Quote({
    es: "No espere para comprar bienes raíces, compre bienes raíces y espere.",
    en: "Don't wait to buy real estate, buy real estate and wait."
}
        , " Will Rogers"), new Quote({
    es: "En el negocio de bienes raíces aprendes más sobre las personas y aprendes más sobre los problemas de la comunidad, aprendes más sobre la vida, aprendes más sobre el impacto del gobierno, probablemente que en cualquier otra profesión que yo conozca.",
    en: "In the real estate business you learn more about people, and you learn more about community issues, you learn more about life, you learn more about the impact of government, probably than any other profession that I know of."
}
        , "Johnny Isakson"), new Quote({
    es: "Si puedes, debes hacerlo, y si eres lo suficientemente valiente como para empezar, lo harás",
    en: "If you can, you should, and if you're brave enough to start, you will"
}, "Stephen King")];
export {quotes};