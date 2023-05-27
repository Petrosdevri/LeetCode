function stoneGameIII(stoneValue: number[]): string {
    const n = stoneValue.length;
    stoneValue.push(0, 0)

    let suffixSum = stoneValue[n-1];
    for (let i=n-2; i>=0; i--) {
        suffixSum += stoneValue[i];
        stoneValue[i] = suffixSum - Math.min(stoneValue[i+1], stoneValue[i+2], stoneValue[i+3]);
    }

    const bob = suffixSum - stoneValue[0];
    if (stoneValue[0] > bob) return "Alice";
    if (stoneValue[0] < bob) return "Bob";
    return "Tie";
    // let n = stoneValue.length;
    // let dp = [n+1];

    // for(let i=n-1; i>=0; i--) {
    //     dp[i] = stoneValue[i]-dp[i+1];
    //     if(i+2 <= n) {
    //         dp[i] = Math.max(dp[i], stoneValue[i] + stoneValue[i+1] - dp[i+2]);
    //     } if(i+3 <= n) {
    //         dp[i] = Math.max(dp[i], stoneValue[i] + stoneValue[i+1] + stoneValue[i+2] - dp[i+3]);
    //     }
    // }

    // if(dp[0] > 0) {
    //     return 'Alice';
    // }
    // if(dp[0] < 0) {
    //     return 'Bob';
    // }
    // return 'Tie';
};