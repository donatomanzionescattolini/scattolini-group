// import NorthBayVillageComponent from "./areas/NorthBayVillageComponent";
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
import Areas from "../objects/areas/Areas.tsx";
import {getDesarrollosForArea} from "../objects/desarrollos/Desarrollos.ts";

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
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
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
                            <MDBNavbarLink aria-current="page" href="/">
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
                                        src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                                        alt="logo"
                                    />
                                </MDBNavbarBrand>
                            </MDBNavbarItem>
                        )}
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag="a">Áreas</MDBDropdownToggle>

                                <MDBDropdownMenu className="responsive">
                                    {Areas().map(area=>
                                        <MDBDropdownItem
                                            link
                                            className="dropdown-item"
                                            href={`/areas/${area.name}/`}
                                        >
                                            {area.titulo}
                                        </MDBDropdownItem>
                                    )}
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
                                <MDBDropdownMenu responsive='end'>

                                    {Areas().map(area=>
                                        (<>
                                            <MDBDropdownItem header className='dropdown-header'>
                                                {area.titulo}
                                            </MDBDropdownItem>
                                            {[...getDesarrollosForArea(area)].map(des=><MDBDropdownItem
                                            link

                                            href={`/desarrollos/${des.nombre}/`}
                                        >
                                                <span className={"dropdown-item-text"}>{des.titulo || des.nombre.split("-").map(word=>word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()).join(" ")}</span>
                                        </MDBDropdownItem>)}
                                            <MDBDropdownItem divider   /></>)
                                    )}
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
