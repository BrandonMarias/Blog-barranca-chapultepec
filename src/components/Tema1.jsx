import React from "react";
import { data } from "../data/data";
import { TituloPrincipal } from "./TituloPrincipal";
import { Parrafo } from "./Parrafo";
import { Figure } from "./Figure";
import { Subtitulo } from "./Subtitulo";
import { Referencias } from "./Referencias";

const [tema1] = data.temas;
export const Tema1 = () => {
    return (
        <div className="container" id={tema1.referencia}>
            <br />
            <br />
            <TituloPrincipal titulo={tema1.desc} />
            <br />
            <br />
            <article className="row">
                <Subtitulo titulo={tema1.titulos[1]} />
                <br />
                <br />
                <Figure number={["15"]} extencion="jpg" size={9}/>
                <Parrafo texto={tema1.parrafos[0]} />
                <Figure number={["1"]}/>
                <Parrafo texto={tema1.parrafos[1]} />
                <Figure number={["2","5"]}/>
                <Parrafo texto={tema1.parrafos[2]} />
                <Figure number={["3","4"]}/>
            </article>
            <Referencias id={"id23"} referencias={tema1.referencias}/>
            <br />
            <hr />
            <br />
        </div>
    );
};
