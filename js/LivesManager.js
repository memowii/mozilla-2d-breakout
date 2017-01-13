function LivesManager(x, y, font, fillStyle, lives) {
    this.font = font;
    this.fillStyle = fillStyle;
    this.x = x;
    this.y = y;
    this.lives = lives;

    this.draw = function () {
        ctx.font = this.font;
        ctx.fillStyle = this.fillStyle;
        ctx.fillText("Lives: " + this.lives, x, y);
    };

}