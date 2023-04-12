import { data } from "../data/data";
import { Cumplimiento } from "./Cumplimiento";

const [,,tema3] = data.temas;

export const ListaDeCotejo = ({numeroAccion = 0}) => {
  return (
    <div className="mt-5">
        <h6>{tema3.listaCotejo[numeroAccion].accion}</h6>
        <Cumplimiento numeroDeCumplimiento={numeroAccion} />
        <p className="ps-3">{tema3.listaCotejo[numeroAccion].observaciones}</p>
    </div>
  )
}
