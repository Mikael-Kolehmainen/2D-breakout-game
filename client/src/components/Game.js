import React, { useState } from "react";
import Canvas from "./Canvas";
import Bricks from "./Bricks";
import Ball from "./Ball";
import Paddle from "./Paddle";
import UIText from "./UIText";
import { CANVAS } from "./../const";

const Game = () => {
  const bricksLayout = new Bricks(3, 9, 37.5, 20, 10, 30, 30);
  const ball = new Ball(CANVAS.width / 2, CANVAS.height - 30, 2, 2, 10);
  const paddle = new Paddle((CANVAS.width - 75) / 2, 10, 75);

  let score = 0;
  let startTime = new Date();
  const [gameState, setGameState] = useState("");
  let isGameRunning = true;

  const draw = (ctx, frameCount) => {
    if (isGameRunning) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawBricks(ctx);
      drawBall(ctx);
      drawPaddle(ctx);
      drawTimer(ctx);

      collisionDetection();

      defineBorders();
      defineLosingCondition();

      updateBallPosition();
    }
  };

  const drawBricks = (ctx) => {
    bricksLayout.ctx = ctx;
    bricksLayout.draw();
  };

  const drawBall = (ctx) => {
    ball.ctx = ctx;
    ball.draw();
  };

  const drawPaddle = (ctx) => {
    paddle.ctx = ctx;
    paddle.draw();
    paddle.controller();
  };

  const drawTimer = (ctx) => {
    const endTime = new Date();
    const elapsedTime = endTime - startTime;
    const elapsedTimeInSeconds = Math.floor(elapsedTime / 1000);

    const timerText = new UIText(ctx, "Time: " + elapsedTimeInSeconds, "16px Arial", "#0095DD", 8, 20);
    timerText.draw();
  };

  const collisionDetection = () => {
    for(let row = 0; row < bricksLayout.rowCount; row++) {
      for(let column = 0; column < bricksLayout.columnCount; column++) {
        let brick = bricksLayout.bricks[row][column];
        if(brick.status === 1) {
          if(ball.x > brick.x && ball.x < brick.x + bricksLayout.width
            && ball.y > brick.y && ball.y < brick.y + bricksLayout.height) {
            ball.dy = -ball.dy;
            brick.status = 0;
            score++;
            if(score === bricksLayout.rowCount * bricksLayout.columnCount) {
              const endTime = new Date();
              const elapsedTime = endTime - startTime;

              setGameState("YOU WIN, CONGRATS!");
              isGameRunning = false;
            }
          }
        }
      }
    }
  };

  const defineBorders = () => {
    ball.defineBorders();
  };

  const defineLosingCondition = () => {
    if (ball.y + ball.dy > CANVAS.height - ball.radius) {
      if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
        ball.dy = -ball.dy;
      } else {
        setGameState("GAME OVER!");
        isGameRunning = false;

        ball.x = CANVAS.width / 2;
        ball.y = CANVAS.height - 30;
        ball.dx = 3;
        ball.dy = -3;
        paddle.x = (CANVAS.width - paddle.width) / 2;
        startTime = new Date();
      }
    }
  };

  const updateBallPosition = () => {
    ball.updatePosition();
  };

  return (
    <div className="game">
      <p>{gameState}</p>
      <Canvas draw={draw} />
      <button type="button">RESTART</button>
    </div>
  );
};

export default Game;
