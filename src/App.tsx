import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "material-components-web/dist/material-components-web.css";
import ContactoComponent from "./components/ContactoComponent.tsx";
import DesarrollosTodos from "./components/desarrollos/DesarrollosComponent.tsx";
import ManzioneProperties from "./components/aliados/ManzioneProperties";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import Liderazgo from "./components/Liderazgo.tsx";
import AreasRoutes from "./routes/AreasRoutes.tsx";
import React, {useLayoutEffect} from "react";
import AliadosComponent from "./components/AliadosComponent.tsx";
import AreasComponent from "./components/AreasComponent.tsx";
import Equipo from "./components/AsociadosComponent.tsx";
import Login from "./components/auth/Login.tsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.tsx";
import Editor from "./components/editor/Editor.tsx";
import Footer from "./components/Footer.tsx";
import {AuthProvider} from "./contexts/AuthContext.tsx";
import Home from "./Home.tsx";
import {useTranslation} from "./i18n.tsx";
import DesarrollosRoutes from "./routes/DesarrollosRoutes.tsx";
import {FloatingWhatsApp} from "react-floating-whatsapp";
import FloatingLangToggle from "./components/FloatingLangToggle.tsx";

export default function App() {
    const {t} = useTranslation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <BrowserRouter>
            <AuthProvider>
                <Nav/>


                <Routes>
                    {/*pestañas*/}
                    <Route element={<Home/>} path="/"/>
                    <Route element={<AliadosComponent/>} path="/aliados"/>
                    <Route element={<Liderazgo/>} path="/liderazgo"/>
                    <Route element={<ContactoComponent/>} path="/contacto"/>
                    <Route element={<DesarrollosTodos/>} path={"/desarrollos"}/>
                    <Route element={<AreasComponent/>} path="/areas"/>

                    {DesarrollosRoutes()}

                    <Route element={<Equipo/>} path={"/asociados"}/>

                    <Route element={<ManzioneProperties/>} path={"/manzione-properties"}/>
                    {AreasRoutes()}

                    {/* Authentication Routes */}
                    <Route element={<Login/>} path="/login"/>
                    <Route
                        element={
                            <ProtectedRoute>
                                <Editor/>
                            </ProtectedRoute>
                        }
                        path="/editor"
                    />
                </Routes>
                <FloatingLangToggle/>
                <FloatingWhatsApp

                    phoneNumber={"13056139338"}
                    chatMessage={t("whatsapp.status") as string}
                    statusMessage={t("whatsapp.status") as string}
                    avatar="https://pagina-mama.s3.amazonaws.com/assets2/asociados/elda-whatsapp.png"
                    placeholder={t("whatsapp.placeholder") as string}
                    accountName={"Scattolini Group"}
                    notificationSound
                    className={"floating-whatsapp"}
                />
                <Footer/>
            </AuthProvider>
        </BrowserRouter>
    );
}
