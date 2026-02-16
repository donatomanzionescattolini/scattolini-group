import {
    Card,
    Col,
    Row,
} from "react-bootstrap";
import { useTranslation } from "../i18n.tsx";

export default function Servicios() {
    const { t } = useTranslation();
    return (
        <>
       {innerWidth <= 560 && <><br></br><br></br></>}
        <br></br>
            <h2 className="text-center mt-5">{t("pages.services.title")}</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>

            <br/>

            <Row className="text-center" style={{ "textTransform": "capitalize"}}>
                <Col md={6} className="m-xs-0 m-sm-0 m-md-2 m-lg-2 m-xl-2">
                <Card>
                    <Card.Header>
                        <Card.Title>
                            <h4>{t("pages.services.advisory")}</h4>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="text-center">
                            {t("pages.services.advisoryDesc")}
                        </Card.Text>
                        <br/>
                        <a
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                            
                        >
                            {t("pages.services.moreInfo")}
                        </a>
                    </Card.Body>
                </Card>
                </Col>

                <Col md={6} className="m-2">
                <Card>
                    <Card.Header>
                        <Card.Title>
                            <h4>{t("pages.services.propertyManagement")}</h4>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {t("pages.services.propertyManagementDesc")}
                        </Card.Text>
                        <br/>
                        <a
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            {t("pages.services.moreInfo")}
                        </a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={6} className="m-2">
                <Card>
                    <Card.Header>
                        <Card.Title>{t("pages.services.sales")}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {t("pages.services.salesDesc")}
                        </Card.Text>
                        <br/>
                        <a
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            {t("pages.services.moreInfo")}
                        </a>
                    </Card.Body>
                </Card>
                </Col>

                <Col md={6} className="m-2">
                <Card>
                    <Card.Header>
                        <Card.Title>{t("pages.services.purchase")}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {t("pages.services.purchaseDesc")}
                        </Card.Text>
                        <br/>
                        <a
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            {t("pages.services.moreInfo")}
                        </a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </>
    );
}
