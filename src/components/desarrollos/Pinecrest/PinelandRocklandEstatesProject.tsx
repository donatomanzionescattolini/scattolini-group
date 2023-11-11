
import ProjectTemplate from "../ProjectTemplate";
import PropiedadesPinecrest from "./PropiedadesPinecrest";

export default function RocklandEstatesProject() {
    return (
        <ProjectTemplate
            properties={<PropiedadesPinecrest/>}
            nombre={"pine-rockland-estates"}
            caracteristicas={{
                edificio: <></>,
                residencias: <></>,
                amenidades: <></>,
            }}
            introduccion={[]}
            titulo={"Pine Rockland Estates"}
            subtitulo={"Vivir en cualquier otro lugar no se puede comparar"}
            numberOfImages={0}
        />
    );
}
