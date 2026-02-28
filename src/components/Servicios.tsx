import {Card, CardBody, CardGroup, CardHeader, CardLink, CardText, CardTitle,} from "react-bootstrap";
import {useTranslation} from "../i18n.tsx";

export default function Servicios() {
    const {t} = useTranslation();
    return (
        <>
            {innerWidth <= 560 && <><br></br><br></br></>}
            <br></br>
            <h2 className="text-center mt-5">{t("pages.services.title")}</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>

            <br/>

            <CardGroup className="text-center" style={{"textTransform": "capitalize"}}>
                <Card className="m-xs-0 m-sm-0 m-md-2 m-lg-2 m-xl-2">
                    <CardHeader>
                        <CardTitle>
                            <h4>{t("pages.services.advisory")}</h4>
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText className="text-center">
                            {t("pages.services.advisoryDesc")}
                        </CardText>
                        <br/>
                        <CardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"

                        >
                            {t("pages.services.moreInfo")}
                        </CardLink>
                    </CardBody>
                </Card>

                <Card className="m-2">
                    <CardHeader>
                        <CardTitle>
                            <h4>{t("pages.services.propertyManagement")}</h4>
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            {t("pages.services.propertyManagementDesc")}
                        </CardText>
                        <br/>
                        <CardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            {t("pages.services.moreInfo")}
                        </CardLink>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup className="text-center">
                <Card className="m-2">
                    <CardHeader>
                        <CardTitle>{t("pages.services.sales")}</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            {t("pages.services.salesDesc")}
                        </CardText>
                        <br/>
                        <CardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            {t("pages.services.moreInfo")}
                        </CardLink>
                    </CardBody>
                </Card>

                <Card className="m-2">
                    <CardHeader>
                        <CardTitle>{t("pages.services.purchase")}</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            {t("pages.services.purchaseDesc")}
                        </CardText>
                        <br/>
                        <CardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            {t("pages.services.moreInfo")}
                        </CardLink>
                    </CardBody>
                </Card>
            </CardGroup>
        </>
    );
}
