import {MDBCarousel, MDBCarouselItem,} from "mdb-react-ui-kit";

import {useEffect, useState} from "react";

interface Props {
    name: string;
    numberOfImages: number;
}

export default function SlideshowGalleryDesarrollo2(props: Readonly<Props>) {
    const [name] = useState<string>(props.nameForProjectFolders);
    const [numberOfImages] = useState<number>(props.numberOfImages);
    // function images() {
    const [returnEls, setReturnEls] = useState<React.JSX.Element[]>([]);

    useEffect(() => {
        for (let j = 1; j <= numberOfImages; j++) {
            setReturnEls([
                <MDBCarouselItem
                    controls
                    key={j}
                    className=" d-block"
                    itemId={j} src={
                    "https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/" +
                    name +
                    "/image-gallery/image (" +
                    j +
                    ").jpg"
                }

                    srcSet={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).*`}
                    alt=""
                />, ...returnEls]);
        }
    }, [name, numberOfImages, returnEls]);

    // return returnEls;
    // }

    return <MDBCarousel showIndicators showControls touch fade>{returnEls.map(x => x)}</MDBCarousel>;
}
