import { useState, useEffect } from "react";
import {useTranslation} from "./i18n.tsx";
import { RevealSection } from "./hooks/useScrollReveal.tsx";

export function AboutUs() {
    const {t} = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <RevealSection direction="up" delay={0}>
                <h2
                    style={{textIndent: "20px", marginBottom: "2rem"}}
                    className="text-center pt-0 mt-0 display-6 justify"
                >
                    {t("pages.about.title")}
                </h2>
                <hr className="hr hr-blurry text-center w-50 mx-auto"/>
            </RevealSection>

            {!isMobile && <div style={{height: "2rem"}} />}

            <div className="row p-0 m-0" style={{paddingTop: isMobile ? "1rem" : "2rem"}}>
                <RevealSection direction="left" delay={100} className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 px-5">
                    <h4 className="text-center mt-0 mb-3">{t("pages.about.whoWeAre")}</h4>
                    {isMobile && <br />}
                    <p className="text-muted px-lg-5 px-xl-5 px-sm-0 px-md-0 pt-sm-4 pt-md-4 pt-xs-4 text-align-justify" style={{lineHeight: "1.8"}}>
                        {t("pages.about.paragraph")}
                    </p>
                </RevealSection>

                <RevealSection direction="right" delay={200} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pe-5 mb-0 pb-0 px-5">
                    {isMobile && <><br/><br/></>}
                    <h4 className="mb-4 text-center">{t("pages.about.requestConsultation")}</h4>
                    <div>
                        <p className="text-muted text-align-left font-size-md" style={{lineHeight: "1.7"}}>
                            {t("pages.about.consultationText")}
                        </p>
                    </div>
                    <div>
                        <a
                            type="button"
                            className="btn btn-outline-secondary mt-3"
                            href="tel:3056139338#banner"
                        >
                            {t("pages.about.callUs")}
                        </a>
                    </div>
                </RevealSection>
            </div>
        </>
    );
}
