import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Areas from "../../objects/areas/Areas";

function AreasComponent() {
  return (
    <MDBContainer>
      <br></br>
      <h2 className="text-center mt-5">Áreas</h2>
      <hr className="hr hr-blurry w-50 mx-auto" />

      <MDBRow center>
        {Areas().map((area) => (
          <MDBCol xs={12} sm={12} md={6} lg={4} xl={4}>
            <div className="thumbnail">
              <Link to={`/areas/${area.name}/`}>
                <div
                  className="propiedades-img m-0 p-0"
                  style={{
                    background: `url('https://pagina-mama.s3.amazonaws.com/assets2/areas/${area.name}/thumbnail.webp')`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 15%",
                  }}
                ></div>
                <h4 className="text-center card-title m-2">{area.titulo}</h4>
              </Link>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default AreasComponent;
