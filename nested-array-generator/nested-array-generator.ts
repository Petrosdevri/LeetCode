type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    if(!Array.isArray(arr)) {
        yield arr;
        return;
    }

    for(let num of arr) {
        yield* inorderTraversal(num as MultidimensionalArray);
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */