function Player(paddle, lives) {
    this.paddle = paddle;
    this.lives = lives;
    this.rightPressed = false;
    this.leftPressed = false;

    this.checkPressedButton = function () {
        if(this.rightPressed && this.paddle.x < canvas.width - this.paddle.width) {
            this.paddle.x += 7;
        } else if(this.leftPressed && this.paddle.x > 0) {
            this.paddle.x -= 7;
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

    this.mouseMoveHandler = function (e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            this.paddle.x = relativeX - this.paddle.width / 2;
        }
    };

    document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
    document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
    document.addEventListener("mousemove", this.mouseMoveHandler.bind(this), false);
}