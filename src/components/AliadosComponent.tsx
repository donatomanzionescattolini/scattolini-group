import {Link} from "react-router-dom";
import {MDBCardLink, MDBCol, MDBRow,} from "mdb-react-ui-kit";
import { useTranslation } from "../i18n.tsx";

export default function AliadosComponent() {
    const { t } = useTranslation();
    return (
        <>
       {innerWidth <= 560 && <><br></br><br></br></>}
        <br></br>
            <h2 className="text-center mt-5 display-6">{t("nav.aliados")}</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>
            <MDBRow
                style={{width: "60vw", marginInline: "auto"}}
                className="p-5 d-flex flex-row flex-nowrap justify-content-center align-items-center"
            >
                <MDBCol xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Link to="#">
                        <img
                            src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/hue-house.png"
                            alt={t("pages.aliados.hueHouseAlt")}
                            width="100%"
                        />
                    </Link>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={12} lg={4} xl={4}>
                    {" "}
                    <Link to="https://www.manzionesdesign.com//">
                        <img
                            src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzionesdesign.png"
                            alt={t("pages.aliados.manzioneDesignAlt")}
                            width="100%"
                        />
                    </Link>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={12} lg={4} xl={4}>
                    <MDBCardLink href="/manzione-properties/">
                        <img
                            src="https://pagina-mama.s3.amazonaws.com/assets2/aliados/manzioneproperties.webp"
                            alt={t("pages.aliados.manzionePropertiesAlt")}
                            width="100%"
                        />
                    </MDBCardLink>
                </MDBCol>
            </MDBRow>
        </>
    );
}
