/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const indegree = new Array(n).fill(0);
    const res = [];

    for(let edge of edges) {
        indegree[edge[1]]++;
    }
    for(let i in indegree) {
        if(indegree[i] === 0) {
            res.push(i);
        }
    }

    return res;
};