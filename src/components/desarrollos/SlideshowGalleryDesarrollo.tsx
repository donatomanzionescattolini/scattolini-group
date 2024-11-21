import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

interface PropsSlideshow {
    name: string;
    numberOfImages: number;
}
const SlideshowGalleryDesarrollo = (props:PropsSlideshow) => {
    return (
        <MDBCarousel className={"vw-75 mx-auto"}  slide showControls fade>
            {/* Slide 1 */}
            <>
            {[...Array(props.numberOfImages).keys()].map(index=>

            <MDBCarouselItem
                key={index+1}
                className="w-75 mx-auto d-block h-75 my-auto img-fluid img-thumbnail"
                itemId={index+1}
                src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${props.name}/image-gallery/image (${index+1}).jpg`}/>

                // alt={props.name+" image #"+(index+1)}
            )}
                </>{/*<h5>Third Slide Title</h5>*/}
                {/*<p>Third slide description goes here.</p>*/}
        </MDBCarousel>

    );
};

export default SlideshowGalleryDesarrollo;
