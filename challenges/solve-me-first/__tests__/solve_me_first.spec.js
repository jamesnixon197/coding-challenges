const solveMeFirst = require('../index');

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

describe('No numbers passed in as parameters', () => {
    it('should return the sum of two numbers', async () => {
        expect(solveMeFirst).toThrow('Two numbers need to be passed in');
    });
});
