/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix=[], count = 0, x = 0, y = 0;
    const maxElements=n*n;

    for(let i=0; i<n; i++) {
        matrix[i]= new Array();
    }

    while(maxElements>count) {
        for(let i=x; maxElements>count && i<n-x; i++) {
            count++;
            matrix[y][i] = count;
        }
        y++;

        for(let i=y; maxElements>count && i<n-(y-1); i++) {
            count++;
            matrix[i][(n-1) - x] = count;
        }
        x++;

        for(let i=(n-1)-x; maxElements>count && i>=x-1; i--) {
            count++;
            matrix[(n-1)-(y-1)][i] = count;
        }

        for(let i=(n-1)-y; maxElements>count && i>=y; i--) {
            count++;
            matrix[i][x-1] = count;
        }
    }
    return matrix;
};