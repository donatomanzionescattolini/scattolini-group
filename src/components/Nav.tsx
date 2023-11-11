// import NorthBayVillage from "./areas/NorthBayVillage";
import {useState} from "react";
import {
    MDBCollapse,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler,
} from "mdb-react-ui-kit";

const Nav = () => {
    const [showNavCentred, setShowNavCentred] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
    });
    return (
        <MDBNavbar expand="lg" light bgColor="light">
            <MDBContainer fluid>
                <MDBNavbarToggler
                    type="button"
                    data-target="#navbarCenteredExample"
                    aria-controls="navbarCenteredExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowNavCentred(!showNavCentred)}
                >
                    <div className="d-flex flex-column align-items-top justify-content-center">
                        {innerWidth < 650 && (
                            <div>
                                <img
                                    width={"40%"}
                                    src="/assets2/logos/logo-transparent-background-1.png"
                                    alt="logo"
                                />
                            </div>
                        )}
                        <div>
                            <MDBIcon icon="caret-down"></MDBIcon>
                        </div>
                    </div>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavCentred} id="navbarCenteredExample">
                    <MDBNavbarNav fullWidth={true} className="mb-2 mb-lg-0">
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current="page" href="/">
                                Inicio
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="/liderazgo/">Liderazgo</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href="/asociados/">Asociados</MDBNavbarLink>
                        </MDBNavbarItem>
                        {innerWidth > 650 && (
                            <MDBNavbarItem>
                                <MDBNavbarBrand href="/">
                                    <img
                                        width={300}
                                        src="/assets2/logos/logo-transparent-background-1.png"
                                        alt="logo"
                                    />
                                </MDBNavbarBrand>
                            </MDBNavbarItem>
                        )}
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag="a">Áreas</MDBDropdownToggle>

                                <MDBDropdownMenu className="responsive">
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/downtown/"
                                    >
                                        Downtown
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/brickell/"
                                    >
                                        Brickell
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/edgewater/"
                                    >
                                        Edgewater
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/sunny-isles/"
                                    >
                                        Sunny Isles
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/north-bay-village/"
                                    >
                                        North Bay Village
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/miami-beach/"
                                    >
                                        Miami Beach
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/bay-harbor/"
                                    >
                                        Bay Harbor Islands
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/coconut-grove/"
                                    >
                                        Coconut Grove
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/coral-gables/"
                                    >
                                        Coral Gables
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/doral/"
                                    >
                                        Doral
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/homestead/"
                                    >
                                        Homestead
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/areas/pinecrest/"
                                    >
                                        Pinecrest
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href="/contacto/">Contacto</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag="a" link>
                                    Desarrollos
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-header"
                                        href="/desarrollos/"
                                    >
                                        Ver Todos
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/the-well/"
                                    >
                                        The Well
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/st-regis/"
                                    >
                                        St. Regis
                                    </MDBDropdownItem>

                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/cipriani/"
                                    >
                                        Cipriani
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/aston-martin/"
                                    >
                                        Aston Martin Residences
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/shoma-bay/"
                                    >
                                        Shoma Bay
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/w11/"
                                    >
                                        W11
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/the-elser/"
                                    >
                                        The Elser
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/casa-bella/"
                                    >
                                        Casa Bella
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/ora/"
                                    >
                                        Ora
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/baccarat/"
                                    >
                                        Baccarat Residences
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/14-river-district/"
                                    >
                                        14 River District
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/domus/"
                                    >
                                        Domus
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/lofty/"
                                    >
                                        Lofty
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/aria-reserve/"
                                    >
                                        Aria Reserve
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/five-park/"
                                    >
                                        Five Park
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/one-park/"
                                    >
                                        One Park
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/72-park/"
                                    >
                                        72 Park
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/pine-park-villas/"
                                    >
                                        Pine Park Villas
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/the-mansions-at-acqualina/"
                                    >
                                        The Mansions at Acqualina
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/rockland-estates/"
                                    >
                                        Rockland Estates
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/ella/"
                                    >
                                        Ella
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/nexo/"
                                    >
                                        Nexo
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/origin/"
                                    >
                                        Origin
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/la-maré/"
                                    >
                                        La Maré
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/the-villa/"
                                    >
                                        The Villa Miami
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/edition-residences/"
                                    >
                                        Edition Residences
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/vida/"
                                    >
                                        Vida
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/missoni-baia/"
                                    >
                                        Missoni Baia
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/1428-brickell/"
                                    >
                                        1428 Brickell
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/bentley-residences/"
                                    >
                                        Bentley Residences
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/vita/"
                                    >
                                        Vita Grove
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/waldorf-astoria/"
                                    >
                                        Waldorf Astoria
                                    </MDBDropdownItem>
                                    <MDBDropdownItem
                                        link
                                        className="dropdown-item"
                                        href="/desarrollos/the-avenue/"
                                    >
                                        The Avenue
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Nav;
