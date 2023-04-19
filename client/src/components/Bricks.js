import Brick from "./Brick";

export default class Bricks {
  constructor(rowCount, columnCount, width, height, padding, offsetLeft, offsetTop) {
    this.ctx = null;
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offsetLeft = offsetLeft;
    this.offsetTop = offsetTop;
    this.bricks = [];
    this.#defineBricksArray();
  }

  #defineBricksArray() {
    for (let row = 0; row < this.rowCount; row++) {
      this.bricks[row] = [];
      for (let column = 0; column < this.columnCount; column++) {
        this.bricks[row][column] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  draw() {
    for (let row = 0; row < this.rowCount; row++) {
      for (let column = 0; column < this.columnCount; column++) {
        if (this.bricks[row][column].status === 1) {
          const brickX = (column * (this.width + this.padding)) + this.offsetLeft;
          const brickY = (row * (this.height + this.padding)) + this.offsetTop;

          const brick = new Brick(this.ctx, brickX, brickY, this.width, this.height);
          this.bricks[row][column] = brick.get();
          brick.draw();
        }
      }
    }
  }
}
