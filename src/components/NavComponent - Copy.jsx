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

export default function NavComponent() {
    const [showBasic, setShowBasic] = useState(true);

    return (
        <MDBNavbar expand="lg" light bgColor="light">
            <MDBContainer fluid>
                <MDBNavbarBrand href="/">Brand</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon="bars" fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current="page" href="#">
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="/">Link</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag="a">Dropdown</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
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
                                Disabled
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form>
                        <input type="search" placeholder="Type query" aria-label="Search"/>
                        <MDBBtn color="primary">Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
