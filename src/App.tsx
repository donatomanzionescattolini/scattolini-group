import "./App.scss";
import "vite/modulepreload-polyfill";
import "bootstrap/dist/css/bootstrap.css";
import AreasComponent from "./components/AreasComponent.tsx";
import "material-components-web/dist/material-components-web.css";
import { Home } from "./Home";
import Contacto from "./components/ContactoComponent.tsx";
import "material-components-web/dist/material-components-web.js";
import DesarrollosTodos from "./components/desarrollos/DesarrollosComponent.tsx";
import Equipo from "./components/AsociadosComponent.tsx";
import ManzioneProperties from "./components/aliados/ManzioneProperties";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavNav from "./components/NavNav.tsx";
import AliadosComponent from "./components/AliadosComponent.tsx";
import Liderazgo from "./components/Liderazgo.tsx";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import AreasRoutes from "./routes/AreasRoutes.tsx";
import DesarrollosRoutes from "./routes/DesarrollosRoutes.tsx";
import { useLayoutEffect } from "react";
import ContactFormComponent from "./components/ContactFormComponent.tsx";
import ContactoComponent from "./components/ContactoComponent.tsx";

import { useTranslation } from "./i18n.tsx";

export default function App() {
  const { t } = useTranslation();
  useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <BrowserRouter>
      <NavNav />
      

      <Routes>
        {/*pestañas*/}
        <Route element={<Home />} path="/" />
        <Route element={<AliadosComponent />} path="/aliados" />
        <Route element={<Liderazgo />} path="/liderazgo" />
        <Route element={<ContactoComponent />} path="/contacto" />
        <Route element={<DesarrollosTodos />} path={"/desarrollos"} />
        <Route element={<AreasComponent />} path="/areas" />

        {DesarrollosRoutes()}

        <Route element={<Equipo />} path={"/asociados"} />

        <Route element={<ManzioneProperties />} path={"/manzione-properties"} />
        {AreasRoutes()}
      </Routes>
      <FloatingWhatsApp
        
        phoneNumber={"13056139338"}
        chatMessage={t("whatsapp.status")}
        statusMessage={t("whatsapp.status")}
        avatar="https://pagina-mama.s3.amazonaws.com/assets2/asociados/elda-whatsapp.png"
        placeholder={t("whatsapp.placeholder")}
        accountName={"Scattolini Group"}
        notificationSound
        className={"floating-whatsapp"}
      />
      <Footer />
    </BrowserRouter>
  );
}
