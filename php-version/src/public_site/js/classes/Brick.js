class Brick {

  /**
   * @param {*} ctx
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /**
   * @typedef {object} BrickInfo
   * @property {number} x
   * @property {number} y
   * @property {number} status
   */

  /**
   * @returns {BrickInfo}
   */
  get() {
    return { x: this.x, y: this.y, status: 1 };
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
