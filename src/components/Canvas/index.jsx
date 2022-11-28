import React from "react";
import "./style.css"
import DrawArea from "../DrawArea";

const Canvas = ({
    active,
    setActive,
}
) => {

    return(
        <div className={active ? "cnCanvasRoot active" : "cnCanvasRoot"} onClick={() => setActive(false)}>
            <div className={active ? "cnCanvasContent active" : "cnCanvasContent"} onClick={e => e.stopPropagation()}>
                <div className="cnCanvasHeader"></div>
                <DrawArea />
            </div>
        </div>
    );
};

export default Canvas;