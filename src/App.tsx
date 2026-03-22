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
import React, {useEffect, useLayoutEffect} from "react";
import AliadosComponent from "./components/AliadosComponent.tsx";
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
import {getAllAreas, getAllDesarrollos} from "./services/database";
import {replaceDynamicAreas} from "./objects/areas/Areas";
import {replaceDynamicDesarrollos} from "./objects/desarrollos/Desarrollos";

export default function App() {
    const {t} = useTranslation();

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const [dynamicAreas, dynamicDesarrollos] = await Promise.all([
                    getAllAreas(),
                    getAllDesarrollos(),
                ]);
                replaceDynamicAreas(dynamicAreas as any);
                replaceDynamicDesarrollos(dynamicDesarrollos as any);
            } catch (error) {
                console.error("Error fetching dynamic content:", error);
            }
        };
        fetchContent();
    }, []);

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
