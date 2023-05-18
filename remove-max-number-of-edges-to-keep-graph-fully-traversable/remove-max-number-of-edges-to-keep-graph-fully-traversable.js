/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    const alice = new UnionFind(n), bob = new UnionFind(n);
    let count = 0;
    for(let [type, u, v] of edges){
        if (type === 3 && alice.union(u, v) && bob.union(u, v)) count++;
    }
    for(let [type, u, v] of edges){
        if (type === 1 && alice.union(u, v)) count++
        if (type === 2 && bob.union(u, v)) count++;
    }
    if(alice.groups === 1 && bob.groups === 1) return edges.length - count;
    else return -1;
};

class UnionFind{
    constructor(n){
        this.parent = new Array(n).fill().map((_,i) => i);
        this.groups = n;
    }

    find(i){
        if(this.parent[i] !== i) this.parent[i] = this.find(this.parent[i])
        return this.parent[i];
    }
    
    union(i, j){
        const x = this.find(i), y = this.find(j);
        if(x === y) return false;
        else{
            this.parent[y] = x;
            this.groups--;
            return true;
        }
    }
};