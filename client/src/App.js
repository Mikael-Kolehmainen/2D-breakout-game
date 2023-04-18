import React from "react";
import Canvas from "./components/Canvas";
import Ball from "./components/Ball";
import Bricks from "./components/Bricks";
import { CANVAS } from "./const";
import "./styles/main.css";
import Paddle from "./components/Paddle";

// TODO:
// Create Brick class and use in Bricks
// Make classes global to replace global variables

function App() {
  const ballX = CANVAS.width / 2;
  const ballY = CANVAS.height - 30;
  const paddleWidth = 75;
  const paddleX = (CANVAS.width - paddleWidth) / 2;


  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawBricks(ctx);
    drawBall(ctx);
    drawPaddle(ctx);
  };

  const drawBricks = (ctx) => {
    const bricksLayout = new Bricks(ctx, 3, 5, 75, 20, 10, 30, 30);
    bricksLayout.draw();
  };

  const drawBall = (ctx) => {
    const ball = new Ball(ctx, ballX, ballY, 10);
    ball.draw();
  };

  const drawPaddle = (ctx) => {
    const paddle = new Paddle(ctx, );
    paddle.draw();
  };

  return <Canvas draw={draw} />
}

export default App;
