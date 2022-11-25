import React from "react";
import "./style.css"

const Canvas = ({
    active,
    setActive,
}
) => {
    return(
        <div className={active ? "cnCanvasRoot active" : "cnCanvasRoot"} onClick={() => setActive(false)}>
            <div className={active ? "cnCanvasContent active" : "cnCanvasContent"} onClick={e => e.stopPropagation()}>
                <div>
                    <div className="cnCanvasHeader"></div>
                </div>
                <div>
                    <div className="cnCanvasMain"></div>
                </div>
            </div>
        </div>
    );
};

export default Canvas;