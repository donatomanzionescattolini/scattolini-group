import React from "react";
import { Route } from "react-router-dom";
import FiveParkProject from "../../components/desarrollos/MiamiBeach/FiveParkProject";
import OneParkProject from "../../components/desarrollos/MiamiBeach/OneParkProject";
import SeventyTwoParkProject from "../../components/desarrollos/MiamiBeach/SeventyTwoParkProject";
import OraProject from "../../components/desarrollos/Brickell/OraProject";
import FourteenRiverDistrict from "../../objects/desarrollos/Brickell/FourteenRiverDistrict";
import FourteenRiverDistrictProject from "../../components/desarrollos/Brickell/FourteenRiverDistrictProject";
import EllaProject from "../../components/desarrollos/MiamiBeach/EllaProject";
import NexoProject from "../../components/desarrollos/MiamiBeach/NexoProject";
import PalmaProject from "../../components/desarrollos/MiamiBeach/PalmaProject.tsx";
import TheWilliamProject from "../../components/desarrollos/MiamiBeach/TheWilliamProject.tsx";
import SeventyTwoCarlyle from "../../objects/desarrollos/MiamiBeach/72Carlyle.tsx";
import SeventyTwoCarlyleProject from "../../components/desarrollos/MiamiBeach/SeventyTwoCarlyleProject.tsx";
import FaenaResidencesProject from "../../components/desarrollos/MiamiBeach/FaenaResidencesProject.tsx";

export default function MiamiBeachRoutes() {
  return (
    <React.Fragment>
      {" "}
      <Route element={<FiveParkProject />} path={"/desarrollos/five-park"} />
        <Route element ={<FaenaResidencesProject></FaenaResidencesProject>} path={"/desarrollos/faena-residences"}/>
      <Route
        element={<SeventyTwoParkProject />}
        path={"/desarrollos/72-park"}
      />
      <Route element={<OneParkProject />} path={"/desarrollos/one-park"} />
        <Route element={TheWilliamProject()} path={"/desarrollos/the-william"}/>
        <Route element={SeventyTwoCarlyleProject()} path={"/desarrollos/72-carlyle"}/>
      <Route
        element={<FourteenRiverDistrictProject />}
        path={"/desarrollos/14-river-district"}
      />
      <Route element={<OraProject />} path={"/desarrollos/ora"} />
      <Route element={<EllaProject/>} path={"/desarrollos/ella"} />
      <Route element={<NexoProject/>} path={"/desarrollos/nexo"} />
        <Route element={<PalmaProject/>} path={"/desarrollos/palma"} />
    </React.Fragment>
  );
}
