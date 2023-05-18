function countDigits(num: number): number {
    let numStr: any = num.toString();
    let count = 0;
    for(let i=0; i<numStr.length; i++) {
        if(num % numStr[i] === 0) {
            count++;
        }
    }
    return count;
};