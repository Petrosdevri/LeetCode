function getAverages(nums: number[], k: number): number[] {
    if(k == 0) return nums;

    const n: number = nums.length;
    const averages: number[] = new Array(n).fill(-1);

    if(2*k+1 > n) return averages;

    const prefix: number[] = new Array(n+1).fill(0);
    for(let i=0; i<n; i++) {
        prefix[i+1] = prefix[i] + nums[i];
    }

    for(let i=k; i<(n-k); i++) {
        const leftBound: number = i-k;
        const rightBound: number = i+k;
        const subArrSum: number = prefix[rightBound+1]-prefix[leftBound];
        const average: number = Math.floor(subArrSum/(2*k+1));
        averages[i] = average;
    }

    return averages;
};