import {Col, Row} from "react-bootstrap";
import {useTranslation} from "../i18n";

export default function AliadosComponent() {
    const {t} = useTranslation();

    return (
        <>
            {innerWidth <= 560 && (
                <>
                    <br/>
                    <br/>
                </>
            )}
            <br/>
            <h2 className="text-center mt-5 display-6">{t("nav.aliados")}</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>
            <Row
                style={{width: "80vw", marginInline: "auto"}}
                className="p-5 d-flex flex-row flex-wrap justify-content-center align-items-center"
            >
                <Col xs={6} sm={6} md={4} lg={2} xl={2} className="p-3">
                    <a className="ally-logo-link" href="https://www.instagram.com/huehouseagency/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="ally-logo"
                            src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/hue-house.png"
                            alt={String(t("pages.aliados.hueHouseAlt") || "")}
                            width="100%"
                        />
                    </a>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2} xl={2} className="p-3">
                    <a className="ally-logo-link" href="https://www.manzionesdesign.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="ally-logo"
                            src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzionesdesign.png"
                            alt={String(t("pages.aliados.manzioneDesignAlt") || "")}
                            width="100%"
                        />
                    </a>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2} xl={2} className="p-3">
                    <a className="ally-logo-link" href="/manzione-properties/">
                        <img
                            className="ally-logo"
                            src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzioneproperties.webp"
                            alt={String(t("pages.aliados.manzionePropertiesAlt") || "")}
                            width="100%"
                        />
                    </a>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2} xl={2} className="p-3">
                    <a className="ally-logo-link" href="https://www.retimaca.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="ally-logo ally-logo--retimaca"
                            src="https://pagina-mama.s3.us-east-1.amazonaws.com/pagina-tio/logos/hardwood-retimaca-logo-transparent-bg.png"
                            alt={String(t("pages.aliados.hardwoodRetimacaAlt") || "")}
                            width="100%"
                        />
                    </a>
                </Col>
            </Row>
        </>
    );
}
