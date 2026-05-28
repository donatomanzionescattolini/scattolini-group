import { Route } from "react-router-dom";
import AlbaPalmBeachProject from "../../components/desarrollos/WestPalmBeach/AlbaPalmBeachProject.tsx";
export default function WestPalmBeachRoutes() {
    return (
        <>
            <Route element={<AlbaPalmBeachProject />} path="/desarrollos/alba-palm-beach" />
        </>
    );
}
