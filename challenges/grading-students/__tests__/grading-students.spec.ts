import roundStudentGrades from './..'

describe('Round students grades', () => {
    it('should return an array of rounded grades', async () => {
        const roundedGrades = roundStudentGrades([73, 67, 38, 33]);

        expect(roundedGrades).toEqual([75, 67, 40, 33]);
    });
});

describe('Invalid students grade passed in', () => {
    it('should return an array of rounded grades', async () => {
        expect(() => roundStudentGrades([
            73,
            67,
            101,
            33
        ])).toThrowError('Invalid grade passed in');
    });
});
