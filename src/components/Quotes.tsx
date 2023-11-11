
import Quote from "../models/Quote";
import {Carousel, CarouselItem} from "react-bootstrap";

interface Props {
    quotes: Quote[];
}

export default function Quotes(props: Props) {
    return (
        <Carousel
            id="quotes"
            className=""
            slide={false}
            autoFocus
            interval={4000}
            controls
            indicators={false}
        >
            {props.quotes.map((quote: Quote) => (
                <CarouselItem
                    accessKey={`${props.quotes.indexOf(quote)}`}
                    key={props.quotes.indexOf(quote)}
                >
                    <blockquote className="blockquote ">
                        <p>{quote.getQuote()}</p>
                        <footer className="blockquote-footer">
                            <cite title="Source title">{quote.getAuthor()}</cite>
                        </footer>
                    </blockquote>
                </CarouselItem>
            ))}
        </Carousel>
    );
}
