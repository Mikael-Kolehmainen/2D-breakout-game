import React from "react";
import Canvas from "./components/Canvas";
import Ball from "./components/Ball";
import Bricks from "./components/Bricks";
import { CANVAS } from "./const";
import "./styles/main.css";
import Paddle from "./components/Paddle";
import UIText from "./components/UIText";

// TODO:
// Create Brick class and use in Bricks
// Get game to work then clean the code
// Leaderboard
  // Ability to save score with initials
  // Leaderboard is shown below game
// Add jsdoc to code

function App() {
  // BRICKS LAYOUT
  const bricksLayout = new Bricks(3, 5, 75, 20, 10, 30, 30);
  // BALL
  let ballDX = 2;
  let ballDY = 2;
  const ball = new Ball(CANVAS.width / 2, CANVAS.height - 30, 10);
  // PADDLE
  const paddleWidth = 75;
  let paddleX = (CANVAS.width - paddleWidth) / 2;
  // SCORE
  let score = 0;

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawBricks(ctx);
    drawBall(ctx);
    drawPaddle(ctx);
    drawScore(ctx);
    collisionDetection();
    defineBorders();
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
    const paddle = new Paddle(ctx, paddleX, 10, paddleWidth);
    paddle.draw();
  };

  const drawScore = (ctx) => {
    const scoreText = new UIText(ctx, "Score: " + score, "16px Arial", "#0095DD", 8, 20);
    scoreText.draw();
  };

  const collisionDetection = () => {
    for(let column = 0; column < bricksLayout.columnCount; column++) {
      for(let row = 0; row < bricksLayout.rowCount; row++) {
        let brick = bricksLayout.bricks[column][row];
        if(brick.status === 1) {
          if(ball.x > brick.x && ball.x < brick.x + bricksLayout.width
            && ball.y > brick.y && ball.y < brick.y + bricksLayout.height) {
            ballDY = -ballDY;
            brick.status = 0;
            score++;
            if(score === bricksLayout.rowCount * bricksLayout.columnCount) {
              alert("YOU WIN, CONGRATS!");
              document.location.reload();
            }
          }
        }
      }
    }
  };

  const defineBorders = () => {
    if (ball.x + ballDX > CANVAS.width - ball.radius
      || ball.x + ballDX < ball.radius) {
      ballDX = -ballDX;
    }
    if (ball.y + ballDY < ball.radius) {
      ballDY = -ballDY;
    }
    else if (ball.y + ballDY > CANVAS.height - ball.radius) {
      if(ball.x > paddleX && ball.x < paddleX + paddleWidth) {
        ballDY = -ballDY;
      }
      else {
        alert("GAME OVER");
        document.location.reload();

        ball.x = CANVAS.width / 2;
        ball.y = CANVAS.height - 30;
        ballDX = 3;
        ballDY = -3;
        paddleX = (CANVAS.width - paddleWidth) / 2;
      }
    }
  };

  return <Canvas draw={draw} />
}

export default App;
