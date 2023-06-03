function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    const timeFromEmployeeToHead = (id: number): number => {
        if(manager[id] != -1) {
            informTime[id] += timeFromEmployeeToHead(manager[id]);
            manager[id] = -1;
        }
        return informTime[id];
    }

    manager.forEach((_, index) => timeFromEmployeeToHead(index));

    return Math.max(...informTime);
};