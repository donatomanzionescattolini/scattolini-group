import {MDBCarousel, MDBCarouselItem,} from "mdb-react-ui-kit";

import {useState} from "react";

interface Props {
    name: string;
    numberOfImages: number;
}

export default function SlideshowGalleryDesarrollo2(props: Props) {
    const [name] = useState<string>(props.name);

    // function images() {
    const returnEls: React.JSX.Element[] = [];
    for (let j = 1; j <= props.numberOfImages; j++) {
        returnEls.push(
            <MDBCarouselItem
                className=" d-block"
                itemId={1}
                src={
                    "https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/" +
                    name +
                    "/image-gallery/image (" +
                    j +
                    ").jpg"
                }
                alt=""
            >
                <picture>
                    <source
                        srcSet={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).JPEG`}
                        height={500}
                    />
                    <source
                        srcSet={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).jpeg`}
                        height={500}
                    />
                    <source
                        srcSet={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).png`}
                        height={500}
                    />
                    <source
                        height={500}
                        srcSet={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).webp`}
                    />
                    <img
                        autoFocus
                        height={500}
                        src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).jpg`}
                        alt=""
                    />
                </picture>
            </MDBCarouselItem>
        );
    }
    // return returnEls;
    // }

    return <MDBCarousel showIndicators showControls fade></MDBCarousel>;
}
