export function AboutUs() {
    return (
        <>
            <h2
                style={{textIndent: "20px", marginBottom: `4%!important`}}
                className=" text-center pt-0 mt-0 display-6 pt-5    my-5 justify"
            >


                Scattolini Group
            </h2>
            <hr className="hr hr-blurry text-center w-50 mx-auto"/>
            {window.innerWidth > 768 && (
                <>
                    <br/>
                    <br/>
                    <br/>
                </>
            )}
            <div className="row p-0 m-0">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 px-5">
                    <h4 className="text-center mt-0">Quiénes Somos</h4>
                    {window.innerWidth < 768 && <br></br>}
                    <p className="fs-6 text-muted px-lg-5 px-xl-5 px-sm-0 px-md-0 pt-sm-4 pt-md-4  pt-xs-4 text-align-justify">
                        Scattolini Group es un equipo de expertos con décadas de experiencia
                        en el mercado inmobiliario del sur de Florida. Hemos tenido el
                        privilegio de asistir a numerosos clientes provenientes de diversas
                        partes del mundo, brindándoles nuestra amplia gama de servicios en
                        el ámbito de los bienes raíces en esta vibrante región.
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pe-5 mb-0 pb-0 px-5">
                    {window.innerWidth < 768 && (
                        <>
                            <br/>
                            <br/>
                        </>
                    )}
                    <h4 className="mb-4 text-center">Solicita una consulta</h4>
                    <div>
                        <p className="text-muted  text-align-left font-size-md">
                            Cualquiera de nuestros expertos estaría encantado de programar una
                            consulta para explorar las opciones disponibles de acuerdo a tus
                            necesidades
                        </p>
                    </div>
                    <div>
                        <a
                            type="button"
                            className="btn btn-outline-secondary mt-3"
                            href="tel:3056139338#banner"
                        >
                            Llámanos hoy
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
