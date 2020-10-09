import calculatePlusMinus from './..'

describe('Calculate the ratio with 50% positive, 25% negative & 25% zero at 3 decimal place', () => {
    it('should calculate the correct positive ratio', async () => {
        const ratios = calculatePlusMinus(3, [5, 10, -20, 0]);

        expect(ratios.positiveRatio).toBe('0.500')
    });

    it('should calculate the correct negative ratio', async () => {
        const ratios = calculatePlusMinus(3, [5, 10, -20, 0]);

        expect(ratios.negativeRatio).toBe('0.250');
    });

    it('should calculate the correct zeros ratio', async () => {
        const ratios = calculatePlusMinus(3, [5, 10, -20, 0]);

        expect(ratios.zeroRatio).toBe('0.250');
    });
});

describe('Calculate the ratio with 0% positive, 75% negative & 25% zero at 3 decimal place', () => {
    it('should calculate the correct positive ratio', async () => {
        const ratios = calculatePlusMinus(3, [-5, -10, -20, 0]);

        expect(ratios.positiveRatio).toBe('0.000');
    });

    it('should calculate the correct negative ratio', async () => {
        const ratios = calculatePlusMinus(3, [-5, -10, -20, 0]);

        expect(ratios.negativeRatio).toBe('0.750');
    });

    it('should calculate the correct zeros ratio', async () => {
        const ratios = calculatePlusMinus(3, [-5, -10, -20, 0]);

        expect(ratios.zeroRatio).toBe('0.250');
    });
});

describe('Calculate the ratio with 25% positive, 50% negative & 25% zero at 0 decimal place', () => {
    it('should calculate the correct positive ratio', async () => {
        const ratios = calculatePlusMinus(0, [5, -10, -20, 0]);

        expect(ratios.positiveRatio).toBe('0');
    });

    it('should calculate the correct negative ratio', async () => {
        const ratios = calculatePlusMinus(0, [-5, -10, -20, 0]);

        expect(ratios.negativeRatio).toBe('1');
    });

    it('should calculate the correct zeros ratio', async () => {
        const ratios = calculatePlusMinus(0, [-5, -10, -20, 0]);

        expect(ratios.zeroRatio).toBe('0');
    });
});
