import calculateProductOfIntegers from '..'

describe('Calculate the product of integers w/ division', () => {
    describe('Product of 5 integers', () => {
        it('should return an array of the product of integers', async () => {
            const productOfIntegers = calculateProductOfIntegers(
                [1, 2, 3, 4, 5],
                true
            );

            expect(productOfIntegers).toEqual([120, 60, 40, 30, 24]);
        });
    });

    describe('Product of 3 integers', () => {
        it('should return an array of the product of integers', async () => {
            const productOfIntegers = calculateProductOfIntegers([3, 2, 1], true);

            expect(productOfIntegers).toEqual([2, 3, 6]);
        });
    });
});

describe('Calculate the product of integers without division', () => {
    describe('Product of 5 integers', () => {
        it('should return an array of the product of integers', async () => {
            const productOfIntegers = calculateProductOfIntegers(
                [1, 2, 3, 4, 5],
                false
            );

            expect(productOfIntegers).toEqual([120, 60, 40, 30, 24]);
        });
    });

    describe('Product of 3 integers', () => {
        it('should return an array of the product of integers', async () => {
            const productOfIntegers = calculateProductOfIntegers(
                [3, 2, 1],
                false
            );

            expect(productOfIntegers).toEqual([2, 3, 6]);
        });
    });
});
