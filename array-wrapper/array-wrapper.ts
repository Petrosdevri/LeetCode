interface ArrayWrapper {
    nums: number[];
}

class ArrayWrapper {
	constructor(nums: number[]) {
        this.nums = nums;
    }

	valueOf() {
        let count: number = 0;
        for(let i=0; i<this.nums.length; i++) {
            count += this.nums[i];
        }
        return count;
    }

	toString() {
        return `[${this.nums.join(',')}]`;
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */