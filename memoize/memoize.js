/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const num = JSON.stringify(args);
        if(cache.has(num)) {
            return cache.get(num);
        }
        const result = fn(...args);
        cache.set(num, result);
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */