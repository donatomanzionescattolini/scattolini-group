import "material-components-web/dist/material-components-web.css";
import "./Asociados.scss";
import "mdb-ui-kit/css/mdb.min.css";

export default function Equipo() {
    return (
        <section className="m-5 p-5 mt-0 pt-0 container-sm mx-auto justify-content-center">
            <div className="page-header">
                <h1 className="text-center mt-5 display-6">Asociados</h1>
                <hr className="hr hr-blurry w-50 mx-auto"/>
            </div>
            <div className="row active-with-click">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Elda Scattolini</span>
                            <strong>
                                {/* <i className="fa fa-fw fa-star" /> */}
                                🏘️ Dueña y Agente
                            </strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 m-0 p-0  "
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/elda/elda-transparent-bg.png"
                                    width="80%"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Dania Scattolini</span>
                            <strong>🏠 Agente y Office Manager</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-50 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 h-100 m-0 p-0  "
                                    src={"https://pagina-mama.s3.amazonaws.com/assets2/asociados/dania-transparent-bg.png"}
                                    width="70%"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </article>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Veruschka Jaimes</span>
                            <strong>🏠 Agente</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 h-100 m-0 p-0  "
                                    src={"https://pagina-mama.s3.amazonaws.com/assets2/asociados/veru-transparent-bg.png"}
                                        width="80%"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card mc-card Pink mdb-card">
                        <h2>
                            <span>Laila Saade</span>
                            <strong>🏚️ Agente</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 m-0 p-0  "
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/laila-transparent-bg.png"
                                    width="80%"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </article>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Monica Manzione</span>
                            <strong>
                                {/* <i className="fa fa-fw fa-star" /> */}
                                🏡 Agente y Property Manager
                            </strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 m-0 p-0  "
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/monica-transparent-bg.png"
                                    width="80%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Carmen Herrera</span>
                            <strong>🏠 Agente</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 h-100 m-0 p-0  "
                                    src={"https://pagina-mama.s3.amazonaws.com/assets2/asociados/carmen-transparent-bg.png"}
                                    width="80%"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Róbinson Ávila</span>
                            <strong>🏠 Agente</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 h-100 m-0 p-0  "
                                    src={"https://pagina-mama.s3.amazonaws.com/assets2/asociados/robison-transparent-bg.png"}
                                    width="80%"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </article>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Gabriela Peña</span>
                            <strong>🏠 Agente</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container p-0">
                                <img
                                    className="img-responsive object-fit-cover w-100 m-0 p-0  "
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/gabriela-transparent-bg.png"
                                    width="80%"
                                    height="100%"
                                    style={{minHeight: "100%!important"}}
                                />
                            </div>
                        </div>
                    </article>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Mariolga Villasana</span>
                            <strong>🏠 Agente</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 m-0 p-0  "
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/mariolga-transparent-bg.png"
                                    width="80%"
                                    height="auto"
                                    style={{minHeight: "100%!important"}}
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Victoria Martínez</span>
                            <strong>🏠 Agente</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 m-0 p-0  "
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/victoria-transparent-bg.png"
                                    width="80%"
                                    height="auto"
                                    style={{minHeight: "100%!important"}}
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Dayana Trejo</span>
                            <strong>🏠 Agente</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover h-100 m-0 p-0  "
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/dayana-transparent-bg.png"
                                    width="80%"
                                    height="auto"
                                    style={{minHeight: "100%!important"}}
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <article className="material-card Pink">
                        <h2>
                            <span>Anahid Chalikian</span>
                            <strong>🏠 Broker</strong>
                        </h2>
                        <div className="mc-content">
                            <div className="img-container w-80 h-100 mx-auto">
                                <img
                                    className="img-responsive object-fit-cover w-100 m-0 p-0  "
                                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/anahid-transparent-bg.png"
                                    width="80%"
                                    height="auto"
                                    style={{minHeight: "100%!important"}}
                                />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div>
                {innerWidth>650&&
                <iframe width="320" height="1000" src="https://www.instagram.com/scattolinigroup/embed/" frameBorder={1} autoFocus></iframe>
                }
                {innerWidth<650&&
                    <iframe width="320" height="400" src="https://www.instagram.com/scattolinigroup/embed/" frameBorder={1} autoFocus></iframe>

                }
            </div>
        </section>
    );
}
