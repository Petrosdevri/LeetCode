function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if(obj === null || obj === undefined || typeof classFunction !== 'function') return false;

    let curr = obj.__proto__;
    while(curr !== null) {
        if(curr === classFunction.prototype) return true;
        curr = curr.__proto__;
    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */