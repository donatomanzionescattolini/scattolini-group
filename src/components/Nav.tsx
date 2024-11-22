import React, {useState} from "react";
import {
    MDBCollapse,
    MDBContainer,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBIcon,
    MDBInputGroup,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler,
} from "mdb-react-ui-kit";

import Areas from "../objects/areas/Areas.tsx";
import {getDesarrollosForArea} from "../objects/desarrollos/Desarrollos.ts";
import Project from "../models/desarrollos/Project.tsx";
import {Area} from "../models/areas/Area.tsx";

const Nav = () => {
    const [showNavCentred, setShowNavCentred] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
    });
    const [areas] = useState(Areas());
    const [filteredAreas, setFilteredAreas] = useState<Array<Area>>(areas);

    const [allDesarrollos] = useState<Project[]>(
        Areas()
            .map((area) => [...getDesarrollosForArea(area)])
            .reduce((prev, cur) => [...prev, ...cur])
    );


    const [filteredDesarrollos, setFilteredDesarrollos] =
        useState<Project[]>(allDesarrollos);


    const [searchQueryDesarrollo, setSearchQueryDesarrollo] = useState("");
    const handleSearchDesarrollo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQueryDesarrollo(event.target.value);
        if (searchQueryDesarrollo === "") {
            setFilteredDesarrollos(allDesarrollos);
            return;
        }

        const filteredDesarrolloz = allDesarrollos.filter(
            (desarrollo) =>
                desarrollo.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                event.target.value.toLowerCase().includes(desarrollo.name.toLowerCase())
        );

        setFilteredDesarrollos(filteredDesarrolloz);
    };
    const [searchQueryArea, setSearchQueryArea] = useState("");
    const handleSearchArea = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQueryArea(event.target.value);
        if (searchQueryArea === "") {
            setFilteredAreas(areas);
            return;
        }

        const filteredAreaz = areas.filter(
            (area) =>
                area.titulo.toLowerCase().includes(event.target.value.toLowerCase()) ||
                event.target.value.toLowerCase().includes(area.titulo.toLowerCase())
        );

        setFilteredAreas(filteredAreaz);
    };


    // @ts-ignore
    return (
        <MDBNavbar expand="lg" light bgColor="light">
            <MDBContainer fluid className={"d-flex flex-row justify-content-center"}>
                <MDBNavbarToggler
                    type="button"
                    data-target="#navbarCenteredExample"
                    aria-controls="navbarCenteredExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowNavCentred(!showNavCentred)}
                >

                    {innerWidth < 768 && (
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img className="img-fluid" 
                                width={"40%"}
                                src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                                alt="logo"
                            />

                            <MDBIcon icon="caret-down"></MDBIcon>
                        </div>
                    ) || <div className="d-flex flex-row align-items-center justify-content-center"><h1
                        className="text-center">Menú&nbsp;</h1> <MDBIcon icon="caret-right"></MDBIcon>
                    </div>}

                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavCentred} id="navbarCenteredExample" className={"mx-auto "}>
                    <MDBNavbarNav fullWidth className="mb-2 mb-lg-0">
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
                                    <img className="img-fluid" 
                                        width={300}
                                        src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                                        alt="logo"
                                    />
                                </MDBNavbarBrand>
                            </MDBNavbarItem>
                        )}

                        <MDBNavbarItem>
                            <MDBDropdown drop={"center"}>
                                <MDBDropdownToggle tag="a">Áreas</MDBDropdownToggle>
                                <MDBDropdownMenu className="vw-sm-100 vw-xs-100 w-75 mx-auto min-vw-fit-content">
                                    <>
                                        <div className="input-group d-flex w-75 ms-4 my-3">
                                            <input
                                                className="form-control"
                                                placeholder="Buscar"
                                                aria-label="Buscar"
                                                type="Search"
                                                value={searchQueryArea}
                                                onChange={handleSearchArea}
                                            />
                                            {/* <MDBBtn outline>Buscar</MDBBtn> */}
                                        </div>
                                        <div className="dropdown-menu-content ">
                                            {filteredAreas.map((area) => {
                                                return (
                                                    <MDBDropdownItem key={filteredAreas.indexOf(area)} link
                                                                     href={"/areas/" + area.name}>
                                                        {area.titulo}
                                                    </MDBDropdownItem>
                                                );
                                            })}
                                        </div>
                                    </>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href="/contacto/">Contacto</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBDropdown drop={"center"}>
                                <MDBDropdownToggle tag="a">Desarrollos</MDBDropdownToggle>
                                <MDBDropdownMenu className="" responsive>
                                    <MDBInputGroup className="d-flex w-75 ms-4 my-3">
                                        <input
                                            className="form-control"
                                            placeholder="Buscar"
                                            aria-label="Buscar"
                                            type="Search"
                                            value={searchQueryDesarrollo}
                                            onChange={handleSearchDesarrollo}
                                        />
                                        {/* <MDBBtn outline>Buscar</MDBBtn> */}
                                    </MDBInputGroup>
                                    <div className="dropdown-menu-content">
                                        {filteredDesarrollos.map((desarrollo) => {
                                            return (
                                                <MDBDropdownItem link key={filteredDesarrollos.indexOf(desarrollo)}
                                                                 href={"/desarrollos/" + desarrollo.name}>
                                                    {desarrollo.title}
                                                </MDBDropdownItem>
                                            );
                                        })}
                                    </div>
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
