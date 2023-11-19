import "./EquipoSmall.css";
import {useNavigate} from "react-router-dom";

export default function EquipoSmall() {
    const nav = useNavigate();
    return (
        <>
            <br></br>
            <h2 className="text-center mt-5">Nuestro Equipo</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>
            <div className="xcontainer d-flex justify-content-center">
                <img
                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/asociados2.png"
                    alt="Equipo"
                    className="image-responsive object-fit-cover mx-auto justify-content-center"
                    style={{maxWidth: "100%!important"}}
                />
                <div className="middle">
                    <p
                        onClick={() => nav("/asociados")} className="text">Ver Más</p>
                </div>
            </div>
        </>
    );
}
