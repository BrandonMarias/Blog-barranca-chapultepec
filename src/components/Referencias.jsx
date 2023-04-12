import { nanoid } from "nanoid";

export const Referencias = ({ id, referencias = ejemplos }) => {
    return (
        <>
            <div className="py-4">
                <button
                    type="button"
                    className="btn btn-outline-info"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + id}
                >
                    {" "}
                    Ver referencias
                </button>
            </div>

            <div className="collapse" id={id}>
                {referencias.map((referencia) => (
                    <p className="card card-body" key={nanoid()}>
                        {referencia[0]}<em>{referencia[1]}</em>
                        {referencia[2]}
                    </p>
                ))}
            </div>
        </>
    );
};
