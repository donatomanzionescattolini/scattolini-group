import "./App.scss";
import "vite/modulepreload-polyfill";
import "bootstrap/dist/css/bootstrap.css";
import AreasComponent from "./components/AreasComponent.tsx";
import "material-components-web/dist/material-components-web.css";
import {Home} from "./Home";
import Contacto from "./components/ContactoComponent.tsx";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import "material-components-web/dist/material-components-web.js";
import Equipo from "./components/AsociadosComponent.tsx";
import ManzioneProperties from "./components/aliados/ManzioneProperties";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AliadosComponent from "./components/AliadosComponent.tsx";
import Liderazgo from "./components/Liderazgo.tsx";
import {FloatingWhatsApp} from "react-floating-whatsapp";
import AreasRoutes from "./routes/AreasRoutes.tsx";
import DesarrollosRoutes from "./routes/DesarrollosRoutes.tsx";
import Desarrollos from "./components/projects/DesarrollosComponent.tsx";

export default function App() {

    return (
        <BrowserRouter>
            <Nav/>

            <div className={""}>
                <Routes>

                    {/*pestañas*/}
                    <Route element={<Home/>} path="/"/>
                    <Route element={<AliadosComponent/>} path="/aliados"/>
                    <Route element={<Liderazgo/>} path="/liderazgo"/>
                    <Route element={<Contacto/>} path="/contacto"/>
                    <Route element={<Desarrollos/>} path={"/desarrollos"}/>
                    <Route element={<AreasComponent/>} path="/areas"/>

                    {DesarrollosRoutes()}

                    <Route element={<Equipo/>} path={"/asociados"}/>

                    <Route element={<ManzioneProperties/>} path={"/manzione-properties"}/>
                    {AreasRoutes()}

                </Routes>
            </div>
            <FloatingWhatsApp

                phoneNumber={"13056139338"}
                chatMessage={"¿Cómo te puedo ayudar hoy?"}
                statusMessage={"Respuestas dentro de las primeras 24 horas"}
                avatar="https://pagina-mama.s3.amazonaws.com/assets2/asociados/elda-whatsapp.png"
                placeholder={
                    "Quisiera programar una llamada telefónica o una reunión con un agente para aprender más sobre el mercado inmobiliario en el Sur de la Florida y analizar las opciones disponibles para mí "
                }
                accountName={"Scattolini Group"}
                notificationSound
                className={"floating-whatsapp"}
            />
            <Footer/>
        </BrowserRouter>
    );
}
