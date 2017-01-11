function Paddle(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.rightPressed = false;
    this.leftPressed = false;

    this.draw = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };

    this.checkPressedButton = function () {
        if(this.rightPressed && this.x < canvas.width - this.width) {
            this.x += 7;
        }
        else if(this.leftPressed && this.x > 0) {
            this.x -= 7;
        }
    };

    this.keyDownHandler = function (e) {
        if(e.keyCode == 39) {
            this.rightPressed = true;
        } else if(e.keyCode == 37) {
            this.leftPressed = true;
        }
    };

    this.keyUpHandler = function (e) {
        if(e.keyCode == 39) {
            this.rightPressed = false;
        } else if(e.keyCode == 37) {
            this.leftPressed = false;
        }
    };

    document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
    document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
}