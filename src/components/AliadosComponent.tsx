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
                    <a href="https://www.instagram.com/huehouseagency/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/hue-house.png"
                            alt={String(t("pages.aliados.hueHouseAlt") || "")}
                            width="100%"
                        />
                    </a>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2} xl={2} className="p-3">
                    <a href="https://www.manzionesdesign.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzionesdesign.png"
                            alt={String(t("pages.aliados.manzioneDesignAlt") || "")}
                            width="100%"
                        />
                    </a>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2} xl={2} className="p-3">
                    <a href="/manzione-properties/">
                        <img
                            src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzioneproperties.webp"
                            alt={String(t("pages.aliados.manzionePropertiesAlt") || "")}
                            width="100%"
                        />
                    </a>
                </Col>
                <Col xs={6} sm={6} md={4} lg={3} xl={3} className="p-3">
                    <a href="https://www.retimaca.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://www.retimaca.com/logo.svg"
                            alt={String(t("pages.aliados.hardwoodRetimacaAlt") || "")}
                            width="100%"
                            style={{mixBlendMode: "multiply"}}
                        />
                    </a>
                </Col>
            </Row>
        </>
    );
}
