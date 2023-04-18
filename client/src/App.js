import React from "react";
import Canvas from "./components/Canvas";
import Ball from "./components/Ball";
import Bricks from "./components/Bricks";
import { CANVAS } from "./const";
import "./styles/main.css";

// TODO:
// Create Brick class and use in Bricks

function App() {
  const x = CANVAS.width / 2;
  const y = CANVAS.height - 30;

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawBricks(ctx);
    drawBall(ctx);
  };

  const drawBricks = (ctx) => {
    const bricksLayout = new Bricks(ctx, 3, 5, 75, 20, 10, 30, 30);
    bricksLayout.draw();
  };

  const drawBall = (ctx) => {
    const ball = new Ball(ctx, x, y, 10);
    ball.draw();
  };

  return <Canvas draw={draw} />
}

export default App;
