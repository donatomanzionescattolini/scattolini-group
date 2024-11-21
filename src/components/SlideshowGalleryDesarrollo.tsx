import {Carousel} from "react-bootstrap";

import React, {useState} from "react";

interface Props {
    name: string;
    numberOfImages: number;
}

export default function SlideshowGalleryDesarrollo(props: Props) {
    const [name] = useState<string>(props.name);

    const returnEls: React.JSX.Element[] = [];

    function images() {
        for (let j = 1; j <= props.numberOfImages; j++) {
            returnEls.push(
                <Carousel.Item
                    key={j}
                    id={"" + j}
                    className=" d-flex flex-row justify-content-center fade animation-none"
                    style={{
                        width: "100%",
                        height: "fit-content",
                        marginInline: "",
                        marginBlock: "",
                        paddingInline: "auto",
                    }}
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
                        <img className="img-fluid" 
                            autoFocus
                            height={500}
                            src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).jpg`}
                            alt=""
                        />
                    </picture>
                </Carousel.Item>
            );
        }
        return returnEls;
    }

    return (
        <div className="e">
            <Carousel
                controls
                indicators={false}
                autoFocus
                slide={false}
                style={{height: "500px", width: "100%", overflow: "hidden"}}
                fade
                className="m-0  p-0"
            >
                {images().map((image) => {
                    return image;
                })}
            </Carousel>
        </div>
    );
}
