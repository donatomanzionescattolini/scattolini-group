import Quote from "../models/Quote";
import {Carousel, CarouselItem} from "react-bootstrap";
import {useTranslation} from "../i18n.tsx";

interface Props {
    quotes: Quote[];
}

export default function Quotes(props: Props) {
    const {lang} = useTranslation();
    const getLocalized = (field: string | Record<string, string> | undefined) => {
        if (!field) return "";
        const isPlaceholder = (value: unknown) =>
            typeof value === "string" && value.trim().toLowerCase() === "latest";
        if (typeof field === "object") {
            const preferred = field[lang];
            if (preferred && !isPlaceholder(preferred)) return preferred;
            const spanish = field.es;
            if (spanish && !isPlaceholder(spanish)) return spanish;
            const firstValid = Object.values(field).find(
                (value) => value && !isPlaceholder(value)
            );
            return firstValid || "";
        }
        if (isPlaceholder(field)) return "";
        return field;
    };

    return (
        <Carousel
            id="quotes"
            className=""
            slide={false}
            autoFocus
            interval={8000}
            controls
            indicators={false}
        >
            {props.quotes.map((quote: Quote, idx: number) => (
                <CarouselItem key={`quote-${idx}`}>
                    <blockquote className="blockquote">
                        <p>{getLocalized(quote.quote)}</p>
                        <footer className="blockquote-footer">
                            <cite title="Source title">{quote.author}</cite>
                        </footer>
                    </blockquote>
                </CarouselItem>
            ))}
        </Carousel>
    );
}
