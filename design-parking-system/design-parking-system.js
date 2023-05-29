/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.bigLimit = big;
    this.mediumLimit = medium;
    this.smallLimit = small;

    this.parkingArray = new Array(big + medium + small);
    for(let i=0; i<big+medium+small; i++) {
        this.parkingArray[i] = -1;
    } 
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    let limit = 0;
    if(carType == 1) {
        limit = this.bigLimit;
    } else if(carType == 2) {
        limit = this.mediumLimit;
    } else {
        limit = this.smallLimit;
    }

    let count = 0;
    for(let i=0; i<this.bigLimit + this.mediumLimit + this.smallLimit; i++) {
        if(this.parkingArray[i] === carType) {
            count++;
        } if(count == limit) {
            return false;
        } if(this.parkingArray[i] == -1) {
            this.parkingArray[i] = carType;
            return true;
        }
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */