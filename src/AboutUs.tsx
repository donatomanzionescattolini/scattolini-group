import { useTranslation } from "./i18n.tsx";

export function AboutUs() {
    const { t } = useTranslation();
    return (
        <>
            <h2
                style={{textIndent: "20px", marginBottom: `4%!important`}}
                className=" text-center pt-0 mt-0 display-6 justify"
            >


                {t("pages.about.title")}
            </h2>
            <hr className="hr hr-blurry text-center w-50 mx-auto"/>
            {window.innerWidth > 768 && (
                <>
                    <br/>
                    <br/>
                    <br/>
                </>
            )}
            <div className="row p-0 m-0">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 px-5">
                    <h4 className="text-center mt-0">{t("pages.about.whoWeAre")}</h4>
                    {window.innerWidth < 768 && <br></br>}
                    <p className="text-muted px-lg-5 px-xl-5 px-sm-0 px-md-0 pt-sm-4 pt-md-4  pt-xs-4 text-align-justify">
                        {t("pages.about.paragraph")}
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pe-5 mb-0 pb-0 px-5">
                    {window.innerWidth < 768 && (
                        <>
                            <br/>
                            <br/>
                        </>
                    )}
                    <h4 className="mb-4 text-center">{t("pages.about.requestConsultation")}</h4>
                    <div>
                        <p className="text-muted  text-align-left font-size-md">
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
                </div>
            </div>
        </>
    );
}
