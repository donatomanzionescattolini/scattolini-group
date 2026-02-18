import {Carousel} from "react-bootstrap";

import React, {useState} from "react";
import { useTranslation } from "../../i18n.tsx";

interface Props {
    name: string;
    numberOfImages: number;
}

export default function SlideshowGalleryDesarrollo(props: Props) {
    const { t } = useTranslation();
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
                    <picture style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <source
                            srcSet={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).JPEG`}
                        />
                        <source
                            srcSet={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).jpeg`}
                        />
                        <source
                            srcSet={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).png`}
                        />
                        <source
                            srcSet={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).webp`}
                        />
                        <img
                            style={{ maxWidth: '100%', maxHeight: '500px', width: 'auto', height: 'auto', objectFit: 'contain' }}
                            src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${name}/image-gallery/image (${j}).jpg`}
                            alt={String(t("pages.project.galleryImageAlt")).replace("{index}", String(j))}
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
