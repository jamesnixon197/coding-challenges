import solveMeFirst from '../index';

describe('Positive numbers passed in as parameters', () => {
    it('should return the sum of two numbers', async () => {
        const sum = solveMeFirst(5, 10);

        expect(sum).toBe(15);
    });
});

describe('Negative numbers passed in as parameters', () => {
    it('should return the sum of two numbers', async () => {
        const sum = solveMeFirst(-5, -10);

        expect(sum).toBe(-15);
    });
});
