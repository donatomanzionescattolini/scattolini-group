import { MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Propiedadeshomestead() {
  return (
    <>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
        <Link to="/desarrollos/silverland-estates/">
          <div
            className="propiedades-img p-0 m-0"
            style={{
              background:
                "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/homestead/silverland-estates.webp')",
              backgroundSize: "cover",
            }}
          ></div>

          <h4 className="text-center card-title m-2 ">Silverland Estates</h4>
        </Link>
      </MDBCol>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
        <Link to="/desarrollos/sedona-estates/">
          <div
            className="propiedades-img m-0 p-0"
            style={{
              background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/homestead/sedona-estates.webp')",
              backgroundSize: "cover",
            }}
          ></div>
          <h4 className="text-center card-title m-2">Sedona Estates</h4>
        </Link>
      </MDBCol>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
        <Link to="/desarrollos/salerno-estates/">
          <div
            className="propiedades-img m-0 p-0"
            style={{
              background:
                "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/homestead/salerno-estates.webp')",
              backgroundSize: "cover",
            }}
          ></div>
          <h4 className="text-center card-title m-2">Salerno Estates</h4>
        </Link>
      </MDBCol>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
        <Link to="/desarrollos/oasis/">
          <div
            className="propiedades-img m-0 p-0"
            style={{
              background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/homestead/oasis.webp')",
              backgroundSize: "cover",
            }}
          ></div>
          <h4 className="text-center card-title m-2">Oasis</h4>
        </Link>
      </MDBCol>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
        <Link to="/desarrollos/alba/">
          <div
            className="propiedades-img m-0 p-0"
            style={{
              background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/homestead/alba.webp')",
              backgroundSize: "cover",
            }}
          ></div>
          <h4 className="text-center card-title m-2">Alba</h4>
        </Link>
      </MDBCol>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
        <Link to="/desarrollos/terra-sol/">
          <div
            className="propiedades-img p-0 m-0"
            style={{
              background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/homestead/terra-sol.webp')",
              backgroundSize: "cover",
            }}
          ></div>

          <h4 className="text-center card-title m-2 ">Terra Sol</h4>
        </Link>
      </MDBCol>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
        <Link to="/desarrollos/parc-villas/">
          <div
            className="propiedades-img m-0 p-0"
            style={{
              background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/homestead/parc-villas.webp')",
              backgroundSize: "cover",
            }}
          ></div>
          <h4 className="text-center card-title m-2">Parc Villas</h4>
        </Link>
      </MDBCol>
      <MDBCol xs={12} sm={12} md={4} lg={4} xl={4}>
        <Link to="/desarrollos/park-square/">
          <div
            className="propiedades-img m-0 p-0"
            style={{
              background: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/homestead/park-square.webp')",
              backgroundSize: "cover",
            }}
          ></div>
          <h4 className="text-center card-title m-2">Park Square</h4>
        </Link>
      </MDBCol>
    </>
  );
}
