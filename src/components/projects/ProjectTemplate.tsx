import "bootstrap/dist/css/bootstrap.min.css";
import SlideshowGalleryDesarrollo from "./SlideshowGalleryDesarrollo";
import * as React from "react";
import {JSX, ReactNode, useLayoutEffect, useState} from "react";
import {
    MDBAccordion,
    MDBAccordionItem,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {ProjectParams,} from "../../models/desarrollos/ProjectParams.tsx";
import ContactFormComponent from "../../components/ContactFormComponent.tsx";
import AreasComponent from "../../components/AreasComponent.tsx";
import Desarrollos from "./DesarrollosComponent.tsx";
export default function ProjectTemplate(paramz: Readonly<ProjectParams>) {
    const params = paramz.project;
    const [nombre] = useState(params.name);
    const [area] = useState(params.area);
    const [numberOfImages] = useState(params.numberOfImages);
    const [tabVisible, setTabVisible] = useState("brochure");
    const vid: string | Element | (() => string | Element) | ReactNode = params.video
        ? params.video
        : `https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/video.mp4`;
    const [video] = useState< ReactNode>(vid && (typeof vid === "string") ? <MDBContainer>
    <div className="ratio ratio-16x9">
      <iframe
        src={vid}
        title="Vimeo video"
        allowFullScreen
      ></iframe>
    </div>
  </MDBContainer> as ReactNode:vid as ReactNode);
    const [titulo] = useState(params.title);
    const [banner] = useState(params.banner);
    const [subtitulo] = useState(params.subtitle);
    const [introduccion] = useState(params.introduction);
    const [CaracteristicasAmenidades] = useState(
       params.displayAmenities()
    );
    const [CaracteristicasEdificio] = useState(params.displayCaracteristicasEdificio());
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [CaracteristicasResidencias] = useState(params.displayCaracteristicasResidencias());
    const [pdfUrl] = useState(
        `https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`
    );
    window.onresize = () => {
        setInnerWidth(window.innerWidth);
    };
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                className="py-0 my-0 overflow-y-hidden   object-fit-cover"
            >
                <header
                    className="mdc-banner d-flex row flex-nowrap   justify-content-center h-100 m-0 p-0 responsive overflow-hidden">
                    {innerWidth < 610 && (banner && (
                        <div
                            id="banner"
                            className="p-0 m-0 well"
                            autoFocus
                            style={{
                                backgroundImage: `url("https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner.jpg")`,
                                backgroundSize: "250%",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        />
                    )) || (banner && <div
                            id="banner"
                            className="p-0 m-0 well"
                            autoFocus
                            style={{
                                backgroundImage: `url("https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner.jpg")`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                height: "50rem"
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
                                    backgroundImage: `url(../../..https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner-left.jpg)`,
                                    backgroundSize: "cover",
                                }}
                            />
                            <div
                                autoFocus
                                style={{
                                    height: "250px",
                                    backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner-center.jpg')`,
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
                                    backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner-right.jpg')`,
                                    backgroundSize: "cover",
                                }}
                                className="col-4 m-0 p-0 responsive"
                            />
                        </>
                    )}
                </header>
            </MDBContainer>
            <div className="skew-c"></div>
            <section className="white-block py-5  mt-5">
                <MDBContainer fluid className="container-fluid text-center "><h1 className="display-4">{titulo}</h1>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                    <h5
                        className="subtitle text-lead w-75 mx-auto my-0 py-0  fs-4"><i>{subtitulo}</i></h5>
                </MDBContainer>
                <MDBRow className={"row w-75 mx-auto mt-5 bg-transparent py-5"}>
                    <MDBCol xs={12} sm={12} md={6} lg={6} xl={6}
                            className={"align-content-center justify-content-center"}>
                        {(introduccion as Array<string>).map((par: string) =>
                            <p key={introduccion!.indexOf(par)+1}>{par}</p>)
                        }
                    </MDBCol>
                    <MDBCol xs={12} sm={12} md={6} lg={6} xl={6} className={"p-md-5 p-sm-2"}>
                        <img className="img-fluid img-thumbnail" alt={area ? area.name : "no photo"}
                             src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${area ? area.name : ""}/${nombre}.webp`}
                        />
                    </MDBCol>
                </MDBRow>
            </section>
            <div className="skew-cc"></div>
            <section className="colour-block p-auto">
                {video }
            </section>
            <div className="skew-c"></div>
            <section className="white-block py-5  ">
                <MDBContainer fluid small responsive centered>
                    <br></br>
                    <br/>
                    <div>
                        <h4 className="text-center display-6     my-5 title">Características</h4>
                    </div>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                    <MDBAccordion id="accordion" className="m-5 w-fit-content " flush>
                        <MDBAccordionItem
                            collapseId={1}
                            headerClassName="fs-5"
                            headerTitle="Edificio"
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={"fs-5 w-75 m-auto"}
                        >
                            {CaracteristicasEdificio as ReactNode}
                        </MDBAccordionItem>
                        <MDBAccordionItem
                            collapseId={2}
                            headerClassName="fs-5"
                            headerTitle="Residencias"
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className={"fs-5 w-75 m-auto"}
                        >
                            {CaracteristicasResidencias as ReactNode}
                        </MDBAccordionItem>
                        <MDBAccordionItem
                            collapseId={3}
                            headerClassName="fs-5"
                            headerTitle="Amenidades"
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            className={"fs-5 w-75 m-auto"}
                        >
                            {CaracteristicasAmenidades as JSX.Element}
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBContainer>
            </section>
            <div className="skew-cc"></div>
            <section className="colour-block py-5  " id="galeria-proyectos">
                <div>
                    <h4 className="text-center title display-6 my-5">Galería Fotográfica</h4>
                </div>
                <hr className="hr hr-blurry w-50 mx-auto"/>
                <br></br>
                <SlideshowGalleryDesarrollo
                    name={nombre ? nombre : ""}
                    numberOfImages={numberOfImages as number}
                />
            </section>
            <div className="skew-c"></div>
            <section className="white-block py-5  embed-responsive">
                <br></br>
                <br></br>
                <div>
                    <h4 className="text-center mb-1 display-6     my-5">Documentos De Interés</h4>
                </div>
                <hr className="hr hr-blurry w-50 mx-auto"/>
                <br></br>
                <MDBTabs fill>
                    <MDBTabsItem className={" "}
                                 title="Brochure"
                    >
                        <MDBTabsLink className="fs-5" onClick={() => openTab("brochure")} href="#docs">
                            {" "}
                            Brochure
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className={""}>
                        <MDBTabsLink className="fs-5"
                                     onClick={() => openTab("hoja")}
                                     href="#docs"
                        >
                            Hoja Informativa
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className={""}>
                        <MDBTabsLink className="fs-5"
                                     aria-keyshortcuts=""
                                     href="#docs"
                                     onClick={() => openTab("planos")}
                        >
                            Planos
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>
                    <MDBTabsPane show={tabVisible === "brochure"}>
                        <object
                            data={innerWidth > 768 ? pdfUrl : ""}
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
                                        to={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
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
                            data={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
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
                                        to={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
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
                            data={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
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
                                        to={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
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
                                to={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                                download
                            >
                                Descargar
                            </Link>
                        </div>
                    </MDBTabsPane>
                </MDBTabsContent>
            </section>
            <div className="skew-cc"></div>
            <section className="colour-block py-5  ">
                <Desarrollos desarrollo={params} area={params.area}/>
            </section>
            <div className="skew-c"></div>
            <section className="white-block py-5  ">
                <AreasComponent currentArea={params.area}/>
            </section>
            <div className="skew-cc"></div>
            <section className="colour-block py-5  ">
                <MDBContainer
                    className="d-flex justify-content-center w-100 p-0 m-0"
                >
                    <ContactFormComponent projectName={titulo as string}/>
                </MDBContainer>
            </section>
            <div className="skew-c"></div>
        </>
    );
}
