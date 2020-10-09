import calculateBirthdayCakeCandles from './..';

describe('Calculate tallest birthday cake candles', () => {
    describe('Only 1 tallest candle', () => {
        it('should return a total of one', async () => {
            const totalHighestCandles = calculateBirthdayCakeCandles([
                4,
                1,
                3
            ]);

            expect(totalHighestCandles).toBe(1);
        });
    });

    describe('More than 1 tallest candle', () => {
        it('should return a total of one', async () => {
            const totalHighestCandles = calculateBirthdayCakeCandles([
                4,
                4,
                1,
                3
            ]);

            expect(totalHighestCandles).toBe(2);
        });
    });

    describe('More than 1 tallest candle', () => {
        it('should return a total of one', async () => {
            const totalHighestCandles = calculateBirthdayCakeCandles([
                4,
                4,
                1,
                3,
            ]);

            expect(totalHighestCandles).toBe(2);
        });
    });

    describe('More than 1 tallest candle, again', () => {
        it('should return a total of one', async () => {
            const totalHighestCandles = calculateBirthdayCakeCandles([
                3,
                2,
                1,
                3,
            ]);

            expect(totalHighestCandles).toBe(2);
        });
    });
});
