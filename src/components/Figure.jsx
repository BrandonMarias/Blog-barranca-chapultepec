import { Imagen } from "./Imagen";

export const Figure = ({ number = [1], size = 6, extencion = "jpeg" }) => {
    const unaImagen = (
        <>
            <div className="col"></div>
            <div className={`col-12 col-md-${size}`}>
                {/* <figure className="figure">
                    <img
                        src={`img/imagen${number[0]}.` + extencion}
                        className="figure-img img-fluid rounded"
                        alt={number[0]}
                    />
                </figure> */}
                <Imagen number={number[0]} extencion={extencion} />
            </div>
            <div className="col"></div>
        </>
    );

    const dosImagenes = (
        <>
            <div className="col"></div>
            <div className={`col-12 col-md-5`}>
                <Imagen number={number[0]} extencion={extencion} />
            </div>
            <div className={`col-12 col-md-5`}>
                <Imagen number={number[1]} extencion={extencion} />
            </div>
            <div className="col"></div>
            
        </>
    );

    return (
        <div className="col-12">
            <div className="row">
                {number.length == 1 ? unaImagen : dosImagenes}
            </div>
        </div>
    );
};
