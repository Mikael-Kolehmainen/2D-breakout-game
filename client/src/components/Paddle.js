import { CANVAS } from "../const";

export default class Paddle {
  constructor(ctx, x, height, width) {
    this.ctx = ctx;
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
}
