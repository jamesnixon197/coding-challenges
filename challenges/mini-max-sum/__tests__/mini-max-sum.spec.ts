import calculateMiniMaxSum from './..';

describe('Calculate the mini-max sum', () => {
    describe('With positive numbers', () => {
        it('should return the minimum value as first array element', async () => {
            const miniMaxSum = calculateMiniMaxSum([5, 3, 1, 9, 7]);
            expect(miniMaxSum[0]).toBe(16);
        });

        it('should return the maximum value as second array element', async () => {
            const miniMaxSum = calculateMiniMaxSum([5, 3, 1, 9, 7]);
            expect(miniMaxSum[1]).toBe(24);
        });
    });

    describe('With negative numbers', () => {
        it('should return the minimum value as first array element', async () => {
            const miniMaxSum = calculateMiniMaxSum([-5, -3, -1, -9, -7]);
            expect(miniMaxSum[0]).toBe(-16);
        });

        it('should return the maximum value as second array element', async () => {
            const miniMaxSum = calculateMiniMaxSum([-5, -3, -1, -9, -7]);
            expect(miniMaxSum[1]).toBe(-24);
        });
    });
});
