class SnapshotArray {
    snapId: number;
    snapShots: any;

    constructor(length: number) {
        this.snapId = 0;
        this.snapShots = {};
    }

    set(index: number, val: number): void {
        if(this.snapShots[this.snapId]) {
            this.snapShots[this.snapId][index] = val;
        } else {
            this.snapShots[this.snapId] = [];
            this.snapShots[this.snapId][index] = val;
        }
    }

    snap(): number {
        const snapid = this.snapId;
        this.snapId += 1;
        return snapid;
    }

    get(index: number, snap_id: number): number {
        for(let i=snap_id; i>-1; i--) {
            if(this.snapShots[i] && this.snapShots[i][index] != undefined) return this.snapShots[i][index];
        }
        return 0;
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */