import { useState } from "react";
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
import { getDesarrollosForArea } from "../objects/desarrollos/Desarrollos.ts";
import Desarrollo from "../models/desarrollos/Desarrollo.tsx";
import { Area } from "../models/areas/Area.tsx";

const Nav = () => {
  const [showNavCentred, setShowNavCentred] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
  });
  const [allAreas] = useState(Areas());
  const [filteredAreas, setFilteredAreas] = useState<Array<Area>>(allAreas);

  const [allDesarrollos] = useState<Desarrollo[]>(
    Areas()
      .map((area) => [...getDesarrollosForArea(area)])
      .reduce((prev, cur) => [...prev, ...cur])
  );

  const [filteredDesarrollos, setFilteredDesarrollos] =
    useState<Desarrollo[]>(allDesarrollos);


  const [searchQueryDesarrollo, setSearchQueryDesarrollo] = useState("");
  const handleSearchDesarrollo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueryDesarrollo(event.target.value);
    if (searchQueryDesarrollo === "") {
      setFilteredDesarrollos(allDesarrollos);
      return;
    }

    const filteredDesarrolloz = allDesarrollos.filter(
      (desarrollo) =>
        desarrollo.nombre.toLowerCase().includes(event.target.value.toLowerCase()) ||
        event.target.value.toLowerCase().includes(desarrollo.nombre.toLowerCase())
    );

    setFilteredDesarrollos(filteredDesarrolloz);
  };
  const [searchQueryArea, setSearchQueryArea] = useState("");
  const handleSearchArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueryArea(event.target.value);
    if (searchQueryArea === "") {
      setFilteredAreas(allAreas);
      return;
    }

    const filteredAreaz = allAreas.filter(
      (area) =>
        area.titulo.toLowerCase().includes(event.target.value.toLowerCase()) ||
        event.target.value.toLowerCase().includes(area.titulo.toLowerCase())
    );

    setFilteredAreas(filteredAreaz);
  };




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
                <MDBDropdownMenu className="responsive column">
                  <>
                    <MDBInputGroup tag="form" className="d-flex w-75 ms-4 my-3">
                      <input
                        className="form-control"
                        placeholder="Buscar"
                        aria-label="Buscar"
                        type="Search"
                        value={searchQueryArea}
                        onChange={handleSearchArea}
                      />
                      {/* <MDBBtn outline>Buscar</MDBBtn> */}
                    </MDBInputGroup>
                    {filteredAreas.map((area) => {
                      return (
                        <MDBDropdownItem link href={"/areas/" + area.name} key={filteredAreas.indexOf(area)}>
                          {area.titulo}
                        </MDBDropdownItem>
                      );
                    })}
                  </>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="/contacto/">Contacto</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a">Desarrollos</MDBDropdownToggle>
                <MDBDropdownMenu className="responsive column">
                  <>
                    <MDBInputGroup tag="form" className="d-flex w-75 ms-4 my-3">
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
                    {filteredDesarrollos.map((desarrollo) => {
                      return (
                        <MDBDropdownItem key={filteredDesarrollos.indexOf(desarrollo)}link href={"/areas/" + desarrollo.nombre}>
                          {desarrollo.titulo}
                        </MDBDropdownItem>
                      );
                    })}
                  </>
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
