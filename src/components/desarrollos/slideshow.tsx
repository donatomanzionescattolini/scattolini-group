import React, {useState} from "react";
import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Areas from "../../models/areas/Areas.tsx";
import {Area} from "../../models/areas/Area.tsx";
import {Desarrollo} from "../../models/desarrollos/Desarrollo.tsx";
import {MDBCarousel, MDBContainer} from "mdb-react-ui-kit";

export interface GalleryImage {
    src: string;
    alt: string;
}

interface PropsSlideshow {
    areas: Area[];
}

const SlideshowGallery = (props: PropsSlideshow) => {
    const [index, setIndex] = useState(0);
    const [areaObjects] = useState<Area[]>(
        props.areas ? props.areas : Areas()
    );
    const handleSelect = (selectedIndex: number) => {
        if (areaObjects[index]) return setIndex(selectedIndex);
        else return setIndex(0);
    };

    const [returnEls] = useState(() => {
        const temp: React.JSX.Element[] = new Array<React.JSX.Element>();
        areaObjects.forEach((areaObject: Area) => {
            areaObject.getDesarrollos().forEach((x: Desarrollo, index: number) => {
                temp.push(
                    <Carousel.Item
                        key={index}
                        id={`second-carousel-${index}`}
                        style={{
                            backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${areaObject.getName()}/${x.nombre}.webp`,
                        }}
                    >
                        <Carousel.Caption>
                            <h3 className="display-6 font-weight-bold">
                                {x
                                    .nombre
                                    .split("-")
                                    .map(
                                        (n) => String(n.charAt(0)).toUpperCase() + n.substring(1)
                                    )
                                    .join(" ")}
                            </h3>
                            <p className="lead font-weight-bold text-white">
                                {areaObject
                                    .getName()
                                    .split("-")
                                    .map((n) => n.charAt(0).toUpperCase() + n.substring(1))
                                    .join(" ")}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            });
        });
        return temp;
    });

    return (
        <MDBContainer fluid>
            <MDBCarousel
                indicators
                onSelect={handleSelect}
                controls
                autoFocus
                slide={false}
                fade
            >
                {...returnEls}
            </MDBCarousel>
        </MDBContainer>
    );
};

export default SlideshowGallery;
