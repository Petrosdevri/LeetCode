function canMakeArithmeticProgression(arr: number[]): boolean {
    arr = arr.sort((a, b) => a - b);
    let diff: number = arr[1] - arr[0];
    for(let i: number = 2; i<arr.length; i++) {
        if(diff != arr[i] - arr[i-1]) return false;
    }
    return true;
};