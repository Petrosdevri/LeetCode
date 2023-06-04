const dfs = (node: number, isConnected: number[][], visit: boolean) => {
    visit[node] = true;
    for(let i=0; i<isConnected.length; i++) {
        if(isConnected[node][i] == 1 && !visit[i]) {
            dfs(i, isConnected, visit);
        }
    }
}

function findCircleNum(isConnected: number[][]): number {
    let numberOfCities: number = isConnected.length;
    let numberOfProvinces: number = 0;
    let visit: any = new Map();

    for(let i: number = 0; i<numberOfCities; i++) {
        if(!visit[i]) {
            numberOfProvinces++;
            dfs(i, isConnected, visit);
        }
    }

    return numberOfProvinces;
};