export default class Bricks {
  constructor(ctx, columnCount, rowCount, width, height, padding, offsetLeft, offsetTop) {
    this.ctx = ctx;
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offsetLeft = offsetLeft;
    this.offsetTop = offsetTop;
    this.bricks = [];
  }

  draw() {
    for(let c=0; c<this.columnCount; c++) {
      for(let r=0; r<this.rowCount; r++) {
        if(bricks[c][r].status == 1) {
          const brickX = (r * (this.width + this.padding)) + this.offsetLeft;
          const brickY = (c * (this.height + this.padding)) + this.offsetTop;
          this.bricks[c][r] = { x: brickX, y: brickY, status: 1 };
          // bricks[c][r].x = brickX;
          // bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.width, this.height);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}