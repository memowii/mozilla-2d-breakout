function ScoreManager(x, y, font, fillStyle) {
    this.font = font;
    this.fillStyle = fillStyle;
    this.x = x;
    this.y = y;
    this.score = 0;

    this.draw = function () {
        ctx.font = this.font;
        ctx.fillStyle = this.fillStyle;
        ctx.fillText("Score: " + this.score, this.x, this.y);
    }
}