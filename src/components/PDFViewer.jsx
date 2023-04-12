import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useState } from "react";

export const PDFViewer = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <div className="container pt-4">

            <button
                className="btn btn-primary btn-lg mb-4"
                onClick={handleShow}
            >
                {show ? "Ocultar PDF" : "Mostrar PDF"}
            </button>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        height: "750px",
                    }}
                    className={show ? "d-block" : "d-none"}
                >
                    <Viewer fileUrl="./pdf/carpita.pdf" />
                </div>
            </Worker>
        </div>
    );
};
