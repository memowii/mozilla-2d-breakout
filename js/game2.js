function Game(canvas, ctx, ball) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.ball = ball;

    this.draw = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ball.draw();
        this.ball.changePosition();

        requestAnimationFrame(this.draw.bind(this));
    };
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ball = new Ball(ctx, canvas.width/2, canvas.height-30, 10, "#0095DD", 2);
var game = new Game(canvas, ctx, ball);

game.draw();