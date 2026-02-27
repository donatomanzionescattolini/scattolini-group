import React from "react";
import { Route } from "react-router-dom";
import FourteenRiverDistrictProject from "../../components/desarrollos/Brickell/FourteenRiverDistrictProject";
import OraProject from "../../components/desarrollos/Brickell/OraProject";
import FaenaResidencesProject from "../../components/desarrollos/MiamiBeach/FaenaResidencesProject";
import FiveParkProject from "../../components/desarrollos/MiamiBeach/FiveParkProject";
import NexoProject from "../../components/desarrollos/MiamiBeach/NexoProject";
import OneParkProject from "../../components/desarrollos/MiamiBeach/OneParkProject";
import PalmaProject from "../../components/desarrollos/MiamiBeach/PalmaProject";
import SeventyTwoCarlyleProject from "../../components/desarrollos/MiamiBeach/SeventyTwoCarlyleProject";
import SeventyTwoParkProject from "../../components/desarrollos/MiamiBeach/SeventyTwoParkProject";
import TheWilliamProject from "../../components/desarrollos/MiamiBeach/TheWilliamProject";
import EllaProject from "../../components/desarrollos/MiamiBeach/EllaProject";

export default function MiamiBeachRoutes() {
  return (
    <>
      <Route element={<FiveParkProject />} path="/desarrollos/five-park" />
      <Route element={<FaenaResidencesProject />} path="/desarrollos/faena-residences" />
      <Route element={<SeventyTwoParkProject />} path="/desarrollos/72-park" />
      <Route element={<OneParkProject />} path="/desarrollos/one-park" />
      <Route element={<TheWilliamProject />} path="/desarrollos/the-william" />
      <Route element={<SeventyTwoCarlyleProject />} path="/desarrollos/72-carlyle" />
      <Route element={<FourteenRiverDistrictProject />} path="/desarrollos/14-river-district" />
      <Route element={<OraProject />} path="/desarrollos/ora" />
      <Route element={<EllaProject />} path="/desarrollos/ella" />
      <Route element={<NexoProject />} path="/desarrollos/nexo" />
      <Route element={<PalmaProject />} path="/desarrollos/palma" />
    </>
  );
}
