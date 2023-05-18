/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const ROWS = grid.length, COLUMNS = grid[0].length;

    const DFS = (row, column) => {
        const stack = [[row, column]];
        let currRow, currColumn, resultArea = 0;
        while (stack.length !== 0){
            [currRow, currColumn] = stack.pop();
            if (grid[currRow][currColumn] !== 1)
                continue;

            grid[currRow][currColumn] = 2;
            resultArea++;
            if (currRow + 1 < ROWS)
                stack.push([currRow + 1, currColumn]);
            if (currRow - 1 >= 0)
                stack.push([currRow - 1, currColumn]);
            if (currColumn + 1 < COLUMNS)
                stack.push([currRow, currColumn + 1]);
            if (currColumn - 1 >= 0)
                stack.push([currRow, currColumn - 1]);
        } 
        return resultArea;
    };

    let maxArea = 0;
    for (let r = 0; r < ROWS; r++){
        for (let c = 0; c < COLUMNS; c++){
            if (grid[r][c] === 1){
                maxArea = Math.max(maxArea, DFS(r, c));
            }
        }
    }
    return maxArea;
};