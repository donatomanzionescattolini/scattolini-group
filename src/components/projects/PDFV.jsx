import React, {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

export default function PDFV(props) {
    // The URL of the PDF document
    const url = props.url;

    // The state variables for the current page number and the total number of pages
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    // The callback function for when the document is loaded successfully
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    // The callback function for when the page is loaded successfully
    function onPageLoadSuccess({pageNumber}) {
        setPageNumber(pageNumber);
    }

    // The callback function for when an error occurs while loading the document or the page
    function onLoadError(error) {
        console.error(error);
    }

    // The function for going to the previous page
    function goPrev() {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    }

    // The function for going to the next page
    function goNext() {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    }

    return (
        <div className="pdf-viewer flex-column d-flex justify-content-center align-items-center" id={'pdf-desarrollo'}>
            <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onLoadError}
                className="img-responsive img-container"
                width={500}
                height={500}
            >

                <Page
                    renderTextLayer={false}
                    pageNumber={pageNumber}
                    onLoadSuccess={onPageLoadSuccess}
                    onLoadError={onLoadError}

                ></Page>
                <div className="pdf-controls d-flex flex-row justify-content-around w-50 m-auto ">
                    <button onClick={goPrev}>Prev</button>
                    <span>
            Page {pageNumber} of {numPages}
          </span>
                    <button onClick={goNext}>Next</button>
                </div>
            </Document>
        </div>
    );
}
