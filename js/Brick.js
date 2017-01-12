function Brick(width, height, padding, color) {
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.color = color;

    this.draw = function (x, y) {
        ctx.beginPath();
        ctx.rect(x, y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };
}
