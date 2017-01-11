function Game(player, ball) {
    this.player = player;
    this.ball = ball;

    this.draw = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ball.draw();
        this.player.paddle.draw();
        this.ball.checkCollision();
        this.player.checkPressedButton();
        this.ball.moveIt();

        requestAnimationFrame(this.draw.bind(this));
    };
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ball = new Ball(canvas.width/2, canvas.height-30, 10, "#0095DD", 2);
var paddle = new Paddle((canvas.width-75)/2, canvas.height-10, 75, 10, "#0095DD");
var player = new Player(paddle, 3);
var game = new Game(player, ball);

game.draw();