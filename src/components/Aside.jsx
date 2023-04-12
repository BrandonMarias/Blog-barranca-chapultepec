import {data } from "../data/data"
import { nanoid } from "nanoid";

export const Aside = () => {
    return (
        <aside className="col-lg-3 d-none d-lg-block">
            <nav
                className="nav flex-column bg-light rounded my-4 px-2 position-sticky"
                style={{ top: "2rem" }}
            >
                <a
                    className="nav-link active link-dark fs-4"
                    aria-current="page"
                    href="#"
                >
                    Temas
                </a>

                {data.temas.map((tema, index) => (
                    <a
                        className="nav-link"
                        href={`#${tema.referencia}`}
                        key={nanoid()}
                    >
                        {index + 1}. {tema.desc}
                    </a>
                ))}
            </nav>
        </aside>
    );
};
