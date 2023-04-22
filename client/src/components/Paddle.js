import { CANVAS } from "../const";

export default class Paddle {
  constructor(x, height, width) {
    this.ctx = null;
    this.x = x;
    this.height = height;
    this.width = width;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, CANVAS.height - this.height, this.width, this.height);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  controller() {
    if (rightPressed && this.#spaceToRight()) {
      this.x += 5;
    } else if (leftPressed && this.#spaceToLeft()) {
      this.x -= 5;
    }
  }

  #spaceToRight() {
    return this.x < CANVAS.width - this.width;
  }

  #spaceToLeft() {
    return this.x > 0;
  }
}

let rightPressed = false;
let leftPressed = false;

const keyDownHandler = (e) => {
  if (e.key === "d") {
    rightPressed = true;
  } else if (e.key === "a") {
    leftPressed = true;
  }
};

const keyUpHandler = (e) => {
  if (e.key === "d") {
    rightPressed = false;
  } else if (e.key === "a") {
    leftPressed = false;
  }
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
