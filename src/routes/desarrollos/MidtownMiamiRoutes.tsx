import React from "react";
import { Route } from "react-router-dom";
import MidtownParkResidencesProject from "../../components/desarrollos/MidtownMiami/MidtownParkResidencesProject";
import JeanGeorgesMiamiTropicResidencesProject from "../../components/desarrollos/MidtownMiami/JeanGeorgesMiamiTropicResidencesProject";
import TheStandardResidencesProject from "../../components/desarrollos/MidtownMiami/TheStandardResidencesProject";

export default function MidtownMiamiRoutes() {
  return <React.Fragment>
    <Route path="/desarrollos/midtown-park-residences" element={<MidtownParkResidencesProject />} />
    <Route path="/desarrollos/jean-georges-miami-tropic-residences" element={<JeanGeorgesMiamiTropicResidencesProject/>  } />
    <Route path="/desarrollos/the-standard-residences" element={<TheStandardResidencesProject/>} />
  </React.Fragment>;
}
