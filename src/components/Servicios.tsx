import { useState, useEffect } from "react";
import {Card, CardBody, CardGroup, CardHeader, CardLink, CardText, CardTitle,} from "react-bootstrap";
import {useTranslation} from "../i18n.tsx";
import { RevealSection } from "../hooks/useScrollReveal.tsx";

export default function Servicios() {
    const {t} = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 560);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 560);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile && <><br/><br/></>}
            <br/>
            <RevealSection direction="up" delay={0}>
                <h2 className="text-center mt-5">{t("pages.services.title")}</h2>
                <hr className="hr hr-blurry w-50 mx-auto"/>
            </RevealSection>
            <br/>
            <CardGroup className="text-center" style={{"textTransform": "capitalize"}}>
                <RevealSection direction="up" delay={100}>
                    <Card className="m-xs-0 m-sm-0 m-md-2 m-lg-2 m-xl-2 h-100">
                        <CardHeader>
                            <CardTitle>
                                <span style={{color: "var(--color-gold)", marginRight: "0.5rem"}}>◆</span>
                                <h4 className="d-inline">{t("pages.services.realEstate")}</h4>
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText className="text-center">
                                {t("pages.services.realEstateDesc")}
                            </CardText>
                            <br/>
                            <CardLink
                                href="/contacto"
                                className="btn btn-outline-secondary"
                            >
                                {t("pages.services.moreInfo")}
                            </CardLink>
                        </CardBody>
                    </Card>
                </RevealSection>

                <RevealSection direction="up" delay={200}>
                    <Card className="m-2 h-100">
                        <CardHeader>
                            <CardTitle>
                                <span style={{color: "var(--color-gold)", marginRight: "0.5rem"}}>◆</span>
                                <h4 className="d-inline">{t("pages.services.propertyManagement")}</h4>
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                {t("pages.services.propertyManagementDesc")}
                            </CardText>
                            <br/>
                            <CardLink
                                href="/manzione-properties"
                                className="btn btn-outline-secondary"
                            >
                                {t("pages.services.moreInfo")}
                            </CardLink>
                        </CardBody>
                    </Card>
                </RevealSection>

                <RevealSection direction="up" delay={300}>
                    <Card className="m-2 h-100">
                        <CardHeader>
                            <CardTitle>
                                <span style={{color: "var(--color-gold)", marginRight: "0.5rem"}}>◆</span>
                                <h4 className="d-inline">{t("pages.services.interiorDesign")}</h4>
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                {t("pages.services.interiorDesignDesc")}
                            </CardText>
                            <br/>
                            <CardLink
                                href="https://www.manzionesdesign.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-secondary"
                            >
                                {t("pages.services.moreInfo")}
                            </CardLink>
                        </CardBody>
                    </Card>
                </RevealSection>
            </CardGroup>
        </>
    );
}
