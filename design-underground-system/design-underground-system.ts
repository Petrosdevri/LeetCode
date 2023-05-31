class UndergroundSystem {
    map: { [id: number]: [string, number] };
    avg: { [path: string]: number[] };
    constructor() {
        this.map = {};
        this.avg = {};
    }

    checkIn(id: number, stationName: string, t: number): void {
        this.map[id] = [stationName, t];
    }

    checkOut(id: number, stationName: string, t: number): void {
        const [startStation, inTime] = this.map[id];
        delete this.map[id];
        (this.avg[`${startStation}-${stationName}`] ??= []).push(t-inTime);
    }

    getAverageTime(startStation: string, endStation: string): number {
        const sum = this.avg[`${startStation}-${endStation}`].reduce((acc: number, v: number) => {   return acc+v;   });
        return sum / this.avg[`${startStation}-${endStation}`].length;
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */