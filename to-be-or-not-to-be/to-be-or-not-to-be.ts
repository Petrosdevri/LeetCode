type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const toBe = (newVal: any) => {
        if(val === newVal) return true
        else throw new Error('Not Equal');
    };

    const notToBe = (newVal: any) => {
        if(val !== newVal) return true
        else throw new Error('Equal');
    };

    return { toBe, notToBe };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */