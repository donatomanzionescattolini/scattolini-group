export interface caracteristicas {
    edificio: React.ReactNode;
    residencias: React.ReactNode;
    amenidades: React.ReactNode;
}

export interface ProjectParams {
    properties: React.ReactNode;
    nombre: string;
    caracteristicas: caracteristicas | React.ReactNode;
    introduccion: string[];
    titulo: string | JSX.Element;
    subtitulo: string | JSX.Element;
    direccion?: string;
    numberOfImages: number;
    video?: JSX.Element | string;
    banner?: boolean;
    backgroundAttackment?: string;
    position?: string;
}
