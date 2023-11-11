import "./App.scss";

import "bootstrap/dist/css/bootstrap.css";
import Areas from "./components/Areas";
import "material-components-web/dist/material-components-web.css";
import { Home } from "./Home";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import "material-components-web/dist/material-components-web.js";
import Homestead from "./components/areas/Homestead";
import Downtown from "./components/areas/Downtown";
import BayHarbor from "./components/areas/BayHarbor";
import CoralGables from "./components/areas/CoralGables";
import CoconutGrove from "./components/areas/CoconutGrove";
import NorthBayVillage from "./components/areas/NorthBayVillage";
import Doral from "./components/areas/Doral";
import Pinecrest from "./components/areas/Pinecrest";
import SunnyIsles from "./components/areas/SunnyIsles";
import Edgewater from "./components/areas/Edgewater";
import MiamiBeach from "./components/areas/MiamiBeach";
import DesarrollosTodos from "./components/desarrollos/Desarrollos";
import { FourteenTwentyEightProject } from "./components/desarrollos/Brickell/FourteenTwentyEightProject";
import { StRegisProject } from "./components/desarrollos/SunnyIsles/StRegisProject";
import Equipo from "./components/Asociados";
import { TheWellProject } from "./components/desarrollos/BayHarbor/TheWellProject";
import { CiprianiProjec } from "./components/desarrollos/Downtown/CiprianiProject";
import { W11Project } from "./components/desarrollos/Downtown/W11Project";
import AstonMartinProject from "./components/desarrollos/Downtown/AstonMartinProject";
import { TheEditionResidences } from "./components/desarrollos/Edgewater/TheEditionResidencesProject";
import CasaBellaProject from "./components/desarrollos/Downtown/CasaBellaProject";
import WaldorfAstoriaProject from "./components/desarrollos/Downtown/WaldorfAstoriaProject";
import ShomaBayProject from "./components/desarrollos/NorthBayVillage/ShomaBayProject";
import OraProject from "./components/desarrollos/Brickell/OraProject";
import BaccaratResidences from "./components/desarrollos/Brickell/BaccaratResidences";
import FourteenRiverDistrict from "./components/desarrollos/Brickell/FourteenRiverDistrict";
import DomusProject from "./components/desarrollos/Brickell/DomusProject";
import ManzioneProperties from "./components/aliados/ManzioneProperties";
import LoftyProject from "./components/desarrollos/Brickell/LoftyProject";
import TheVillaProject from "./components/desarrollos/Edgewater/TheVillaProject";
import VitaProject from "./components/desarrollos/CoconutGrove/VitaProject";
import OriginProject from "./components/desarrollos/BayHarbor/OriginProject";
import TheElserProject from "./components/desarrollos/Downtown/TheElserProject";
import AriaReserveProject from "./components/desarrollos/Edgewater/AriaReserveProject";
import MissoniBaiaProject from "./components/desarrollos/Edgewater/MissoniBaiaProject";
import VidaProject from "./components/desarrollos/Edgewater/VidaProject";
import FiveParkProject from "./components/desarrollos/MiamiBeach/FiveParkProject";
import SeventyTwoParkProject from "./components/desarrollos/MiamiBeach/SeventyTwoParkProject";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import OneParkProject from "./components/desarrollos/MiamiBeach/OneParkProject";
import PineParkVillasProject from "./components/desarrollos/Pinecrest/PineParkVillasProject";
import CentrisProject from "./components/desarrollos/Pinecrest/CentrisProject";
import BentleyResidencesProject from "./components/desarrollos/SunnyIsles/BentleyResidencesProject";
import TheMansionsAtAcqualinaProject from "./components/desarrollos/SunnyIsles/TheMansionsAtAcqualinaProject";
import TheAvenueProject from "./components/desarrollos/CoralGables/TheAvenueProject";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Aliados from "./components/Aliados";
import Liderazgo from "./components/Liderazgo.tsx";
import Brickell from "./components/areas/Brickell.tsx";

