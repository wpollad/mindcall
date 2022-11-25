import React, { useState } from "react";
import Canvas from "../Canvas";
import "./style.css";

const NewArtIcon = () => {
    const [canvasActive, setCanvasActive] = useState(false);
    return (
        <div className="cnNewArtIconRoot">
            <Canvas active={canvasActive} setActive={setCanvasActive} />
            <div className="fas fa-paintbrush" onClick={() => setCanvasActive(true)}></div>
        </div>
    );
};

export default NewArtIcon;