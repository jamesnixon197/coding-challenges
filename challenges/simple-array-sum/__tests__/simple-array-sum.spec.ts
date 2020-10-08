import simpleArraySum from './..';

describe('Positive numbers passed in', () => {
    it('should return a sum of all of the integers', async () => {
        const sum = simpleArraySum([5, 10, 20]);

        expect(sum).toBe(35);
    });
});

describe('Negative numbers passed in', () => {
    it('should return a sum of all of the integers', async () => {
        const sum = simpleArraySum([-5, -10, -20]);

        expect(sum).toBe(-35);
    });
});
