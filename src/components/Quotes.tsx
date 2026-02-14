import Quote from "../models/Quote";
import {Carousel, CarouselItem} from "react-bootstrap";
import { useTranslation } from "../i18n.tsx";

interface Props {
    quotes: Quote[];
}

export default function Quotes(props: Props) {
    const { lang } = useTranslation();
    const getLocalized = (field: any) => {
        if (!field) return "";
        if (typeof field === "object") return field[lang] || field.es || Object.values(field)[0] || "";
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
                <CarouselItem key={quote.id ?? idx}>
      {innerWidth <= 560 && <><br></br><br></br></>}

                    <blockquote className="blockquote overflow-visible" style={{overflow: "visible!important"}}>
                        <p style={{
                            overflow: "scroll!important",
                            minHeight: "fit-content!important"
                        }}>{getLocalized(quote.quote)}</p>
                        <footer className="blockquote-footer">
                            <cite title="Source title">{quote.author}</cite>
                        </footer>
        {innerWidth <= 560 && <><br></br><br></br></>}

                    </blockquote>
                </CarouselItem>
            ))}
        </Carousel>
    );
}
