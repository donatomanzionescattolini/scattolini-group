import React from "react";
import { Route } from "react-router-dom";
import FiveParkProject from "../../components/desarrollos/MiamiBeach/FiveParkProject";
import OneParkProject from "../../components/desarrollos/MiamiBeach/OneParkProject";
import SeventyTwoParkProject from "../../components/desarrollos/MiamiBeach/SeventyTwoParkProject";
import OraProject from "../../components/desarrollos/Brickell/OraProject";
import FourteenRiverDistrict from "../../objects/desarrollos/Brickell/FourteenRiverDistrict";
import FourteenRiverDistrictProject from "../../components/desarrollos/Brickell/FourteenRiverDistrictProject";
import EllaProject from "../../components/desarrollos/MiamiBeach/EllaProject";

export default function MiamiBeachRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route element={<FiveParkProject />} path={"/desarrollos/five-park"} />
      <Route
        element={<SeventyTwoParkProject />}
        path={"/desarrollos/72-park"}
      />
      <Route element={<OneParkProject />} path={"/desarrollos/one-park"} />
      <Route
        element={<FourteenRiverDistrictProject />}
        path={"/desarrollos/14-river-district"}
      />
      <Route element={<OraProject />} path={"/desarrollos/ora"} />
      <Route element={<EllaProject/>} path={"/desarrollos/ella"} />
    </React.Fragment>
  );
}
