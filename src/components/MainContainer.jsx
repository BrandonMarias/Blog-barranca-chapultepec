import { Aside } from "./Aside";
import { Collage } from "./Collage";

import { Tema1 } from "./Tema1";
import { Tema2 } from "./Tema2";
import { Tema3 } from "./Tema3";

export const MainContainer = () => {
    return (
        <main className="container">
            <h4 className="fst-italic">
                Por <small className="text-muted">Sarahí Rodríguez Bueno</small>
            </h4>
            <hr />

            <div className="row">
                <section className="col-lg-9">
                    <Tema1 />
                    <Tema2 />
                    <Collage />
                    <Tema3 />
                </section>
                <Aside />
            </div>
        </main>
    );
};
