import { CANVAS } from "../const";

export default class Ball {
  constructor(x, y, dx, dy, radius) {
    this.ctx = null;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  updatePosition() {
    this.x += this.dx;
    this.y += this.dy;
  }

  defineBorders() {
    if (this.#xBorders()) {
      this.dx = -this.dx;
    }

    if (this.#yBorders()) {
      this.dy = -this.dy;
    }
  }

  #xBorders() {
    return this.x + this.dx > CANVAS.width - this.radius || this.x + this.dx < this.radius;
  }

  #yBorders() {
    return this.y + this.dy < this.radius;
  }
}
