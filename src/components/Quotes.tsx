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
            interval={8000}
            controls
            indicators={false}
        >
            {props.quotes.map((quote: Quote) => (
                <CarouselItem
                    accessKey={`${props.quotes.indexOf(quote)}`}
                    key={props.quotes.indexOf(quote)}
                >
                    {innerWidth <= 560 && <><br></br><br></br></>}

                    <blockquote className="blockquote overflow-visible" style={{overflow: "visible!important"}}>
                        <p style={{
                            overflow: "scroll!important",
                            minHeight: "fit-content!important"
                        }}>{quote.quote}</p>
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
