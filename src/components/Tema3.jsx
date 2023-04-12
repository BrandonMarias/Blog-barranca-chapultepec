import { data } from "../data/data";
import { Carousel } from "./Carousel";
import { Encuesta } from "./Encuesta";
import { Figure } from "./Figure";
import { ListaDeCotejo } from "./ListaDeCotejo";
import { PDFViewer } from "./PDFViewer";
import { Subtitulo } from "./Subtitulo";
import { TituloPrincipal } from "./TituloPrincipal";
import { VideoYoutube } from "./VideoYoutube";

const [, , tema3] = data.temas;

const urlVideos = ["iTWzV3afwkI", "bmqPUy46Xoc", "gfXz3EUUCzs", "xbNhVQniQ20"];

export const Tema3 = () => {
    return (
        <div className="container" id="tema3">
            <hr />
            <br />
            <br />
            <TituloPrincipal titulo={tema3.desc} />
            <br />
            <article className="row">
                <Subtitulo titulo={tema3.titulos[0]} />
                <br />
                <Encuesta />
                <br />
                <br />

                <Subtitulo titulo={tema3.titulos[1]} />
                <ListaDeCotejo numeroAccion={0} />
                <Figure number={[17]} size={6} extencion="jpg" />

                <ListaDeCotejo numeroAccion={1} />
                <Figure number={[18, 19]} size={6} extencion="jpg" />
                <Figure number={[20]} size={6} extencion="jpg" />
                <VideoYoutube url={urlVideos[2]} />
                <PDFViewer />

                <ListaDeCotejo numeroAccion={2} />
                <Figure number={[21]} size={6} extencion="jpg" />

                <ListaDeCotejo numeroAccion={3} />
                <Figure number={[22]} size={6} extencion="jpg" />

                <ListaDeCotejo numeroAccion={4} />
                <Figure number={[23, 24]} size={6} extencion="jpg" />
                <Figure number={[25]} size={6} extencion="jpg" />
                <VideoYoutube url={urlVideos[0]} />

                <ListaDeCotejo numeroAccion={5} />
                <Figure number={[27, 26]} size={6} extencion="jpg" />

                <ListaDeCotejo numeroAccion={6} />
                <Figure number={[28,30]} size={6} extencion="jpg" />

                <Subtitulo titulo="Tabla de cotejo" />
                <br />
                <Figure number={[31]} size={6} extencion="jpg" />
                <br />
                <hr />
                <br />
                <Subtitulo titulo="Carrusel de imagenes" />
                <Carousel/>
            </article>
        </div>
    );
};
