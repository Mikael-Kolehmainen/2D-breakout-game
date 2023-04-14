class Bricks {
  constructor(columnCount, rowCount, brickWidth, brickHeight, brickPadding) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
  }

  draw() {
    for(var c=0; c<this.columnCount; c++) {
      for(var r=0; r<this.rowCount; r++) {
        if(bricks[c][r].status == 1) {
          var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
          var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}