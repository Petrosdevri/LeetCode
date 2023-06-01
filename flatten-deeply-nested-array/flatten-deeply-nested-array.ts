type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    let res: MultiDimensionalArray = [];
    const flatten = (nums: MultiDimensionalArray, leng: number) => {
        for(const num of nums) {
            if(Array.isArray(num) && leng >= 1 && leng <= n) {
               flatten(num as MultiDimensionalArray, leng-1); 
            } else {                
                res.push(num);
            }
        }
    }

    flatten(arr, n);
    return res; 
};