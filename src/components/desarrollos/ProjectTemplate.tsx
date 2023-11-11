import "bootstrap/dist/css/bootstrap.min.css";
import SlideshowGalleryDesarrollo from "./SlideshowGalleryDesarrollo";
import Areas from "../areas/Areas";
import "@material/banner/dist/mdc.banner.min.css";
import {caracteristicas, ProjectParams} from "../../models/ProjectParams";

import ContactForm from "../ContactForm";

import * as React from "react";
import {useState} from "react";
import {
    MDBAccordion,
    MDBAccordionItem,
    MDBContainer,
    MDBRow,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

export default function ProjectTemplate(params: ProjectParams) {
    const [nombre] = useState(params.nombre);
    const [propiedades] = useState(params.properties);
    const [direccion] = useState(params.direccion);
    const [numberOfImages] = useState(params.numberOfImages);
    const [tabVisible, setTabVisible] = useState("brochure");
    let vid: string | JSX.Element = params.video
        ? params.video
        : `/assets2/desarrollos/${nombre}/video.mp4`;
    const [video] = useState<string | JSX.Element>(vid);

    const [caract] = useState(params.caracteristicas as caracteristicas);
    const [titulo] = useState(params.titulo);
    const [banner] = useState(params.banner);
    const [subtitulo] = useState(params.subtitulo);
    const [introduccion] = useState(params.introduccion);
    const [CaracteristicasAmenidades] = useState(
        () => (params.caracteristicas as caracteristicas).amenidades
    );
    const [CaracteristicasEdificio] = useState(() => caract.edificio);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [CaracteristicasResidencias] = useState(() => caract.residencias);

    window.onresize = () => {
        setInnerWidth(window.innerWidth);
    };

    function openTab(docType: string) {
        switch (docType) {
            case "brochure":
                tabVisible === "brochure"
                    ? setTabVisible("none")
                    : setTabVisible("brochure");
                break;

            case "hoja":
                tabVisible === "hoja" ? setTabVisible("none") : setTabVisible("hoja");
                break;
            case "planos":
                tabVisible === "planos"
                    ? setTabVisible("none")
                    : setTabVisible("planos");
                break;
            default:
                setTabVisible("none");
                break;
        }
    }

    return (
        <>
            <a id="top"></a>
            <MDBContainer
                fluid
                jumbotron
                id={"banner"}
                className=""
                style={{height: "300px"}}
            >
                <header
                    className="mdc-banner d-flex row flex-nowrap overflow-none  justify-content-center h-100 m-0 p-0 responsive">
                    {banner && (
                        <div
                            id="banner"
                            className="p-0 m-0 well"
                            autoFocus
                            style={{
                                backgroundImage: `url("../../../public/assets2/desarrollos/${nombre}/banner.jpg")`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPositionX: "center",
                            }}
                        />
                    )}
                    {!banner && (
                        <>
                            <div
                                autoFocus
                                className="col-4 m-0 p-0 responsive"
                                style={{
                                    height: "250px",
                                    backgroundImage: `url(../../../public/assets2/desarrollos/${nombre}/banner-left.jpg)`,
                                    backgroundSize: "cover",
                                }}
                            />
                            <div
                                autoFocus
                                style={{
                                    height: "250px",
                                    backgroundImage: `url('/assets2/desarrollos/${nombre}/banner-center.jpg')`,
                                    backgroundSize: "cover",
                                    backgroundPositionX: "center",
                                    backgroundPositionY: "top",
                                }}
                                className="col-4"
                            />
                            <div
                                autoFocus
                                style={{
                                    height: "250px",
                                    backgroundImage: `url('/assets2/desarrollos/${nombre}/banner-right.jpg')`,
                                    backgroundSize: "cover",
                                }}
                                className="col-4 m-0 p-0 responsive"
                            />
                        </>
                    )}
                </header>
            </MDBContainer>
            <div className="skew-c"></div>
            <section className="colour-block">
                <MDBContainer>
                    {
                        <h2 className=" text-center animate-charcter" style={{}}>
                            {titulo}
                        </h2>
                    }
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                    {<h4 className="mt-0 text-center">{subtitulo}</h4>}
                    <div className="p-xl-5 p-lg-5 p-md-4 p-sm-4 p-xs-3    text-justify responsive">
                        <p className=" mx-lg-5 mx-xl-5 mx-md-1 mx-sm-1 mx-xs-1 px-5 font-16 text-center">
                            {(introduccion as Array<string>).map((par: string) => (
                                <>
                                    {par}
                                    <br></br>
                                </>
                            ))}
                        </p>
                    </div>
                </MDBContainer>
            </section>
            <div className="skew-cc"></div>
            <section className="white-block">
                {typeof video !== "string" ? (
                    video
                ) : (
                    <video
                        width="auto"
                        height="500"
                        controls={true}
                        autoPlay={true}
                        autoFocus={true}
                        className={
                            "autoplay controls mx-auto my-0 p-0 d-flex flex-row justify-content-center"
                        }
                    >
                        {video}
                        <source
                            width={700}
                            height={500}
                            src={`/assets2/desarrollos/${nombre}/video.mp4?autoplay=1&controls=0`}
                            type="video/mp4"
                            className="d-flex flex-row justify-content-center align-items-center"
                        />
                    </video>
                )}
            </section>
            <div className="skew-c"></div>
            <section className="colour-block">
                <MDBContainer small responsive centered>
                    <br></br>
                    <div>
                        <h3 className="text-center">Características</h3>
                    </div>
                    <hr className="hr hr-blurry w-50 mx-auto"/>

                    <MDBAccordion id="accordion" className="m-5 w-fit-content">
                        <MDBAccordionItem
                            collapseId={1}
                            headerTitle="Edificio"
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={"text-align-center"}
                        >
                            {CaracteristicasEdificio}
                        </MDBAccordionItem>

                        <MDBAccordionItem
                            collapseId={2}
                            headerTitle="Residencias"
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={"text-center"}
                        >
                            {CaracteristicasResidencias}
                        </MDBAccordionItem>

                        <MDBAccordionItem
                            collapseId={3}
                            headerTitle="Amenidades"
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            className={"text-center"}
                        >
                            {CaracteristicasAmenidades as JSX.Element}
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBContainer>
            </section>
            <div className="skew-cc"></div>
            <section className="white-block">
                <MDBContainer>
                    <br></br>

                    <div>
                        <h3 className="text-center">Galería Fotográfica</h3>
                    </div>
                    <hr className="hr hr-blurry w-50 mx-auto"/>

                    <br></br>

                    <SlideshowGalleryDesarrollo
                        name={nombre}
                        numberOfImages={numberOfImages as number}
                    />
                    {/* <SlideshowGalleryDesarrollo2
          name={nombre}
          numberOfImages={numberOfImages as number}
        /> */}
                </MDBContainer>
            </section>
            <div className="skew-c"></div>

            {/* <MDBContainer>
        <iframe
          width="450"
          height="250"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCuQ4dtFPvp6nmhSUmAB4HNk6NzAjTvxWo&q=${direccion}`}
          allowFullScreen
        ></iframe> */}
            {/* </div> */}
            <section className="colour-block">
                <MDBContainer className="embed-responsive">
                    <br></br>
                    <div>
                        <h3 className="text-center">Documentos De Interés</h3>
                    </div>
                    <hr className="hr hr-blurry w-50 mx-auto"/>

                    <br></br>
                    <MDBTabs>
                        <MDBTabsItem
                            style={{color: "#2b2a2e!important"}}
                            title="Brochure"
                        >
                            <MDBTabsLink onClick={() => openTab("brochure")} href="#docs">
                                {" "}
                                Brochure
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                style={{color: "#2b2a2e!important"}}
                                onClick={() => openTab("hoja")}
                                href="#docs"
                            >
                                Hoja Informativa
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                style={{color: "#2b2a2e!important"}}
                                aria-keyshortcuts=""
                                href="#docs"
                                onClick={() => openTab("planos")}
                            >
                                Planos
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                    {/*{tabVisible === "none" &&*/}
                    {/*    (<><h1 className="display-6 text-center"><small className={"text-muted "}>Aprenda mas sobre este maravilloso proyecto!</small></h1>*/}
                    {/*    <br></br>*/}
                    {/*    <h1 className="display-3 text-center">Selecciona una de las fichas en la esquina izquierda de esta seccion </h1></>)*/}
                    {/*}*/}
                    {/* {(tabVisible === "brochure" ||
            tabVisible === "hoja" ||
            tabVisible === "planos") && (
            <object
              height={"100%"}
              //   {/* const file =
              //   fs.readFileSync(path.resolve("public/assets/Bonus_1.pdf")).toString("base64"); */}

                    {/* <PDFV
              //     url={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
      
        {/* <embed
              //     src={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
              //     width="800px"
              //     height="2100px" */}
                    {/* //   /> */}
                    {/* // </object> */}
                    {/* data={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
              style={{ width: "100%", height: 500 }}
            > */}
                    <MDBTabsContent>
                        <MDBTabsPane show={tabVisible === "brochure"}>
                            <object
                                data={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                                type="application/pdf"
                                width="100%"
                                height="500px"
                            >
                                <big>
                                    <p>
                                        No se puede mostrar el archivo PDF.{" "}
                                        <Link
                                            target="_blank"
                                            className="text-decoration-underline"
                                            download
                                            to={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                                        >
                                            Descárgalo
                                        </Link>{" "}
                                        en vez.
                                    </p>
                                </big>
                            </object>
                        </MDBTabsPane>
                        <MDBTabsPane show={tabVisible === "hoja"}>
                            <object
                                data={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                                type="application/pdf"
                                width="100%"
                                height="500px"
                            >
                                <big>
                                    <p>
                                        No se puede mostrar el archivo PDF.{" "}
                                        <Link
                                            target="_blank"
                                            className="text-decoration-underline"
                                            download
                                            to={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                                        >
                                            Descárgalo
                                        </Link>{" "}
                                        en vez.
                                    </p>
                                </big>
                            </object>
                        </MDBTabsPane>
                        <MDBTabsPane show={tabVisible === "planos"}>
                            <object
                                data={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                                type="application/pdf"
                                width="100%"
                                height="500px"
                            >
                                <big>
                                    <p>
                                        No se puede mostrar el archivo PDF.{" "}
                                        <Link
                                            target="_blank"
                                            className="text-decoration-underline"
                                            download
                                            to={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                                        >
                                            Descárgalo
                                        </Link>{" "}
                                        en vez.
                                    </p>
                                </big>
                            </object>
                        </MDBTabsPane>
                        <MDBTabsPane show>
                            <div className="d-flex justify-content-center font-size-lg">
                                <Link
                                    className="btn btn-outline-secondary btn-small"
                                    type="button"
                                    target="#top"
                                    to={`/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                                    download
                                >
                                    Descargar
                                </Link>
                            </div>
                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBContainer>
            </section>
            <div className="skew-cc"></div>
            <section className="white-block">
                <MDBContainer>
                    <br/>
                    <br></br>
                    <div>
                        <h3 className="text-center mb-1">Propiedades en el Área</h3>
                    </div>
                    <hr className="hr hr-blurry w-50 mx-auto"/>

                    <br></br>
                    <MDBRow className="flex-row flex-wrap">{propiedades}</MDBRow>
                </MDBContainer>
                {/* <div> */}
                {/* <h3 className="text-center">Otras Áreas</h3> */}
                {/* </div> */}
                <br></br>
            </section>
            <div className="skew-c"></div>
            <section className="colour-block">
                <Areas/>
            </section>
            <div className="skew-cc"></div>
            <section className="white-block">
                {innerWidth <= 768 && (
                    <MDBContainer>
                        <ContactForm projectName={titulo as string}/>
                    </MDBContainer>
                )}
                {innerWidth > 768 && (
                    <MDBContainer
                        fluid
                        className="d-flex justify-content-center w-100 p-0 m-0"
                    >
                        <ContactForm projectName={titulo as string}/>
                    </MDBContainer>
                )}
            </section>
            <div className="skew-c"></div>
        </>
    );
}
