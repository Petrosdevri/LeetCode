var UndergroundSystem = function() {
    this.map = {};
    this.avg = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    const { map } = this;
    map[id] = {startStation:stationName , t: t};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const { map, avg } = this;
    const last = map[id];
    const key = `e:${stationName}+s:${last.startStation}`;
    if(avg[key]) {
        avg[key] = { total: avg[key].total + t - last.t, count: avg[key].count + 1 };
    } else {
        avg[key] = { total: t - last.t, count: 1};
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const { avg } = this;
    const key = `e:${endStation}+s:${startStation}`;
    const { total, count } = avg[key];
    return total / count;

};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */