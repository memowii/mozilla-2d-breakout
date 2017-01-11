function Ball(x, y, ballRadius, color, ballSpeed) {
    this.x = x;
    this.y = y;
    this.ballRadius = ballRadius;
    this.color = color;
    this.dx = ballSpeed;
    this.dy = -ballSpeed;
    
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };
    
    this.changePosition = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
    
    this.checkCollision = function () {
        if (this.x + this.dx > canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        }

        if (this.y + this.dy > canvas.height - this.ballRadius || this.y + this.dy < ballRadius) {
            this.dy = -this.dy;
        }
    };
}
