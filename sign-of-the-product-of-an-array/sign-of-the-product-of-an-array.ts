function arraySign(nums: number[]): number {
    let product: number = 0;
    for(let i=0; i<nums.length; i++) {
        if(i === 0) {
            product = nums[i];
        } else if(nums[i] === 0) {
            return 0;
        } else {
            product *= nums[i];
        }
    }

    return signFunc(product);
};

const signFunc = (x: number) => {
    if(x > 0) {
        return 1;
    } else if(x === 0) {
        return 0;
    } else {
        return -1;
    }
}