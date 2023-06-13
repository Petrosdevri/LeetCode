/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const toBe = (newVal) => {
        if(val === newVal) return true
        else throw new Error('Not Equal');
    };

    const notToBe = (newVal) => {
        if(val !== newVal) return true
        else throw new Error('Equal');
    };

    return { toBe, notToBe };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */