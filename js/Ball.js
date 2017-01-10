function Ball(x, y, ballRadius, color) {
    this.x = x;
    this.y = y;
    this.ballRadius = ballRadius;
    this.color = color;
    
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };
}
