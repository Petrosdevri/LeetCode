/**
 * @param {number[][]} graph
 * @return {boolean}
 */

var isBipartite = function(graph) {
    let colorArr = new Array(graph.length).fill(-1);
    colorArr[0] = 1;
    let queue = [];
    for (let i=0; i<graph.length; i++) {
        if (graph[i].length > 0) {
        queue.push(i);
        }
    }

    while(queue.length) {
        let top = queue.shift();
        let neighbors = graph[top];

        for (let node of neighbors) {
        if (colorArr[node] === -1) {
            colorArr[node] = 1 - colorArr[top];
            queue.push(node);
        } else if (colorArr[node] === colorArr[top]) {
            return false;
        }
        }
    }
    return true;
};