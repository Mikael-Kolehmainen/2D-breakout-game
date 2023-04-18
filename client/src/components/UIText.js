export default class UIText {
  constructor(ctx, text, font, color, x, y) {
    this.ctx = ctx;
    this.text = text;
    this.font = font;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  draw() {
    this.ctx.font = this.font;
    this.ctx.fillStyle = this.color;
    this.ctx.fillText(this.text, this.x, this.y);
  }
}
