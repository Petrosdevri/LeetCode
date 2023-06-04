/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const dfs = (node, isConnected, visit) => {
    visit[node] = true;
    for(let i=0; i<isConnected.length; i++) {
        if(isConnected[node][i] == 1 && !visit[i]) {
            dfs(i, isConnected, visit);
        }
    }
}

var findCircleNum = function(isConnected) {
    let numberOfCities = isConnected.length;
    let numberOfProvinces = 0;
    let visit = new Map();

    for(let i=0; i<numberOfCities; i++) {
        if(!visit[i]) {
            numberOfProvinces++;
            dfs(i, isConnected, visit);
        }
    }

    return numberOfProvinces;
};