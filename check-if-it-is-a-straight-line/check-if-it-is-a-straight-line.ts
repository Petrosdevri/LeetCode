function checkStraightLine(coordinates: number[][]): boolean {
    const getDX = (a: number[], b: number[]) => {
        return a[0] - b[0];
    };

    const getDY = (a: number[], b: number[]) => {
        return a[1] - b[1];
    };

    let dx = getDX(coordinates[1], coordinates[0]);
    let dy = getDY(coordinates[1], coordinates[0]);

    for(let i=2; i<coordinates.length; i++) {
        if(dx*getDY(coordinates[i], coordinates[0]) != dy*getDX(coordinates[i], coordinates[0])) return false;
    }

    return true;
};