import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useLayoutEffect } from "react";
import { useTranslation } from "../../i18n.tsx";

export default function ManzioneProperties() {
  const { t } = useTranslation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MDBRow className=" p-5 m-0">
      <MDBCol
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={7}
        className="align-items-start p-5 text-center"
      >
        <img
          src={
            "https://pagina-mama.s3.amazonaws.com/assets2/asociados/monica.jpg"
          }
          alt={t("pages.manzione.imageAlt")}
          className="w-50 m-auto img-thumbnail"
        />
      </MDBCol>
      <MDBCol
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={3}
        className=" m-0 p-auto m-auto"
      >
        <h4 className="text-center">
          {t("pages.manzione.title")}
        </h4>

        <br></br>
        <p className=" mx-0 my-0" style={{ textIndent: 50 }}>
          {t("pages.manzione.description")}
        </p>
      </MDBCol>
    </MDBRow>
  );
}
