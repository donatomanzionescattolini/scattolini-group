import {MDBRow,} from "mdb-react-ui-kit";

import {Image} from "react-bootstrap";

import PropiedadesMiamiBeach from "../desarrollos/MiamiBeach/PropiedadesMiamiBeach";

export default function MiamiBeach() {
    return (
        <>
            <div className="city-banner p-0 ">
                <div
                    className="container-fluid m-0 p-5"
                    style={{
                        backgroundImage: "url('https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2 className="text-center text-white">MiamiBeach</h2>
                </div>
                <div className="container-fluid text-center">
                    <h2 className="text-center mt-5">La Ciudad Mágica</h2>
                    <hr className="hr hr-blurry w-50 mx-auto"/>
                </div>
            </div>
            <div className="city-firstsection w-100 row">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ps-5 pe-5 pb-2">
                        <p className="text-muted ">
                            <small>
                                Miami Beach es un lugar increíble para invertir en bienes
                                raíces. Con su clima cálido durante todo el año, hermosas
                                playas, vida nocturna vibrante y restaurantes de primera clase,
                                Miami Beach se ha convertido en uno de los destinos más lujosos
                                del mundo . Además, el reciente desarrollo al norte de South
                                Beach y la adición de 23.000 condominios en Downtown Miami en
                                los últimos 10 años, han hecho que Miami se vuelva cada vez más
                                aburguesada, lo que la convierte en un lugar cada vez más
                                apropiado para tener una residencia permanente o un segundo o
                                tercer hogar.<br></br>
                                <br></br>
                                Los individuos de alto valor neto (HNWIs) y los individuos de
                                valor ultra alto (UHNWIs) están invirtiendo cada vez más en
                                propiedades en Miami Beach y en bienes raíces de lujo en Miami .
                                Una inversión inmobiliaria en Miami vale la pena debido a la
                                gran demanda de la ciudad y su revalorización, lo que significa
                                que es más asequible comprar una propiedad y alquilarla, ya que
                                brinda una ventaja a los inversores y propietarios de inmuebles.
                                <br></br>
                                <br></br>
                                Invertir en bienes raíces en Miami Beach es una excelente
                                oportunidad para preservar y hacer crecer su riqueza mientras
                                disfruta de todo lo que esta hermosa ciudad tiene para ofrecer
                            </small>
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ">
                        <picture className="">
                            <img
                                src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/firstsection.webp"
                                className="w-100 img-responsive align-self-center justify-self-center m-auto"
                                alt=""
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className="city-firstcarousel">
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-1.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-2.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-3.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-4.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-5.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-6.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-7.webp"
                ></Image>

                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-8.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-9.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-10.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-11.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-12.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-13.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-14.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-15.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-16.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-17.webp"
                ></Image>
                <Image
                    fluid
                    rounded
                    src="https://pagina-mama.s3.amazonaws.com/assets2/areas/miami-beach/carousel-18.webp"
                ></Image>
            </div>
            {/* <DividerFirst /> */}
            <div className="propiedades">
                <div>
                    <h3 className="text-center">Propiedades en el Área</h3>
                </div>

                <br></br>
                <MDBRow>
                    <PropiedadesMiamiBeach></PropiedadesMiamiBeach>
                </MDBRow>
            </div>
            <div className="container-fluid m-0 p-0 overflow-scroll horizontal-scrollable"></div>
        </>
    );
}
