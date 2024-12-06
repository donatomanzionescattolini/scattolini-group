import "./EquipoSmall.css";
import {useNavigate} from "react-router-dom";

export default function AsociadosSmallComponent() {
    const nav = useNavigate();
    return (
        <>
            <h2 className="text-center">Nuestro Equipo</h2>
            <hr className="hr hr-blurry w-50 mx-auto"/>
            <div className="xcontainer d-flex justify-content-center">
                <img className="img-fluid" 
                    src="https://pagina-mama.s3.amazonaws.com/assets2/asociados/asociados2.png"
                    alt="Equipo"
                    className="image-responsive object-fit-cover mx-auto justify-content-center"
                    style={{maxWidth: "100%!important"}}
                />
                <div className="middle">
                    <button className={"btn "} id={"asociados-link"}
                        onClick={() => nav("/asociados")}>Ver Más</button>
                </div>
            </div>
        </>
    );
}
