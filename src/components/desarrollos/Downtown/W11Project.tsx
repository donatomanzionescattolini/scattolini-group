import "bootstrap/dist/css/bootstrap.min.css";

import * as React from "react";
import {useState} from "react";
import SlideshowGalleryDesarrollo from "../SlideshowGalleryDesarrollo";
import Areas from "../../areas/Areas";
import {caracteristicas, ProjectParams} from "../../../models/ProjectParams";
import PropiedadesDowntown from "../Downtown/PropiedadesDowntown";
import {MDBAccordion, MDBAccordionItem, MDBCard, MDBCardBody, MDBContainer, MDBRow,} from "mdb-react-ui-kit";

export function W11Project(): JSX.Element {
    const params: ProjectParams = {
        properties: <PropiedadesDowntown/>,
        nombre: "w11",
        numberOfImages: 12,
        titulo: "West Eleventh Residences",
        subtitulo: "Lleva la vida a una nueva dirección nunca antes imaginada",
        introduccion: [
            "La vida moderna está en perpetuo movimiento. Siempre estamos encendidos la mudanza. Las residencias en West Eleventh fueron creadas con esa noción en mente. Una experiencia con verdadera flexibilidad de vida para dueños",

            "West Eleventh Residences ofrece las primeras residencias de condominios de lujo administradas de manera centralizada que brindan a los propietarios la opción de hospedar 365 días en Airbnb.",

            "West Eleventh ha reinventado la propiedad de viviendas en condominios de lujo al brindar una verdadera flexibilidad de vida. Cada residencia completamente amueblada ofrece un lugar al que llamar hogar y la " +
            "oportunidad de ser anfitrión exclusivo en Airbnb.",
            "Todas las comodidades fueron consideradas en West Eleventh, desde las infinitas indulgencias disponibles en el entretenimiento experiencial de tres niveles y el salón culinario hasta un nivel de comodidades vibrante con una piscina estilo centro turístico con áreas de salón privadas. Todo esto, anclado por una presencia callejera que emana naturalmente la energía del emocionante vecindario circundante del edificio.  ",
        ],
        caracteristicas: {
            amenidades: <></>,
            edificio: (
                <>
                    <ul>
                        <li>44 Historias / 659 residencias de estudios y 1 dormitorio</li>
                        <li>1050 N Miami Ave, Miami, FL 33136, Estados Unidos</li>
                        <li>
                            Gestión totalmente centralizada de la propiedad y servicios de
                            alojamiento
                        </li>
                        <li>
                            Posibilidad de hospedar 365 días en Airbnb. El alojamiento está
                            sujeto a las leyes locales y otras restricciones
                        </li>
                        <li>
                            Vistas del horizonte de Miami, la Bahía de Biscayne y el Océano
                            Atlántico
                        </li>
                        <li>
                            30,000 SF Tri-Level Experiential Entertainment and Culinary Hall
                        </li>
                        <li>Restaurante de autor</li>
                        <li>
                            Vibrante nivel de comodidades con una piscina estilo centro
                            turístico con áreas de salón privadas
                        </li>
                        <li>Centro de fitness y bienestar de última generación</li>
                        <li>Espacio de vestíbulo residencial moderno y de alto diseño</li>
                        <li>Colección curada de instalaciones de arte personalizadas</li>
                        <li>
                            Cuenta con la última tecnología de "construcción inteligente"
                        </li>
                    </ul>
                </>
            ),
            residencias: (
                <>
                    <ul>
                        <li>
                            Selecciones de pisos incluidas con las especificaciones
                            recomendadas por Cotofana Designs
                        </li>
                        <li>
                            Armarios totalmente empotrados en los dormitorios principales con
                            todas las estanterías y cajones preinstalados para una comodidad
                            absoluta
                        </li>
                        <li>Tonos personalizados</li>
                        <li>Construido en lavadora y secadora de primera línea</li>
                        <li>
                            Cada residencia ofrece un nivel de eficiencia sin precedentes a
                            través de una experiencia de tecnología de hogar inteligente PMG
                            para una personalización perfecta con solo tocar un botón.
                        </li>
                        <li>
                            Todas las residencias vienen equipadas con un paquete de
                            iluminación contemporáneo, que incluye iluminación empotrada,
                            atenuadores y control de iluminación.
                        </li>
                        <li>
                            Precableado para comunicaciones de alta velocidad, múltiples
                            líneas telefónicas y cable
                        </li>
                        <li>Balcones franceses en residencias selectas</li>
                        <li>
                            Cocinas totalmente integradas con encimeras personalizadas,
                            salpicaduras y un fregadero contemporáneo de montaje inferior
                        </li>
                        <li>
                            El paquete de electrodomésticos de primera línea incluye
                            microondas, lavavajillas, horno empotrado y refrigerador
                        </li>
                        <li>
                            Gabinetes de cocina y baño importados y personalizados por
                            Italkraft
                        </li>
                        <li>Accesorios, características y accesorios de baño WaterWorks</li>
                        <li>
                            Encimeras de baño personalizadas y pisos y paredes terminados en
                            áreas húmedas
                        </li>
                        <li>Duchas acristaladas</li>
                    </ul>
                </>
            ),
        },
    };
    const [nombre] = useState(params.nombre);
    const [numberOfImages] = useState(params.numberOfImages);
    const [tabVisible, setTabVisible] = useState("brochure");
    let vid: string = `https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/video.mov`;
    const [video] = useState<string>(vid);
    const [introduccion] = useState(params.introduccion);
    const [titulo] = useState(params.titulo);
    const [subtitulo] = useState(params.subtitulo);

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

    const [caract] = useState<caracteristicas>(
        params.caracteristicas as caracteristicas
    );
    const [CaracteristicasAmenidades] = useState(() => caract.amenidades);
    const [CaracteristicasEdificio] = useState(() => caract.edificio);

    const [CaracteristicasResidencias] = useState(() => caract.residencias);

    return (
        <>
            <div id={"banner"} style={{height: "250px"}}>
                <header
                    className="d-flex row flex-nowrap overflow-none  justify-content-center h-100 m-0 p-0 responsive">
                    <div
                        className="col-4 m-0 p-0 responsive"
                        style={{
                            height: "250px",
                            backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner-left.jpg')`,
                            backgroundSize: "cover",
                        }}
                    />
                    <div
                        style={{
                            height: "250px",
                            backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner-center.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="col-4"
                    />
                    <div
                        style={{
                            height: "250px",
                            backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/banner-right.jpg')`,
                            backgroundSize: "cover",
                        }}
                        className="col-4 m-0 p-0 responsive"
                    />
                </header>
            </div>
            <MDBContainer>
                <br></br>
                {
                    <h2 className=" text-center animate-charcter" style={{}}>
                        {titulo}
                    </h2>
                }
                <hr className="hr hr-blurry w-50 mx-auto"/>

                {<h4 className="mt-0 text-center ">{subtitulo}</h4>}

                <div className="p-xl-5 p-lg-5 p-md-4 p-sm-4 p-xs-3    text-justify responsive">
                    <p className="mx-lg-5 mx-xl-5 mx-md-1 mx-sm-1 mx-xs-1 px-5 font-16">
                        {introduccion.map((par: string) => (
                            <>
                                {par}
                                <br></br>
                                <br/>
                            </>
                        ))}
                    </p>
                </div>
            </MDBContainer>
            <div className={"d-flex flex-row justify-content-center"}>
                <iframe
                    autoFocus
                    width="1167"
                    height="658"
                    src="https://www.youtube.com/embed/rXgu-cBzULg?autoplay=1"
                    title="West Eleventh Residences Miami with AirBnB (2027)"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <MDBContainer>
                <br></br>

                <div>
                    <h3 className="text-center">Características</h3>
                </div>
                <hr className="hr hr-blurry w-50 mx-auto"/>

                <br></br>

                <div>
                    <MDBAccordion>
                        <MDBAccordionItem headerTitle="Edificio" icon="home" collapseId={0}>
                            {CaracteristicasEdificio}
                            Edificio
                        </MDBAccordionItem>

                        <MDBAccordionItem collapseId={1} headerTitle="Residencias">
                            {CaracteristicasResidencias}
                        </MDBAccordionItem>
                    </MDBAccordion>
                    {/*<Accordion>*/}
                    {/*    <AccordionHeader*/}
                    {/*        aria-controls="panel3a-content"*/}
                    {/*        id="panel3a-header"*/}
                    {/*    >*/}
                    {/*        Amenidades*/}
                    {/*    </AccordionHeader>*/}
                    {/*    <AccordionBody>*/}
                    {/*        {CaracteristicasAmenidades}*/}
                    {/*    </AccordionBody>*/}
                    {/*</Accordion>*/}
                </div>
            </MDBContainer>
            <MDBContainer>
                <br></br>

                <div>
                    <h3 className="text-center">Galería Fotográfica</h3>
                </div>
                <hr className="hr hr-blurry w-50 mx-auto"/>

                <br></br>

                <SlideshowGalleryDesarrollo
                    name={nombre}
                    numberOfImages={numberOfImages}
                />
            </MDBContainer>
            <MDBContainer>
                <br></br>

                <div>
                    <h3 className="text-center">Documentos De Interés</h3>
                </div>
                <hr className="hr hr-blurry w-50 mx-auto"/>

                <br></br>

                <MDBContainer
                    fluid
                    className="d-flex flex-row justify-content-center embed-responsive-item"
                    id={"docs"}
                >
                    <MDBCard autoFocus={true} className="">
                        <MDBCardBody className={" card-body justifty-content-center"}>
                            <div className="card-header ">
                                <ul className="nav nav-tabs card-header-tabs">
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="nav-link " onClick={() => openTab("brochure")}*/}
                                    {/*       href="#docs"> Brochure</a>*/}
                                    {/*</li>*/}
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            onClick={() => openTab("hoja")}
                                            href="#docs"
                                        >
                                            Hoja Informativa
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#docs"
                                            onClick={() => openTab("planos")}
                                        >
                                            Planos
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*{tabVisible === "none" &&*/}
                            {/*    (<><h1 className="display-6 text-center"><small className={"text-muted "}>Aprenda mas sobre este maravilloso proyecto!</small></h1>*/}
                            {/*    <br></br>*/}
                            {/*    <h1 className="display-3 text-center">Selecciona una de las fichas en la esquina izquierda de esta seccion </h1></>)*/}
                            {/*}*/}
                            {(tabVisible === "brochure" ||
                                tabVisible === "hoja" ||
                                tabVisible === "planos") && (
                                <object width={500} height={500}>
                                    <embed
                                        className={""}
                                        type="application/pdf"
                                        src={`https://pagina-mama.s3.amazonaws.com/assets2/desarrollos/${nombre}/pdfs/${tabVisible}.pdf`}
                                    />
                                </object>
                            )}
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
            </MDBContainer>
            <MDBContainer>
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>
                <hr className="hr hr-blurry w-50 mx-auto"/>

                <br></br>
                <MDBRow className="flex-row flex-wrap">
                    <PropiedadesDowntown/>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                {/* <div> */}
                {/* <h3 className="text-center">Otras Áreas</h3> */}
                {/* </div> */}
                <hr className="hr hr-blurry w-50 mx-auto"/>

                <br></br>
                <MDBRow className="flex-row flex-wrap">
                    <Areas/>
                </MDBRow>
            </MDBContainer>
            <div></div>
        </>
    );
}
