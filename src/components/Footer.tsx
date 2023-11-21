import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-light bordered pt-5 px-4 ">
            <div
                className="d-flex flex-row justify-content-center px-5"
                style={{width: "75%!important", marginLeft: "15%!important"}}
            >
                <ul className="flex-row justify-content-center list-group list-group-horizontal list-group-unstyled list-unstyled flex-wrap">
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/downtown">Downtown</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/brickell">Brickell</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/edgewater">Edgewater</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/sunny-isles">Sunny Isles</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/north-bay-village">North Bay Village</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/miami-beach">Miami Beach</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/bay-harbor">Bay Harbor Islands</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/coconut-grove">Coconut Grove</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/coral-gables">Coral Gables</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/doral">Doral</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/homestead">Homestead</Link>
                    </li>
                    <li className="list-group-item bg-transparent border-0 p-2  inline overflow-visible text-nowrap">
                        <Link to="/areas/pinecrest">Pinecrest</Link>
                    </li>
                </ul>
            </div>

            <br/>

            <div className="d-flex flex-row justify-content-center">
                © 2023 Copyright Scattolini Group
            </div>
            <br/>
        </footer>
    );
}
