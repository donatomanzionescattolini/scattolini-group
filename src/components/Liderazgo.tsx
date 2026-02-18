import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useTranslation } from "../i18n.tsx";

export default function Liderazgo() {
  const { t } = useTranslation();
  return (
    <MDBRow className="row  p-0 m-auto">
      <MDBCol
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        className="justify-content-center p-5 text-center"
      >
        <img
          src={"https://pagina-mama.s3.amazonaws.com/assets2/elda/elda.jpg"}
          alt={t("pages.leadership.imageAlt")}
          className="w-50 m-auto img-thumbnail"
        />
      </MDBCol>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4} className="px-auto py-5">
        <h4 className="text-center mt-5">
          {t("pages.leadership.subtitle")}
        </h4>
        <br></br>
        <p style={{ textIndent: "2em" }} className="mt-5">
          {t("pages.leadership.paragraph1")}
        </p>

        <p className="text-muted " style={{ textIndent: "2em" }}>
          {t("pages.leadership.paragraph2")}
        </p>
      </MDBCol>
      <MDBCol xs={12} sm={12} md={2} lg={2} xl={2}>
        <br></br>
      </MDBCol>
    </MDBRow>
  );
}
