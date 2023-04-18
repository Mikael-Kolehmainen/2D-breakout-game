export default class Ball {
    constructor(x, y, radius) {
        this.ctx = null;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}
