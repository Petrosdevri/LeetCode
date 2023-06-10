function maxValue(n: number, index: number, maxSum: number): number {
    if(n == 1) return maxSum;
    const left: number = index;
    const right: number = n-index-1;
    const sumSide = (x: number, count: number): number => {
        if(x > count) {
            return (2*x-count-1)*count/2;
        } else {
            return (x-1)*x/2+count-x+1;
        }
    }
    let valueLeft: number = 0;
    let valueRight: number = maxSum;
    while(valueRight-valueLeft > 1) {
        const mid: number = Math.floor((valueLeft+valueRight)/2);
        if(sumSide(mid, left) + sumSide(mid, right) + mid <= maxSum) valueLeft = mid;
        else valueRight = mid; 
    }

    return valueLeft;
};