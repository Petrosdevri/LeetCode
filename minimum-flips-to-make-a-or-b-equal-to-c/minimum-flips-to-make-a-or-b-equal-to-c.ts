function minFlips(a: number, b: number, c: number): number {
    let answer: number = 0;

    while(a != 0 || b != 0 || c != 0) {
        if((c&1) == 1) {
            if((a&1) == 0 && (b&1) == 0) {
                answer++;
            }
        } else {
            answer += (a&1) + (b&1);
        }
    
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return answer;
};