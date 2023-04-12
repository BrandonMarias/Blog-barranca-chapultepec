const linkAudio =
    "https://res.cloudinary.com/dq0x6gjxj/video/upload/v1681088125/audios/";

export const Entrevista = ({
    autor = "brandon",
    pregunta = 1,
    edad = "22",
}) => {
    return (
        <>
            <p className="ps-3 pt-4 text-capitalize">
                Respuesta de {autor}, {edad} años
            </p>
            <audio
                src={linkAudio + autor + pregunta + ".wav"}
                controls
                preload="none"
            ></audio>
        </>
    );
};
