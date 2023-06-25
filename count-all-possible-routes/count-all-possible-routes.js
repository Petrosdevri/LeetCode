/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    let visited = new Map();
    let mod = 10 ** 9 + 7;

    let dfs = (current, fuel) => {
        let id = `${current},${fuel}`;
        if (!visited.has(id)) {
            let paths = 0;
            if(current === finish) paths++;
            for(let i=0; i<locations.length; i++) {
                if(i !== current) {
                    let remaining = fuel-Math.abs(locations[current]-locations[i]);
                    if(remaining >= 0) {
                        paths += dfs(i, remaining);
                    }
                }
            }
            visited.set(id, paths%mod);
        }
        return visited.get(id);
    }
    return dfs(start, fuel);
};