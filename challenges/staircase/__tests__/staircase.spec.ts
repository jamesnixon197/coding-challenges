import buildStaircase from './..'

describe('Staircase with size of 9', () => {
    it('should return a staircase', async () => {
        const stairCase = buildStaircase(9);

        const expectedStairCase = '        #\n' +
                                  '       ##\n' +
                                  '      ###\n' +
                                  '     ####\n' +
                                  '    #####\n' +
                                  '   ######\n' +
                                  '  #######\n' +
                                  ' ########\n' +
                                  '#########';

        expect(stairCase).toBe(expectedStairCase);
    });
});

describe('Staircase with size of 4', () => {
    it('should return a staircase', async () => {
        const stairCase = buildStaircase(4);

        const expectedStairCase = '   #\n' +
                                  '  ##\n' +
                                  ' ###\n' +
                                  '####';

        expect(stairCase).toBe(expectedStairCase);
    });
});

describe('Staircase with size of 1', () => {
    it('should return a staircase', async () => {
        const stairCase = buildStaircase(1);

        const expectedStairCase = '#'

        expect(stairCase).toBe(expectedStairCase);
    });
});

describe('Staircase with size of 0', () => {
    it('should throw an error', async () => {
        expect(() => buildStaircase(0)).toThrow(
            'A size must be set to 1 or above'
        );
    });
});
