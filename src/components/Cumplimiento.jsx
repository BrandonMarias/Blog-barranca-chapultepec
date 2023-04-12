import { data } from "../data/data";

const [, , tema3] = data.temas;

const estilo = [
    { cumplimiento: "Cumplido", clase: "alert alert-success" },
    { cumplimiento: "No se cumplió", clase: "alert alert-danger" },
    { cumplimiento: "En proceso", clase: "alert alert-warning" },
];

export const Cumplimiento = ({ numeroDeCumplimiento }) => {
    const cumplimiento = tema3.listaCotejo[numeroDeCumplimiento].cumplio;
    const alertaCumplimiento = estilo.find(
        (elemento) => elemento.cumplimiento === cumplimiento
    ).clase;
    return (
        <div className={alertaCumplimiento} role="alert">
            {cumplimiento}
        </div>
    );
};
