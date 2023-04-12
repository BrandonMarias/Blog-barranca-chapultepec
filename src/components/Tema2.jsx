import { data } from "../data/data";
import { TituloPrincipal } from "./TituloPrincipal";
import { Parrafo } from "./Parrafo";
import { Figure } from "./Figure";
import { Subtitulo } from "./Subtitulo";
import { Referencias } from "./Referencias";
import { Lista } from "./Lista";

const [,tema2] = data.temas
export const Tema2 = () => {
    return (
        <div className="container" id={tema2.referencia}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <TituloPrincipal titulo={tema2.desc} />
            <br />
            <br />
            <article className="row">
                {/* <Subtitulo titulo={tema1.titulos[1]} /> */}
                <br />
                <br />
                <Figure number={["8"]} size={8}/>
                <br />
                <Subtitulo titulo={tema2.titulos[0]} />
                <Parrafo texto={tema2.parrafos[0]} />

                <Subtitulo titulo={tema2.titulos[1]} />
                <Parrafo texto={tema2.parrafos[1]} />
                <Parrafo texto={tema2.parrafos[2]} />

                <Subtitulo titulo={tema2.titulos[2]} />
                <Parrafo texto={tema2.parrafos[3]} />

                <Subtitulo titulo={tema2.titulos[3]} />
                <Parrafo texto={tema2.parrafos[4]} />
                <Parrafo texto={tema2.parrafos[5]} />
                <Lista lista={tema2.listas[0]} />

                <Subtitulo titulo={tema2.titulos[4]} />
                <Lista lista={tema2.listas[1]} isOrder={false} />

                <Subtitulo titulo={tema2.titulos[5]} />
                <Parrafo texto={tema2.parrafos[6]} />

                <Subtitulo titulo={tema2.titulos[6]} />
                <Parrafo texto={tema2.parrafos[7]} />

                <Subtitulo titulo={tema2.titulos[7]} />
                <Parrafo texto={tema2.parrafos[8]} />
                <Parrafo texto={tema2.parrafos[9]} />
                <Parrafo texto={tema2.parrafos[10]} />

                <Subtitulo titulo={tema2.titulos[8]} />
                <Figure number={["16"]} extencion="jpg" size={9}/>

                <Subtitulo titulo={tema2.titulos[9]} />
                <Lista lista={tema2.listas[2]}/>

                <Subtitulo titulo={tema2.titulos[10]} />
                <Figure number={["14"]} extencion="jpg" size={9}/>

                <Subtitulo titulo={tema2.titulos[11]} />
                <Parrafo texto={tema2.parrafos[12]} />
                <Referencias id={"referenciaT2"} referencias={tema2.referencias}/>
            </article>
        </div>
    );
};
