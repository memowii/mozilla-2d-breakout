function Game(player, ball, brickGrid, scoreManager, livesManager) {
    this.player = player;
    this.ball = ball;
    this.brickGrid = brickGrid;
    this.scoreManager = scoreManager;
    this.livesManager = livesManager;

    this.draw = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.brickGrid.draw();
        this.ball.draw();
        this.player.paddle.draw();
        this.scoreManager.draw();
        this.livesManager.draw();
        this.brickGrid.collisionDetection(this.ball, this.scoreManager);
        this.ball.checkCollision(this.player.paddle);
        this.isPlayerBeaten(this.ball, this.livesManager);
        this.player.checkPressedButton();
        this.ball.moveIt();

        requestAnimationFrame(this.draw.bind(this));
    };

    this.isPlayerBeaten = function (ball, livesManager) {
        if (ball.ballHitBottom) {
            livesManager.lives--;
            if (!livesManager.lives) {
                alert("GAME OVER");
                document.location.reload();
            } else {
                this.ball.x = canvas.width / 2;
                this.ball.y = canvas.height - 30;
                this.player.paddle.x = (canvas.width - this.player.paddle.width) / 2;
                ball.ballHitBottom = false;
            }
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
var scoreManager = new ScoreManager(8, 20, "16px Arial", "#0095DD");
var livesManager = new LivesManager(canvas.width - 65, 20, "16px Arial", "0095DD", 3);
var game = new Game(player, ball, brickGrid, scoreManager, livesManager);

game.draw();