/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let timeout = null;
    let argsProcess = null;
    const timeoutFunction = () => {
        if(argsProcess === null) {
          timeout = null;
        } else {
            fn(...argsProcess);
            argsProcess = null;
            timeout = setTimeout(timeoutFunction, t);
        } 
    } 
    return function throttled(...args) {
        if(timeout) {
            argsProcess = args;
        } else {
            fn(...args);
            timeout = setTimeout(timeoutFunction, t);
        }
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */