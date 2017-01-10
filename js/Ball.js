function Ball(ctx, x, y, ballRadius, color, ballSpeed) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.ballRadius = ballRadius;
    this.color = color;
    this.dx = ballSpeed;
    this.dy = -ballSpeed;
    
    this.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    
    this.changePosition = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
}
