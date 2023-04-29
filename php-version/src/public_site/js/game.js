const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const restartBtn = document.getElementById("restart-btn");
const gameStateElement = document.getElementById("game-state");
const gameResultElement = document.getElementById("game-result");
let bricksLayout, ball, paddle, isGameRunning, score, startTime, finalTime;

const setupGame = () => {
  bricksLayout = new Bricks(3, 11, 37.5, 20, 1, 30, 30);

  const ballX = getRandomNumber(10, canvas.width - 10);
  const ballY = getRandomNumber(10, canvas.height - 130);
  ball = new Ball(ballX, ballY, 1.5, 1.5, 10);
  paddle = new Paddle((canvas.width - 75) / 2, 10, 75);

  startTime = new Date();
  score = 0;

  gameStateElement.innerText = "";
  gameStateElement.setAttribute("class", "game-state");
  restartBtn.innerText = "RESTART";

  isGameRunning = true;
};

const draw = () => {
  if (isGameRunning) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
            finalTime = Math.floor((endTime - startTime) / 1000);

            gameResultElement.innerText = `Your result: ${finalTime}s`;
            gameStateElement.innerText = "YOU WIN!";
            gameStateElement.setAttribute("class", "game-state green");
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
      gameStateElement.innerText = "GAME OVER!";
      gameStateElement.setAttribute("class", "game-state red");
      isGameRunning = false;
    }
  }
};

const updateBallPosition = () => {
  ball.updatePosition();
};

const restartClicked = () => {
  setupGame();
};

restartBtn.addEventListener("click", restartClicked);

setInterval(draw, 6);
