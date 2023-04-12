export const Carousel = () => {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide mt-4"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/imagen4.jpeg" className="d-block w-100" alt="..." />
                </div>
                {
                    [29,32,33,34,36,37,38].map((number) => {
                        return (
                            <div className="carousel-item" key={number}>
                                <img
                                    src={`img/imagen${number}.jpg`}
                                    className="d-block w-100"
                                    alt={number}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};
