import "./App.scss";

import "bootstrap/dist/css/bootstrap.css";
import Areas from "./components/Areas";
import "material-components-web/dist/material-components-web.css";
import { Home } from "./Home";
import Contacto from "./components/Contacto.tsx";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import "material-components-web/dist/material-components-web.js";
import HomesteadComponent from "./components/areas/HomesteadComponent.tsx";
import DowntownComponent from "./components/areas/./DowntownComponent.tsx";
import BayHarborComponent from "./components/areas/BayHarborComponent.tsx";
import CoralGablesComponent from "./components/areas/CoralGablesComponent.tsx";
import CoconutGrove from "./components/areas/CoconutGrove";
import NorthBayVillageComponent from "./components/areas/NorthBayVillageComponent.tsx";
import DoralComponent from "./components/areas/DoralComponent.tsx";
import PinecrestComponent from "./components/areas/PinecrestComponent.tsx";
import SunnyIslesComponent from "./components/areas/SunnyIslesComponent.tsx";
import EdgewaterComponent from "./components/areas/EdgewaterComponent.tsx";
import MiamiBeachComponent from "./components/areas/MiamiBeachComponent.tsx";
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Aliados from "./components/Aliados";
import Liderazgo from "./components/Liderazgo.tsx";
import BrickellComponent from "./components/areas/BrickellComponent.tsx";
import LaBaiaNorthProject from "./components/desarrollos/BayHarbor/LaBaiaNorthProject.tsx";
import LaMaréProject from "./components/desarrollos/BayHarbor/LaMaréProject.tsx";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState } from "react";
import FloatingContactForm from "./components/FloatingContactForm.tsx";
import "./App.scss";
import {FloatingWhatsApp} from "react-floating-whatsapp";
export default function App() {
    // State variable to store the visibility of the floating element
    const [show, setShow] = useState(true);

    // Function to toggle the visibility of the floating element
    const toggleShow = () => {
        setShow(!show);
    };
    return (

            <BrowserRouter>
                <Nav />
                {show && (
                    <div
                        className={
                            "floating-element object-fit-cover"
                        }
                        style={{ background: "rgb(255,255,255,0.0)" }}
                    >
                        <MDBBtn
                            className="close-button"
                            onClick={toggleShow}
                            type={"button"}
                        >
                            Close
                        </MDBBtn>
                        <FloatingContactForm />
                    </div>
                )}

                <Routes>
                    {/*pestañas*/}
                    <Route element={<Home />} path="/" />
                    <Route element={<Aliados />} path="/aliados" />
                    <Route element={<Liderazgo />} path="/liderazgo" />
                    <Route element={<Contacto />} path="/contacto" />
                    <Route element={<DesarrollosTodos />} path={"/desarrollos"} />
                    <Route element={<Areas />} path="/areas" />

                    {/* areas */}
                    <Route element={<BrickellComponent />} path="/areas/brickell" />
                    <Route element={<DowntownComponent />} path="/areas/downtown" />
                    <Route element={<HomesteadComponent />} path="/areas/homestead" />
                    <Route element={<BayHarborComponent />} path="/areas/bay-harbor" />
                    <Route
                        element={<NorthBayVillageComponent />}
                        path="/areas/north-bay-village"
                    />
                    <Route
                        element={<CoralGablesComponent />}
                        path="/areas/coral-gables"
                    />
                    <Route element={<CoconutGrove />} path="/areas/coconut-grove" />
                    <Route element={<DoralComponent />} path="/areas/doral"></Route>
                    <Route
                        element={<PinecrestComponent />}
                        path="/areas/pinecrest"
                    ></Route>
                    <Route
                        element={<SunnyIslesComponent />}
                        path="/areas/sunny-isles"
                    ></Route>
                    <Route
                        element={<EdgewaterComponent />}
                        path="/areas/edgewater"
                    ></Route>
                    <Route
                        element={<MiamiBeachComponent />}
                        path="/areas/miami-beach"
                    ></Route>

                    {/* desarrollos
           */}

                    {/* Coral Gables */}
                    <Route
                        element={<TheAvenueProject />}
                        path={"/desarrollos/the-avenue"}
                    />

                    {/* BrickellComponent */}
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

                    {/* EdgewaterComponent */}
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
                    {/* EdgewaterComponent */}

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

                    <Route
                        element={<LaBaiaNorthProject />}
                        path={"/desarrollos/la-baia"}
                    />
                    <Route element={<LaMaréProject />} path={"/desarrollos/la-maré"} />
                </Routes>
                <FloatingWhatsApp phoneNumber={"13056139338"} chatMessage={"¿Cómo te puedo ayudar hoy?"} statusMessage={"Respuestas dentro de las primeras 24 horas"} placeholder={"Quisiera programar una llamada telefónica o una reunión con un agente para aprender más sobre el mercado inmobiliario en el Sur de la Florida y analizar las opciones disponibles para mí "} accountName={"Scattolini Group"} notificationSound className={"floating-whatsapp"}/>
                <Footer />
            </BrowserRouter>

    );
}
