import { useState, useEffect } from "react";
import "./EquipoSmall.css";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "../i18n.tsx";
import { RevealSection } from "../hooks/useScrollReveal.tsx";

export default function AsociadosSmallComponent() {
    const nav = useNavigate();
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
                <h2 className="text-center mt-5">{t("nav.equipo")}</h2>
                <hr className="hr hr-blurry w-50 mx-auto"/>
            </RevealSection>
            <RevealSection direction="up" delay={150}>
                <div className="xcontainer d-flex justify-content-center">
                    <img
                        src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/asociados2.png"
                        alt={String(t("nav.equipo") || "")}
                        className="image-responsive object-fit-cover mx-auto justify-content-center"
                        style={{maxWidth: "100%"}}
                    />
                    <div className="middle">
                        <p onClick={() => nav("/asociados")} className="text">{t("pages.about.seeMore")}</p>
                    </div>
                </div>
            </RevealSection>
        </>
    );
}
