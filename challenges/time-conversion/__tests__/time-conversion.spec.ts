import convertTime from './..'

describe('Convert 12 hour 12am to 24 hour 12am', () => {
    it('should return a string with the new time', async () => {
        const twentyFourHourTime = convertTime('12:01:00AM');

        expect(twentyFourHourTime).toBe('00:01:00');
    });
});

describe('Convert 12 hour 12pm to 24 hour 12pm', () => {
    it('should return a string with the new time', async () => {
        const twentyFourHourTime = convertTime('12:01:00PM');

        expect(twentyFourHourTime).toBe('12:01:00');
    });
});

describe('Convert 12 hour 3am to 24 hour 3am', () => {
    it('should return a string with the new time', async () => {
        const twentyFourHourTime = convertTime('03:01:00AM');

        expect(twentyFourHourTime).toBe('03:01:00');
    });
});

describe('Convert 12 hour 3pm to 24 hour 3pm', () => {
    it('should return a string with the new time', async () => {
        const twentyFourHourTime = convertTime('03:01:00PM');

        expect(twentyFourHourTime).toBe('15:01:00');
    });
});

describe('Invalid time passed in', () => {
    it('should throw an error', async () => {
        expect(() => convertTime('foo')).toThrowError(
            'Invalid time string passed in'
        );
    });
});
