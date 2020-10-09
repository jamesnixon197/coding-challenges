import calculateDiagonalDifference from './..'

describe('Non square passed into function', () => {
    it('should thrown an error', async () => {
        expect(() => calculateDiagonalDifference([[1, 10]])).toThrow(
            'Square passed in is not valid'
        );
    });
});

describe('Valid square passed into function, odd number of items', () => {
    it('should return the diagonal difference', async () => {
        const diagonalDifference = calculateDiagonalDifference([
            [82, 4, 17],
            [25, 31, 6],
            [1, 27, 47],
        ]);

        expect(diagonalDifference).toBe(111);
    });
});

describe('Valid square passed into function, even number of items', () => {
    it('should return the diagonal difference', async () => {
        const diagonalDifference = calculateDiagonalDifference([
            [82, 4, 17, 22],
            [25, 31, 6, 60],
            [1, 27, 47, 8],
            [48, 53, 93, 13],
        ]);

        expect(diagonalDifference).toBe(70);
    });
});
