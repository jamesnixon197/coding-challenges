import getTotalOrangesApplesOnHouse from './..';

describe('Get number of apple & oranges on house land', () => {
    it('should return correct number of oranges', async () => {
        const totalOnLand = getTotalOrangesApplesOnHouse({
            houseStartPosition: 7,
            houseEndPosition: 11,
            appleTreePosition: 5,
            orangeTreePosition: 15,
            applePositionsFromTree: [-2, 2, 1],
            orangePositionsFromTree: [5, -6],
        });

        expect(totalOnLand[0]).toEqual(1);
    });

    it('should return correct number of apples', async () => {
        const totalOnLand = getTotalOrangesApplesOnHouse({
            houseStartPosition: 7,
            houseEndPosition: 11,
            appleTreePosition: 5,
            orangeTreePosition: 15,
            applePositionsFromTree: [-2, 2, 1],
            orangePositionsFromTree: [5, -6],
        });

        expect(totalOnLand[1]).toEqual(1);
    });
});

describe('Get number of apple & oranges on house land more than one', () => {
    it('should return correct number of oranges', async () => {
        const totalOnLand = getTotalOrangesApplesOnHouse({
            houseStartPosition: 7,
            houseEndPosition: 11,
            appleTreePosition: 5,
            orangeTreePosition: 15,
            applePositionsFromTree: [3, 2, 1],
            orangePositionsFromTree: [-5, -6, 9],
        });

        expect(totalOnLand[0]).toEqual(2);
    });

    it('should return correct number of apples', async () => {
        const totalOnLand = getTotalOrangesApplesOnHouse({
            houseStartPosition: 7,
            houseEndPosition: 11,
            appleTreePosition: 5,
            orangeTreePosition: 15,
            applePositionsFromTree: [3, 2, 1],
            orangePositionsFromTree: [-5, -6, 9],
        });

        expect(totalOnLand[1]).toEqual(2);
    });
});
