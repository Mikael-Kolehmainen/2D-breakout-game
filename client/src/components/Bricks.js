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
    this.#defineBricksArray();
  }

  #defineBricksArray() {
    for(let column = 0; column < this.columnCount; column++) {
      this.bricks[column] = [];
      for(let row = 0; row < this.rowCount; row++) {
        this.bricks[column][row] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  draw() {
    for(let column = 0; column < this.columnCount; column++) {
      for(let row = 0; row < this.rowCount; row++) {
        if(this.bricks[column][row].status === 1) {
          const brickX = (row * (this.width + this.padding)) + this.offsetLeft;
          const brickY = (column * (this.height + this.padding)) + this.offsetTop;
          this.bricks[column][row] = { x: brickX, y: brickY, status: 1 };
          this.ctx.beginPath();
          this.ctx.rect(brickX, brickY, this.width, this.height);
          this.ctx.fillStyle = "#0095DD";
          this.ctx.fill();
          this.ctx.closePath();
        }
      }
    }
  }
}