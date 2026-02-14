import {
    MDBCard,
    MDBCardBody,
    MDBCardGroup,
    MDBCardHeader,
    MDBCardLink,
    MDBCardText,
    MDBCardTitle,
} from "mdb-react-ui-kit";
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

            <MDBCardGroup className="text-center" style={{ "textTransform": "capitalize"}}>
                <MDBCard className="m-xs-0 m-sm-0 m-md-2 m-lg-2 m-xl-2">
                    <MDBCardHeader>
                        <MDBCardTitle>
                            <h4>{t("pages.services.advisory")}</h4>
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText className="text-center">
                            {t("pages.services.advisoryDesc")}
                        </MDBCardText>
                        <br/>
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                            
                        >
                            {t("pages.services.moreInfo")}
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className="m-2">
                    <MDBCardHeader>
                        <MDBCardTitle>
                            <h4>{t("pages.services.propertyManagement")}</h4>
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            {t("pages.services.propertyManagementDesc")}
                        </MDBCardText>
                        <br/>
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            {t("pages.services.moreInfo")}
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
            <MDBCardGroup className="text-center">
                <MDBCard className="m-2">
                    <MDBCardHeader>
                        <MDBCardTitle>{t("pages.services.sales")}</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            {t("pages.services.salesDesc")}
                        </MDBCardText>
                        <br/>
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            {t("pages.services.moreInfo")}
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className="m-2">
                    <MDBCardHeader>
                        <MDBCardTitle>{t("pages.services.purchase")}</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            {t("pages.services.purchaseDesc")}
                        </MDBCardText>
                        <br/>
                        <MDBCardLink
                            href="/contacto"
                            className="btn btn-outline-secondary btn-outline-secondary"
                        >
                            {t("pages.services.moreInfo")}
                        </MDBCardLink>
                    </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </>
    );
}
