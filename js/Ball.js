function Ball(ctx, x, y, ballRadius, color, ballSpeed) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.ballRadius = ballRadius;
    this.color = color;
    this.ballSpeed = ballSpeed;
    
    this.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    
    this.changePos = function () {
        this.x += this.ballSpeed;
        this.y += -this.ballSpeed;
    };
}
