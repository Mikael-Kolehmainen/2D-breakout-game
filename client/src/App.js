import React from "react";
import Canvas from "./Canvas";
import Bricks from "./components/Bricks";
import "./styles/main.css";

function App() {

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawBricks(ctx);
    drawBall();
  };

  const drawBricks = (ctx) => {
    const bricksLayout = new Bricks(ctx, 3, 5, 75, 20, 10, 30, 30);
    bricksLayout.draw();
  };

  const drawBall = () => {

  };

  return <Canvas draw={draw} />
}

export default App;
