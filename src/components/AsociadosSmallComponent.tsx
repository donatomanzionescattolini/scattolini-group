import "./EquipoSmall.css";
import {useNavigate} from "react-router-dom";
import { useTranslation } from "../i18n.tsx";

export default function AsociadosSmallComponent() {
    const nav = useNavigate();
    const { t } = useTranslation();
    return (
        <>
       {innerWidth <= 560 && <><br></br><br></br></>}
        <br></br>
            <h2 className="text-center mt-5">{t("nav.equipo")}</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>
            <div className="xcontainer d-flex justify-content-center">
                <img
                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/asociados2.png"
                    alt="Equipo"
                    className="image-responsive object-fit-cover mx-auto justify-content-center"
                    style={{maxWidth: "100%!important"}}
                />
                <div className="middle">
                    <p
                        onClick={() => nav("/asociados")} className="text">{t("pages.about.seeMore")}</p>
                </div>
            </div>
        </>
    );
}
