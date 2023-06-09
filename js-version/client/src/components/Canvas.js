import React, { useRef, useEffect } from 'react';
import { CANVAS } from '../const';

const Canvas = props => {

  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw]);

  return <canvas ref={canvasRef} width={CANVAS.width} height={CANVAS.height} {...rest}/>;
}

export default Canvas;
