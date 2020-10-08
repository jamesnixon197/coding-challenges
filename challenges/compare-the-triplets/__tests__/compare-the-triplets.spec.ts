import compareTheTriplets from './..';

describe('Positive numbers passed in', () => {
    it('should return a tuple array of the two scores', async () => {
        const scores = compareTheTriplets([3, 1, 2], [1, 2, 1]);

        expect(scores).toEqual([2, 1]);
    });
});

describe('Zeros passed in', () => {
    it('should return a tuple array of the two scores', async () => {
        const scores = compareTheTriplets([0, 0, 0], [0, 0, 0]);

        expect(scores).toEqual([0, 0]);
    });
});
