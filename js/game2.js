function Game(ball, paddle) {
    this.ball = ball;
    this.paddle = paddle;

    this.draw = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ball.draw();
        this.ball.checkCollision();
        this.ball.changePosition();
        this.paddle.draw();

        requestAnimationFrame(this.draw.bind(this));
    };
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ball = new Ball(canvas.width/2, canvas.height-30, 10, "#0095DD", 2);
var padde = new Paddle((canvas.width-75)/2, canvas.height-10, 75, 10, "#0095DD");
var game = new Game(ball, padde);

game.draw();