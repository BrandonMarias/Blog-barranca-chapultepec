import { nanoid } from "nanoid";
import { data } from "../data/data";
import { Entrevista } from "./Entrevista";

const autores = [{nombre: "brandon", edad: 23}, {nombre: "vianey", edad: 48}, {nombre: "moroni", edad: 25}, {nombre: "francisco", edad: 21}];
const [, tema2, tema3] = data.temas;
export const Encuesta = () => {
    return (
        <div>
            {tema2.listas[2].map((item, index) => {
                return (
                    <div key={nanoid()}>
                        <h6 className="ps-3 pt-4 font-weight-bold">{ (index + 1) + ". " + item}</h6>
                        {autores.map((autor) => {
                            return (
                                <Entrevista
                                    key={nanoid()}
                                    autor={autor.nombre}
                                    pregunta={index + 1}
                                    edad={autor.edad}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
    