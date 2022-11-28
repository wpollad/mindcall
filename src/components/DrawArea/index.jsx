import { useOnDraw } from "./Hooks";
import "./style.css"

const DrawArea = () => {

    const height = window.innerWidth * 0.7 / 16 * 9;
    const width = window.innerWidth * 0.7;

    const setCanvasRef = useOnDraw(onDraw);

    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, "#3B3657", 5);
    }

    function drawLine (
        start,
        end,
        ctx,
        color,
        width
    ){
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    return(
        <canvas ref={setCanvasRef} width={width} height={height}/>
    )
}

export default DrawArea;

