import Quote from "../models/Quote";
import {Carousel, CarouselItem} from "react-bootstrap";
import {resolveLocalizedValue, useTranslation} from "../i18n.tsx";

interface Props {
    quotes: Quote[];
}

export default function Quotes(props: Props) {
    const {lang} = useTranslation();
    const getLocalized = (field: string | Record<string, string> | undefined) => {
        return resolveLocalizedValue<string>(field, lang) || "";
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
                    <blockquote className="blockquote text-center">
                        <p className="mb-4">{getLocalized(quote.quote)}</p>
                        <footer className="blockquote-footer mt-2">
                            <cite title="Source title">{quote.author}</cite>
                        </footer>
                    </blockquote>
                </CarouselItem>
            ))}
        </Carousel>
    );
}
