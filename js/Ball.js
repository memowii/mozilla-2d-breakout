function Ball(x, y, ballRadius, color, ballSpeed) {
    this.x = x;
    this.y = y;
    this.ballRadius = ballRadius;
    this.color = color;
    this.dx = ballSpeed;
    this.dy = -ballSpeed;
    this.ballHitBottom = false;
    
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };
    
    this.moveIt = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
    
    this.checkCollision = function (paddle) {
        if (this.x + this.dx > canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        }

        if (this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        } else if (this.y + this.dy > canvas.height - this.ballRadius) {
            if (this.x > paddle.x && this.x < paddle.x + paddle.width) {
                this.dy = -this.dy;
            } else {
                this.ballHitBottom = true;
            }
        }

        if (this.y + this.dy > canvas.height - this.ballRadius || this.y + this.dy < ballRadius) {
            this.dy = -this.dy;
        } else {

        }
    };
}
