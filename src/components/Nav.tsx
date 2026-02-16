import React, { useState } from "react";
import { useTranslation } from "../i18n.tsx";
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
import Areas from "../objects/areas/Areas";
import { getDesarrollosForArea } from "../objects/desarrollos/Desarrollos";
import Desarrollo from "../models/desarrollos/Desarrollo";
import { Area } from "../models/areas/Area";

const Nav = () => {
  const { t, lang, setLang } = useTranslation();
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

    const q = event.target.value.toLowerCase();
    const filteredDesarrolloz = allDesarrollos.filter((desarrollo) => {
      const name = (desarrollo.nombre || "").toLowerCase();
      const title = (getLocalized(desarrollo.titulo) || name).toLowerCase();
      return name.includes(q) || q.includes(name) || title.includes(q) || q.includes(title);
    });

    setFilteredDesarrollos(filteredDesarrolloz);
  };
  const [searchQueryArea, setSearchQueryArea] = useState("");
  const handleSearchArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueryArea(event.target.value);
    if (searchQueryArea === "") {
      setFilteredAreas(allAreas);
      return;
    }

    const filteredAreaz = allAreas.filter((area) => {
      const title = (getLocalized(area.titulo) || "").toLowerCase();
      const q = event.target.value.toLowerCase();
      return title.includes(q) || q.includes(title);
    });

    setFilteredAreas(filteredAreaz);
  };

  // language switcher handler
  const switchLang = (l: "es" | "en") => {
    setLang(l);
  };

  const getLocalized = (field: any) => {
    if (!field) return "";
    if (typeof field === "object") return field[lang] || field.es || Object.values(field)[0] || "";
    return field;
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
                  width="40%"
                  src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                  alt="logo"
                />
              </div>
            )}
            <div>
              <MDBIcon icon="caret-down" />
            </div>
          </div>
        </MDBNavbarToggler>

        <MDBCollapse navbar open={showNavCentred} id="navbarCenteredExample">
          <MDBNavbarNav fullWidth={true} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <div className="d-flex align-items-center ms-3">
                <button className={`btn btn-sm ${lang === 'es' ? 'btn-primary' : 'btn-outline-primary'} me-1`} onClick={() => switchLang('es')} aria-label="Switch to Spanish">ES</button>
                <button className={`btn btn-sm ${lang === 'en' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => switchLang('en')} aria-label="Switch to English">EN</button>
              </div>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="/">
                {t('nav.inicio')}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/liderazgo/">{t('nav.liderazgo')}</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="/asociados/">{t('nav.asociados')}</MDBNavbarLink>
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
                <MDBDropdownToggle tag="a">{t('nav.areas')}</MDBDropdownToggle>
                <MDBDropdownMenu className="responsive column">
                  <MDBInputGroup tag="form" className="d-flex w-75 ms-4 my-3">
                    <input
                      className="form-control"
                      placeholder={t('nav.search') as string}
                      aria-label={t('nav.search') as string}
                      type="Search"
                      value={searchQueryArea}
                      onChange={handleSearchArea}
                    />
                  </MDBInputGroup>
                  <>
                    {filteredAreas.map((area) => (
                      <MDBDropdownItem key={area.name} link href={"/areas/" + area.name}>
                        {getLocalized(area.titulo)}
                      </MDBDropdownItem>
                    ))}
                  </>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="/contacto/">{t('nav.contact')}</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a">{t('nav.desarrollos')}</MDBDropdownToggle>
                <MDBDropdownMenu className="responsive column">
                  <MDBInputGroup tag="form" className="d-flex w-75 ms-4 my-3">
                    <input
                      className="form-control"
                      placeholder={t('nav.search') as string}
                      aria-label={t('nav.search') as string}
                      type="Search"
                      value={searchQueryDesarrollo}
                      onChange={handleSearchDesarrollo}
                    />
                  </MDBInputGroup>
                  <>
                    {filteredDesarrollos.map((desarrollo, idx) => (
                      <MDBDropdownItem key={desarrollo.nombre ?? idx} link href={'/desarrollos/' + (desarrollo.nombre ?? idx)}>
                        {getLocalized(desarrollo.titulo) || desarrollo.nombre}
                      </MDBDropdownItem>
                    ))}
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
