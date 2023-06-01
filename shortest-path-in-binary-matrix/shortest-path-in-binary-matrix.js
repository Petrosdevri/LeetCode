/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	];

    if(grid[0][0] == 1) return -1;

    const n = grid.length;
    const queue = [[0, 0, 1]];

    while(queue.length) {
        const [row, col, path] = queue.shift();
        if(row == n-1 && col == n-1) return path;

        for(const [dx, dy] of directions) {
            let x = row+dx;
            let y = col+dy;

            if(x < 0 || x >= n) continue;
            if(y < 0 || y >= n) continue;
            if(grid[x][y] != 0) continue;

            queue.push([x, y, path+1]);
            grid[x][y] = 1; 
        }
    }
     
    return -1;
};