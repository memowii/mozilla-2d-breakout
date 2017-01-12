function BrickGrid(brick, gridColumnCount, gridRowCount, gridOffsetTop, gridOffsetLeft) {
    this.brick = brick;
    this.gridColumnCount = gridColumnCount;
    this.gridRowCount = gridRowCount;
    this.gridOffsetTop = gridOffsetTop;
    this.gridOffsetLeft = gridOffsetLeft;
    var bricks = [];

    this.buildGrid = function () {
        for (c = 0; c < this.gridColumnCount; c++) {
            bricks[c] = [];
            for (r = 0; r < this.gridRowCount; r++) {
                bricks[c][r] = {x: 0, y: 0, status: 1};
            }
        }
    };

    this.draw = function () {
        for (c = 0; c < this.gridColumnCount; c++) {
            for (r = 0; r < this.gridRowCount; r++) {
                if (bricks[c][r].status == 1) {
                    var brickX = (c * (this.brick.width + this.brick.padding)) + this.gridOffsetTop;
                    var brickY = (r * (this.brick.height + this.brick.padding)) + this.gridOffsetLeft;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    this.brick.draw(brickX, brickY);
                }
            }
        }  
    };
}