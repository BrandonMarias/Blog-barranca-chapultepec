import { nanoid } from "nanoid";

const items = (lista = []) =>
    lista.map((item) => (
        <li className="py-3" key={nanoid()}>
            {item}
        </li>
    ));

export const Lista = ({ isOrder = true, lista = [] }) => {
    return (
        <div className="col-12 px-4 pb-3">
            {isOrder ? <ol>{items(lista)}</ol> : <ul>{items(lista)}</ul>}
        </div>
    );
};
