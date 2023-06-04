function* fibGenerator(): Generator<number, any, number> {
    let a: number = 0;
    let b: number = 1;
    yield a;
    yield b;

    while(true) {
        let c: number = a+b;
        yield c;
        [a, b] = [b, c];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */