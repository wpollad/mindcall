import { useEffect, useRef } from "react";

export function useOnDraw (onDraw) {

    const canvasRef = useRef(null);

    const isDrawingRef = useRef(false);

    const mouseMoveListnerRef = useRef(null);
    const mouseDownListnerRef = useRef(null);
    const mouseUpListnerRef = useRef(null);

    const prevPointRef = useRef(null);

    useEffect(() => {
        return () => {
            if (mouseMoveListnerRef.current){
                window.removeEventListener("mousemove",mouseMoveListnerRef.current);
            }
            if (mouseUpListnerRef.current){
                window.removeEventListener("mouseup",mouseUpListnerRef.current);
            }
        }
    }, [])

    function setCanvasRef (ref) {
        if (!ref) return;
        if (canvasRef.current){
            canvasRef.current.removeEventListener("mousedown", mouseDownListnerRef.current);
        }
        canvasRef.current = ref;
        initMouseMoveListener();
        initMouseDownListener();
        initMouseUpListener();
    }

    function initMouseMoveListener () {
        const mouseMoveListner = (e) => {
            if (isDrawingRef.current) {
                const point = computePointInCanvas(e.clientX, e.clientY);
                const ctx = canvasRef.current.getContext("2d");
                if (onDraw) onDraw(ctx, point, prevPointRef.current);
                prevPointRef.current = point;
                console.log(point);
            }
        }
        mouseMoveListnerRef.current = mouseMoveListner;
        window.addEventListener('mousemove', mouseMoveListner);
    }

    function initMouseUpListener() {
        const listener = () => {
            isDrawingRef.current = false;
            prevPointRef.current = null;
        }
        mouseUpListnerRef.current = listener;
        window.addEventListener('mouseup', listener);
    } 

    function initMouseDownListener() {
        if (!canvasRef.current) return;
        const listener = () => {
            isDrawingRef.current = true;
        }
        mouseDownListnerRef.current = listener;
        canvasRef.current.addEventListener('mousedown', listener);
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

    return setCanvasRef;
}