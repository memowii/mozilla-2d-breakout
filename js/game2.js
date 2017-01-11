function Game(ball) {
    this.ball = ball;

    this.draw = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ball.draw();
        this.ball.changePosition();

        requestAnimationFrame(this.draw.bind(this));
    };
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ball = new Ball(canvas, ctx, canvas.width/2, canvas.height-30, 10, "#0095DD", 2);
var game = new Game(ball);

game.draw();