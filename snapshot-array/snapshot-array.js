/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snapId = 0;
    this.snapShots = {};
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    if(this.snapShots[this.snapId]) {
        this.snapShots[this.snapId][index] = val;
    } else {
        this.snapShots[this.snapId] = [];
        this.snapShots[this.snapId][index] = val;
    }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    const snapid = this.snapId;
    this.snapId += 1;
    return snapid;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    for(let i=snap_id; i>-1; i--) {
        if(this.snapShots[i] && this.snapShots[i][index] != undefined) return this.snapShots[i][index];
    }
    return 0;
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */