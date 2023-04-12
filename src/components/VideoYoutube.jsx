export const VideoYoutube = ({ url = "" }) => {
    return (
        <div className="ratio ratio-16x9 text-center mt-4 overflow-hidden">
            <iframe
                src={"https://www.youtube.com/embed/" + url}
                allowFullScreen
                className="embed-responsive-item"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};
