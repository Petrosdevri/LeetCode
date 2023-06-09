/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let left = 0, right = mat.length - 1;
    for(let i = 0; i < mat.length; i++) {
        if(left == right) {
            sum += mat[i][left] 
        } else {
            sum += mat[i][left]
            sum += mat[i][right]
        }
        left++;
        right--;
    }
    return sum;
};