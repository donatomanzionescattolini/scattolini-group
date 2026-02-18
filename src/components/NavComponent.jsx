import React, {useState} from "react";
import {
    MDBBtn,
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
import { useTranslation } from "../i18n.tsx";

export default function NavComponent() {
    const [showBasic, setShowBasic] = useState(true);
    const { t } = useTranslation();

    return (
        <MDBNavbar expand="lg" light bgColor="light">
            <MDBContainer fluid>
                <MDBNavbarBrand href="/">{t("navComponent.brand")}</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label={t("nav.toggleNavigation")}
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon="bars" fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current="page" href="#">
                                {t("navComponent.home")}
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="/">{t("navComponent.link")}</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag="a">{t("navComponent.dropdown")}</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>{t("navComponent.action")}</MDBDropdownItem>
                                    <MDBDropdownItem link>{t("navComponent.anotherAction")}</MDBDropdownItem>
                                    <MDBDropdownItem link>{t("navComponent.somethingElse")}</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink
                                disabled
                                href="/"
                                tabIndex={-1}
                                aria-disabled="true"
                            >
                                {t("navComponent.disabled")}
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form>
                        <input type="search" placeholder={t("navComponent.searchPlaceholder")} aria-label={t("nav.search")}/>
                        <MDBBtn color="primary">{t("navComponent.searchButton")}</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
