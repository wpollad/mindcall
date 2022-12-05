import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css"

const Canvas = ({
    active,
    setActive,
}
) => {
    const canvasRef = useRef(null);
    const ctx = useRef(null);

    const height = window.innerWidth * 0.7 / 16 * 9 * 1.01;
    const width = window.innerWidth * 0.7;

    const [mouseDown, setMouseDown] = useState(false);
    const [lastPosition, setPosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        if (canvasRef.current){
            ctx.current = canvasRef.current.getContext("2d");
            ctx.current.rect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
            ctx.current.fillStyle = "#ffebae";
            ctx.current.fill();
        }
    }, []);

    const draw = useCallback((x, y, width) => {
        if (mouseDown) {
            ctx.current.beginPath();
            ctx.current.strokeStyle = "#3B3657";
            ctx.current.lineWidth = width;
            ctx.current.lineJoin = "round";
            ctx.current.moveTo(lastPosition.x, lastPosition.y);
            ctx.current.lineTo(x, y);
            ctx.current.closePath();
            ctx.current.stroke();

            setPosition({
                x,
                y
            })
        }
    }, [lastPosition, mouseDown, setPosition])

    const download = async () => {
        const image = canvasRef.current.toDataURL(`image/png`);
        const blob = await (await fetch(image)).blob();
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobURL;
        link.download = "image.png";
        link.click();
    }

    const clear = () => {
        if (ctx.current){
            ctx.current.rect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
            ctx.current.fillStyle = "#ffebae";
            ctx.current.fill();
        }
    }

    const onMouseDown = (e) => {
        const points = computePointInCanvas(e.clientX, e.clientY)
        setPosition({
            x: points.x,
            y: points.y
        })
        setMouseDown(true);
    }

    const onMouseUp = (e) => {
        setMouseDown(false);
    }

    const onMouseMove = (e) => {
        const points = computePointInCanvas(e.clientX, e.clientY);
        draw(points.x, points.y, width / 40);
    }

    function computePointInCanvas (clientX, clientY) {
        if (canvasRef.current){
            const boundingRect = canvasRef.current.getBoundingClientRect();
            return {
                x : clientX - boundingRect.left,
                y : clientY - boundingRect.top
            }
        } else {
            return null;
        }
    }


    return(
        <div className={active ? "cnCanvasRoot active" : "cnCanvasRoot"}>
            <div className={active ? "cnCanvasContent active" : "cnCanvasContent"}>
                <div className="cnCanvasHeader">
                    <div className="fas fa-floppy-disk icon" onClick={download}></div>
                    <div className="fas fa-trash icon" onClick={clear}></div>
                    <div className="fas fa-x icon" onClick={() => setActive(false)}></div>
                </div>
                <div>
                    <canvas 
                        height={height} 
                        width={width}
                        ref={canvasRef}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseUp}
                    />
                </div>
            </div>
        </div>
    );
};



export default Canvas;