function Contacto() {
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <a id="top"></a>
      <Nav />
      <main className={" p-0 m-0"}>
        <Routes>
          {/*pestañas*/}
          <Route element={<Home />} path="/" />
          <Route element={<Aliados />} path="/aliados" />
          <Route element={<Liderazgo />} path="/liderazgo" />
          <Route element={<Contacto />} path="/contacto" />
          <Route element={<DesarrollosTodos />} path={"/desarrollos"} />
          <Route element={<Areas />} path="/areas" />

          {/* areas */}
          <Route element={<Brickell />} path="/areas/brickell" />
          <Route element={<Downtown />} path="/areas/downtown" />
          <Route element={<Homestead />} path="/areas/homestead" />
          <Route element={<BayHarbor />} path="/areas/bay-harbor" />
          <Route
            element={<NorthBayVillage />}
            path="/areas/north-bay-village"
          />
          <Route element={<CoralGables />} path="/areas/coral-gables" />
          <Route element={<CoconutGrove />} path="/areas/coconut-grove" />
          <Route element={<Doral />} path="/areas/doral"></Route>
          <Route element={<Pinecrest />} path="/areas/pinecrest"></Route>
          <Route element={<SunnyIsles />} path="/areas/sunny-isles"></Route>
          <Route element={<Edgewater />} path="/areas/edgewater"></Route>
          <Route element={<MiamiBeach />} path="/areas/miami-beach"></Route>

          {/* desarrollos
           */}

          {/* Coral Gables */}
          <Route
            element={<TheAvenueProject />}
            path={"/desarrollos/the-avenue"}
          />

          {/* Brickell */}
          <Route
            element={<FourteenTwentyEightProject />}
            path="/desarrollos/1428-brickell"
          />
          <Route
            element={<BaccaratResidences />}
            path="/desarrollos/baccarat"
          />
          <Route element={<TheWellProject />} path={"/desarrollos/the-well"} />
          <Route
            element={<TheElserProject />}
            path={"/desarrollos/the-elser"}
          />

          {/* Edgewater */}
          <Route
            element={<AriaReserveProject />}
            path={"/desarrollos/aria-reserve"}
          />
          <Route
            element={<MissoniBaiaProject />}
            path={"/desarrollos/missoni-baia"}
          />
          <Route element={<VidaProject />} path={"/desarrollos/vida"} />

          {/* Sunny Isles */}
          <Route path="/desarrollos/st-regis" element={<StRegisProject />} />
          <Route
            element={<BentleyResidencesProject />}
            path="/desarrollos/bentley-residences"
          />
          <Route
            element={<TheMansionsAtAcqualinaProject />}
            path="/desarrollos/the-mansions-at-acqualina"
          />

          <Route path="/desarrollos/cipriani" element={<CiprianiProjec />} />
          <Route element={<W11Project />} path={"/desarrollos/w11"} />
          <Route
            element={<AstonMartinProject />}
            path={"/desarrollos/aston-martin"}
          />
          <Route
            element={<TheEditionResidences />}
            path={"/desarrollos/edition-residences"}
          />
          <Route
            element={<CasaBellaProject />}
            path={"/desarrollos/casa-bella"}
          />
          <Route
            element={<WaldorfAstoriaProject />}
            path={"/desarrollos/waldorf-astoria"}
          />
          <Route
            element={<ShomaBayProject />}
            path={"/desarrollos/shoma-bay"}
          />
          <Route element={<DomusProject />} path={"/desarrollos/domus"} />
          <Route
            element={<FourteenRiverDistrict />}
            path={"/desarrollos/14-river-district"}
          />
          <Route element={<OraProject />} path={"/desarrollos/ora"} />
          <Route element={<LoftyProject />} path={"/desarrollos/lofty"} />
          {/* Edgewater */}

          <Route
            element={<TheVillaProject />}
            path={"/desarrollos/the-villa"}
          />
          {/* Coconut Grove */}
          <Route element={<VitaProject />} path={"/desarrollos/vita"} />

          {/* Bay Harbor Islands */}
          <Route element={<VitaProject />} path={"/desarrollos/vita"} />
          <Route element={<OriginProject />} path={"/desarrollos/origin"} />

          <Route element={<Equipo />} path={"/asociados"} />

          <Route
            element={<ManzioneProperties />}
            path={"/manzione-properties"}
          />

          {/* Miami Beach */}

          <Route
            element={<FiveParkProject />}
            path={"/desarrollos/five-park"}
          />
          <Route
            element={<SeventyTwoParkProject />}
            path={"/desarrollos/72-park"}
          />
          <Route element={<OneParkProject />} path={"/desarrollos/one-park"} />
          {/* Pembroke Pines */}
          <Route
            element={<PineParkVillasProject />}
            path={"/desarrollos/pine-park-villas"}
          />
          <Route element={<CentrisProject />} path={"/desarrollos/centris"} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
