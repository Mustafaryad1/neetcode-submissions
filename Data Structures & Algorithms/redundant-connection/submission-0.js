class UnionFind {
    constructor(n) {
        this.rank = new Map();
        this.par = new Map();
        for (let i = 1; i <= n; i++) {
            this.rank.set(i, 0);
            this.par.set(i, i);
        }
    }
    find(x) {
        if (x !== this.par.get(x)) {
            this.par.set(x, this.find(this.par.get(x)));
        }
        return this.par.get(x);
    }

    union(n1, n2) {
        let p1 = this.find(n1),
            p2 = this.find(n2);
        if (p1 == p2) {
            return false;
        }

        if (this.rank.get(p1) > this.rank.get(p2)) {
            this.par.set(p2, p1);
        } else if (this.rank.get(p2) > this.rank.get(p1)) {
            this.par.set(p1, p2);
        } else {
            this.par.set(p1, p2);
            this.rank.set(p2, this.rank.get(p2) + 1);
        }
        return true;
    }
}

class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const unionFind = new UnionFind(edges.length);
        let res = [];
        
        for(let i = 0; i < edges.length; i++){
            let edge = edges[i];
            if(!unionFind.union(edge[0], edge[1])){
                res = edge;
            }
        }
        return res;
    }
}