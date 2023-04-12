import React from "react";
import {data} from "../data/data"

const {tituloPrincipan, descripcion,subtitulo} = data
export const Slider = () => {
    
    return (
        <div className="container-fluid slider d-flex flex-column justify-content-center align-items-center mb-4">
            <div className="text-dark text-center pb-5">
                <h4 className="mb-5 text-uppercase">{tituloPrincipan}</h4>
                <h2 className="display mb-4 text-capitalize">
                    {subtitulo}
                </h2>
                {/* <p className="text-muted">
                    {descripcion}
                </p> */}
            </div>
        </div>
    );
};
