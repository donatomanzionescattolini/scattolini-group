import {useEffect, useState} from "react";
import {
    MDBCol,
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
    MDBNavbarToggler, MDBRow,
} from "mdb-react-ui-kit";
import Areas from "../objects/areas/Areas.tsx";
import {getDesarrollosForArea} from "../objects/desarrollos/Desarrollos.ts";


const Nav = () => {
    const [showNavCentred, setShowNavCentred] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
    });

    const [items] = useState(Areas());
    // useEffect(() => {
    //
    //     function addDesarrollos() {
    //         Areas().forEach(area => setItems(items => [...items,area].concat([...getDesarrollosForArea(area)])));
    //
    //         }
    //         addDesarrollos();
    //     },[]);


    const renderMenuItems = () => {
        const half = Math.ceil(items.length / 2);
        const leftColumn = items.slice(0, half);
        const rightColumn = items.slice(-half);

        return (


            <MDBDropdownMenu className="responsive p-2">
                <MDBRow around className={"w-responsive  flex-row-reverse"}style={{minWidth:400}}>
                    <MDBCol md={6}>
                        {leftColumn.map((area) => {

                            return (<>
                                    <MDBDropdownItem header className={"list-group-item "}style={{textIndent:15,fontVariant:"small-caps"}}>{area.titulo}</MDBDropdownItem>
                                    {[...getDesarrollosForArea(area)].map(des=>
                            <MDBDropdownItem
                                link
                                className="dropdown-item"
                                href={`/desarrollos/${des.nombre}/`}

                            >{des.titulo||des.nombre.split("-").map(word=>word.charAt(0).toUpperCase()+word.substring(1)).join(" ")}</MDBDropdownItem>
                            )}
                            </>
                            );
                        })}</MDBCol>
                    <MDBCol md={6}>
                        {rightColumn.map((area) =>  {return (<>
                                <MDBDropdownItem header className={"list-group-item "}style={{textIndent:15,fontVariant:"small-caps"}}>{area.titulo}</MDBDropdownItem>                    {[...getDesarrollosForArea(area)].map(des=>
                        <MDBDropdownItem
                            link
                            className="dropdown-item"
                            href={`/desarrollos/${des.nombre}/`}

                        >{des.titulo}</MDBDropdownItem>
                    )}
                </>
                )})}</MDBCol>
                </MDBRow>
            </MDBDropdownMenu>);
    }
    return(
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
                                {Areas().map(area=>{
                                    return <MDBDropdownItem link href={"/areas/" + area.name}>
                                        {area.titulo}
                                    </MDBDropdownItem>
                                })}
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


                                       {renderMenuItems()}



                            </MDBDropdown>
                        </MDBNavbarItem>


                    </MDBNavbarNav>

                </MDBCollapse>
            </MDBContainer>

        </MDBNavbar>
    );
};


export default Nav;