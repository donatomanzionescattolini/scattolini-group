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
          alt="Elda"
          className="w-50 m-auto img-thumbnail"
        />
      </MDBCol>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4} className="px-auto py-5">
        <h4 className="text-center mt-5">
          {t("pages.liderazgo.title", "Expert team, personalized service")}
        </h4>
        <br></br>
        <p style={{ textIndent: "2em" }} className="mt-5">
          {t(
            "pages.liderazgo.paragraph1",
            "Scattolini Group is led by Elda Scattolini, a real estate agent with 20 years of experience in the South Florida market. Elda has helped hundreds of clients from around the world reach their real estate goals with professionalism, integrity, and dedication."
          )}
        </p>

        <p className="text-muted " style={{ textIndent: "2em" }}>
          {t(
            "pages.liderazgo.paragraph2",
            "Elda and her team are experts in South Florida, with deep knowledge of neighborhoods, schools, amenities, and market trends. They will guide you through every step of the process, from finding the right property to negotiating the best price and closing efficiently."
          )}
        </p>
      </MDBCol>
      <MDBCol xs={12} sm={12} md={2} lg={2} xl={2}>
        <br></br>
      </MDBCol>
    </MDBRow>
  );
}
