import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "../i18n.tsx";

export default function NavComponent() {
  const [showBasic, setShowBasic] = useState(false);
  const { t } = useTranslation();

  return (
    <Navbar expand="lg" bg="light" expanded={showBasic}>
      <Container fluid>
        <Navbar.Brand href="/">{t("navComponent.brand")}</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          aria-label={t("nav.toggleNavigation")}
          onClick={() => setShowBasic((prev) => !prev)}
        />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" active>
              {t("navComponent.home")}
            </Nav.Link>
            <Nav.Link href="/">{t("navComponent.link")}</Nav.Link>

            <NavDropdown title={t("navComponent.dropdown")} id="navcomponent-dropdown">
              <NavDropdown.Item>{t("navComponent.action")}</NavDropdown.Item>
              <NavDropdown.Item>{t("navComponent.anotherAction")}</NavDropdown.Item>
              <NavDropdown.Item>{t("navComponent.somethingElse")}</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link disabled href="/">
              {t("navComponent.disabled")}
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={t("navComponent.searchPlaceholder")}
              aria-label={t("nav.search")}
              className="me-2"
            />
            <Button variant="primary">{t("navComponent.searchButton")}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
