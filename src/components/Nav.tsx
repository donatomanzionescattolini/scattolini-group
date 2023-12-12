import { useEffect, useState } from "react";
import {
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBInput,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBRow,
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
  const [areas, setAreas] = useState(Areas());
  const [filteredAreas, setFilteredAreas] = useState<Array<Area>>(areas);

  const [allDesarrollos, setAllDesarrollos] = useState<Desarrollo[]>(
    Areas()
      .map((area) => [...getDesarrollosForArea(area)])
      .reduce((prev, cur) => [...prev, ...cur])
  );
  const [leftColumn, setLeftColumn] = useState(
    areas.slice(0, Math.floor(areas.length / 2))
  );
  const [leftColumnFiltered, setLeftColumnFiltered] = useState(leftColumn);

  const [rightColumn, setRightColumn] = useState(
    areas.slice(Math.floor(areas.length / 2))
  );

  const [rightColumnFiltered, setRightColumnFiltered] = useState(rightColumn);

  const [filteredDesarrollos, setFilteredDesarrollos] =
    useState<Desarrollo[]>(allDesarrollos);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDesarrollosLeft, setFilteredDesarrollosLeft] = useState(
    leftColumn
      .map((area) => [...getDesarrollosForArea(area)])
      .reduce((prev, cur) => [...prev, ...cur])
  );
  const [filteredDesarrollosRight, setFilteredDesarrollosRight] = useState(
    rightColumn
      .map((area) => [...getDesarrollosForArea(area)])
      .reduce((prev, cur) => [...prev, ...cur])
  );
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (searchQuery === "") {
      setFilteredDesarrollos(allDesarrollos);

      return;
    }

    const filteredDesarrolloz = allDesarrollos.filter(
      (item) =>
        (item.titulo as string)
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        event.target.value
          .toLowerCase()
          .includes((item.titulo as string).toLowerCase())
    );

    setFilteredDesarrollos(filteredDesarrolloz);
    setFilteredAreas(
      areas.filter((area) => {
        getDesarrollosForArea(area).forEach((des) => {
          if ((des: Desarrollo) => des.area.name === area.name) return true;
        });
        return false;
      })
    );
  };
  const [searchQueryArea, setSearchQueryArea] = useState("");
  const handleSearchArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueryArea(event.target.value);
    if (searchQuery === "") {
      setFilteredAreas(areas);
      return;
    }

    const filteredAreaz = areas.filter(
      (area) =>
        area.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        event.target.value.toLowerCase().includes(area.name.toLowerCase())
    );

    setFilteredAreas(filteredAreaz);
  };

  const desarrollosInFilteredArea = (area: Area) => {
    return filteredDesarrollos.filter(
      (des) =>
        des.area.name.toLowerCase().includes(area.name.toLowerCase()) ||
        area.name.toLowerCase().includes(des.area.name.toLowerCase())
    );
  };
  const renderMenuItems = () => {
    return (
      <MDBRow
        around
        className={"w-responsive  flex-row-reverse"}
        style={{ minWidth: 400 }}
      >
        <MDBCol md={6}>
          {leftColumnFiltered.map((area) => {
            return (
              <>
                {desarrollosInFilteredArea(area).length > 0 && (
                  <>
                    <MDBDropdownItem
                      header
                      className={"list-group-item "}
                      style={{ textIndent: 15, fontVariant: "small-caps" }}
                    >
                      {area.titulo}
                    </MDBDropdownItem>
                    {desarrollosInFilteredArea(area).map((des) => (
                      <MDBDropdownItem
                        link
                        className="dropdown-item"
                        href={`/desarrollos/${des.nombre}/`}
                      >
                        {des.titulo ||
                          des.nombre
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.substring(1)
                            )
                            .join(" ")}
                      </MDBDropdownItem>
                    ))}
                  </>
                )}
              </>
            );
          })}
        </MDBCol>
        <MDBCol md={6}>
          {rightColumnFiltered.map((area) => {
            return (
              <>
                {desarrollosInFilteredArea(area).length > 0 && (
                  <>
                    <MDBDropdownItem
                      header
                      className={"list-group-item "}
                      style={{ textIndent: 15, fontVariant: "small-caps" }}
                    >
                      {area.titulo}
                    </MDBDropdownItem>
                    {desarrollosInFilteredArea(area).map((des) => (
                      <MDBDropdownItem
                        link
                        className="dropdown-item"
                        href={`/desarrollos/${des.nombre}/`}
                      >
                        {des.titulo ||
                          des.nombre
                            .split("-")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.substring(1)
                            )
                            .join(" ")}
                      </MDBDropdownItem>
                    ))}
                  </>
                )}
              </>
            );
          })}
        </MDBCol>
      </MDBRow>
    );
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
                <MDBDropdownMenu className="responsive">
                  <>
                    <MDBInput
                      placeholder="Buscar"
                      value={searchQueryArea}
                      onChange={handleSearchArea}
                    />
                    {filteredAreas.map((area) => {
                      return (
                        <MDBDropdownItem link href={"/areas/" + area.name}>
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
                <MDBDropdownToggle tag="a" link>
                  Desarrollos
                </MDBDropdownToggle>
                <MDBDropdownMenu className="responsive p-2">
                  <MDBInput
                    placeholder="Buscar"
                    value={searchQuery}
                    onChange={handleSearch}
                  />

                  {renderMenuItems()}
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
