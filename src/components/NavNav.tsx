import React, { useState } from "react";
import { useTranslation } from "../i18n.tsx";
import { Container, Nav as BootstrapNav, Navbar, NavDropdown } from "react-bootstrap";
import Areas from "../objects/areas/Areas.tsx";
import { getDesarrollosForArea } from "../objects/desarrollos/Desarrollos.ts";
import Desarrollo from "../models/desarrollos/Desarrollo.tsx";
import { Area } from "../models/areas/Area.tsx";

const NavNav = () => {
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

  const getTranslatedText = (key: string) => {
    const value = t(key);
    return Array.isArray(value) ? value.join(" ") : value;
  };

  const getLocalized = (field: any) => {
    if (!field) return "";
    if (typeof field === "object") return field[lang] || field.es || Object.values(field)[0] || "";
    return field;
  };

  return (
    <Navbar expand="lg" bg="light" className="bg-light" expanded={showNavCentred}>
      <Container fluid>
        <Navbar.Toggle
          aria-controls="navbarCenteredExample"
          aria-expanded={showNavCentred}
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
              <i className="fas fa-caret-down" />
            </div>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarCenteredExample">
          <BootstrapNav className="mb-2 mb-lg-0 w-100">
            <BootstrapNav.Item>
              <div className="d-flex align-items-center ms-3">
                <button className={`btn btn-sm ${lang === 'es' ? 'btn-primary' : 'btn-outline-primary'} me-1`} onClick={() => switchLang('es')} aria-label="Switch to Spanish">ES</button>
                <button className={`btn btn-sm ${lang === 'en' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => switchLang('en')} aria-label="Switch to English">EN</button>
              </div>
            </BootstrapNav.Item>
            <BootstrapNav.Item>
              <BootstrapNav.Link aria-current="page" href="/">
                {t('nav.inicio')}
              </BootstrapNav.Link>
            </BootstrapNav.Item>
            <BootstrapNav.Item>
              <BootstrapNav.Link href="/liderazgo/">{t('nav.liderazgo')}</BootstrapNav.Link>
            </BootstrapNav.Item>

            <BootstrapNav.Item>
              <BootstrapNav.Link href="/asociados/">{t('nav.asociados')}</BootstrapNav.Link>
            </BootstrapNav.Item>
            {innerWidth > 650 && (
              <BootstrapNav.Item>
                <Navbar.Brand href="/">
                  <img
                    width={300}
                    src="https://pagina-mama.s3.amazonaws.com/assets2/logos/logo-transparent-background-1.png"
                    alt="logo"
                  />
                </Navbar.Brand>
              </BootstrapNav.Item>
            )}
            <BootstrapNav.Item>
              <NavDropdown title={t('nav.areas')} className="responsive column">
                  <div className="d-flex w-75 ms-4 my-3">
                    <input
                      className="form-control"
                      placeholder={getTranslatedText('nav.search')}
                      aria-label={getTranslatedText('nav.search')}
                      type="Search"
                      value={searchQueryArea}
                      onChange={handleSearchArea}
                    />
                  </div>
                  <>
                    {filteredAreas.map((area) => (
                      <NavDropdown.Item key={area.name} href={"/areas/" + area.name}>
                        {getLocalized(area.titulo)}
                      </NavDropdown.Item>
                    ))}
                  </>
              </NavDropdown>
            </BootstrapNav.Item>

            <BootstrapNav.Item>
              <BootstrapNav.Link href="/contacto/">{t('nav.contact')}</BootstrapNav.Link>
            </BootstrapNav.Item>
            <BootstrapNav.Item>
              <NavDropdown title={t('nav.desarrollos')} className="responsive column">
                  <div className="d-flex w-75 ms-4 my-3">
                    <input
                      className="form-control"
                      placeholder={getTranslatedText('nav.search')}
                      aria-label={getTranslatedText('nav.search')}
                      type="Search"
                      value={searchQueryDesarrollo}
                      onChange={handleSearchDesarrollo}
                    />
                  </div>
                  <>
                    {filteredDesarrollos.map((desarrollo, idx) => (
                      <NavDropdown.Item key={desarrollo.nombre ?? idx} href={'/desarrollos/' + (desarrollo.nombre ?? idx)}>
                        {getLocalized(desarrollo.titulo) || desarrollo.nombre}
                      </NavDropdown.Item>
                    ))}
                  </>
              </NavDropdown>
            </BootstrapNav.Item>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavNav;
