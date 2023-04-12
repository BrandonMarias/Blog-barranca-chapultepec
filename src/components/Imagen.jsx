import React from "react";

export const Imagen = ({ number = 1, extencion = "jpeg" }) => {
    return (
        <>
            <a
                href="#!"
                data-bs-toggle="modal"
                data-bs-target={`#imagen${number}`}
            >
                <img
                    src={`img/imagen${number}.` + extencion}
                    className="figure-img img-fluid rounded"
                    alt={number}
                />
            </a>
            <div
                className="modal fade"
                id={`imagen${number}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <img
                                src={`img/imagen${number}.` + extencion}
                                className="figure-img img-fluid rounded"
                                alt={number}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
