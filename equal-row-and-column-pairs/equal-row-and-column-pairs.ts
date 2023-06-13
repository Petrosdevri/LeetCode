function equalPairs(grid: number[][]): number {
    let count: number = 0;
    
    for(let r=0; r<grid.length; r++) {
        for(let c=0; c<grid.length; c++) {
            let match: boolean = true;

            for(let i=0; i<grid.length; i++) {
                if(grid[r][i] != grid[i][c]) {
                    match = false;
                    break;
                }
            }

            count += match ? 1 : 0;
        }
    }

    return count;
};