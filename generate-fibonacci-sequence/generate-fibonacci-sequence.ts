function* fibGenerator(a: number = 0, b: number = 1): Generator<number, any, number> {
    yield a;

    while(true) {
        yield* fibGenerator(b, a+b);
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */