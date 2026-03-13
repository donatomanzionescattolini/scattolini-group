import {useEffect, useLayoutEffect, useMemo, useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getDesarrollosForArea} from "../../objects/desarrollos/Desarrollos";
import Desarrollo from "../../models/desarrollos/Desarrollo";
import {resolveLocalizedValue, useTranslation} from "../../i18n.tsx";
import {Area} from "../../models/areas/Area.tsx";
import AreasComponent from "../AreasComponent.tsx";
import ContactFormComponent from "../ContactFormComponent.tsx";

interface AreaProps {
    area: Area;
}

export default function AreaTemplate(props: AreaProps) {
    const {t, lang} = useTranslation();
    const area = props.area;
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => setInnerWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const getLocalizedString = (field: unknown, fallback = ""): string => {
        const resolved = resolveLocalizedValue<string>(field as string | Record<string, string | undefined> | undefined, lang);
        if (typeof resolved === "string") return resolved;
        if (typeof field === "string") return field;
        return fallback;
    };

    const getLocalizedArray = (field: unknown, fallback: string[] = []): string[] => {
        const resolved = resolveLocalizedValue<string[]>(field as string[] | Record<string, string[] | undefined> | undefined, lang);
        if (Array.isArray(resolved)) return resolved;
        if (Array.isArray(field)) return field as string[];
        return fallback;
    };

    const nombre = area.name;
    const titulo = getLocalizedString(area.titulo) || nombre;
    const slogan = getLocalizedString(area.slogan);
    const descripcion = getLocalizedArray(area.descripcion);
    const photoAlt = String(t("pages.areas.photoAlt")).replace("{title}", String(titulo || nombre));
    const images = [];
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const areaDesarrollos = useMemo<Set<Desarrollo>>(
        () => getDesarrollosForArea(area, lang),
        [area, lang]
    );
    for (let i = 1; i <= area.numberOfImages; i++) {
        images.push(
            <Image
                key={`carousel-${nombre}-${i}`}
                fluid
                rounded
                src={`https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/carousel-${i}.webp`}
            />
        );
    }
    const firstImage = `https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/firstImage.jpg`;
    return (
        <>
            <div
                className="bg-image d-flex justify-content-center align-items-center"
                style={{
                    backgroundImage: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${nombre}/banner.webp')`,
                    height: "30vh",
                }}
            >
                <h1 className="text-white">{titulo}</h1>
            </div>
            <div className="container-fluid text-center">
                <h2 className="text-center mt-5">{slogan}</h2>
                <hr className="hr hr-blurry w-50 mx-auto"/>
            </div>
            <Row className="px-4">
                <Col md={1} sm={1} className=""></Col>
                <Col
                    md={5}
                    sm={10}
                    className="py-5 px-3 d-flex flex-column justify-content-center align-items-start"
                >
                    {descripcion.map((paragraph: string) => {
                        return (
                            <p
                                className={"text-muted mx-3"}
                                key={descripcion.indexOf(paragraph) + 1}
                                style={{textIndent: "1.5em"}}
                            >
                                {paragraph}
                                <br/>
                                <br/>
                            </p>
                        );
                    })}
                </Col>
                <Col
                    md={5}
                    sm={10}
                    className="d-flex justify-content-center align-items-center"
                >
                    <img src={firstImage} alt={photoAlt}/>
                </Col>
                <Col className="" md={1} sm={1}></Col>
            </Row>
            <div className="city-firstcarousel">{images.map((image) => image)}</div>
            {/* <DividerFirstComponent /> */}
            <div className="propiedades">
                {areaDesarrollos.size > 0 && (
                    <div>
                        <h3 className="text-center">{t("pages.project.propertiesInArea")}</h3>
                    </div>
                )}
                <br></br>
                <Row className="justify-content-center">
                    {[...areaDesarrollos.values()].map((desarrollo) => {
                        return (
                            <Col key={desarrollo.nombre} xs={6} sm={6} md={6} lg={4} xl={4}>
                                <Link to={`/desarrollos/${desarrollo.nombre}/`}>
                                    <div
                                        className="propiedades-img p-0 m-0"
                                        style={{
                                            background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/${desarrollo.nombre}.webp')`,
                                            height: "200px",
                                            width: "100%",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                        }}
                                    ></div>

                                    <h4 className="text-center card-title m-2 ">
                                        {getLocalizedString(desarrollo.titulo) ||
                                            desarrollo.nombre
                                                .split("-")
                                                .map(
                                                    (word: string) =>
                                                        word.charAt(0).toUpperCase() + word.substring(1)
                                                )
                                                .join(" ")}
                                    </h4>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
            <div className="skew-c"></div>
            <section className="colour-block">
                <AreasComponent/>
            </section>
            <div className="skew-cc"></div>
            <section className="white-block">
                <h2>{t("pages.project.contactUsToday")}</h2>
                {innerWidth <= 768 && (
                    <Container>
                        <ContactFormComponent/>
                    </Container>
                )}
                {innerWidth > 768 && (
                    <Container
                        fluid
                        className="d-flex justify-content-center w-100 p-0 m-0"
                    >
                        <ContactFormComponent/>
                    </Container>
                )}
            </section>
            <div className="skew-c"></div>
        </>
    );
}
