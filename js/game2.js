function Game(player, ball, brickGrid) {
    this.player = player;
    this.ball = ball;
    this.brickGrid = brickGrid;

    this.draw = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.brickGrid.draw();
        this.ball.draw();
        this.player.paddle.draw();
        this.ball.checkCollision(this.player.paddle);
        this.isPlayerBeaten(this.ball);
        this.player.checkPressedButton();
        this.ball.moveIt();

        requestAnimationFrame(this.draw.bind(this));
    };

    this.isPlayerBeaten = function (ball) {
        if (ball.ballHitBottom) {
            alert("GAME OVER");
            document.location.reload();
        }
    };
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ball = new Ball(canvas.width / 2, canvas.height - 30, 10, "#0095DD", 2);
var paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 10, 75, 10, "#0095DD");
var player = new Player(paddle, 3);
var brick = new Brick(75, 20, 10, "#0095DD");
var brickGrid = new BrickGrid(brick, 5, 3, 30, 30);
brickGrid.buildGrid();
var game = new Game(player, ball, brickGrid);

game.draw();