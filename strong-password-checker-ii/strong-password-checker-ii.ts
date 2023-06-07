function strongPasswordCheckerII(password: string): boolean {
    if(password.length < 8) return false;
    if(!(/[a-z]/).test(password)) {
        return false;
    };

    if(!(/[A-Z]/).test(password)) {
        return false;
    };

    if(!(/[0-9]/).test(password)) {
        return false;
    };

    let specialChars: string = "!@#$%^&*()-+";
    let noSPC: boolean = true;
    for(let i of specialChars) {
        if(password.includes(i)) {
            noSPC = false;
            break;
        }
    }
    if(noSPC) return false;

    let lastChar: any = password[0];
    let count: number = 0;
    for(let i=0; i<password.length; i++) {
        if(password[i] == lastChar) {
            count++;
        } else {
            lastChar = password[i];
            count = 1;
        }
        if(count >= 2) {
            return false;
        };
    }

    return true;
};