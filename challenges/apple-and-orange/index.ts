type orangeAppleOptions = {
    houseStartPosition: number
    houseEndPosition: number;
    appleTreePosition: number;
    orangeTreePosition: number;
    applePositionsFromTree: number[];
    orangePositionsFromTree: number[];
};

export default (options: orangeAppleOptions): [number, number] => {
    const applePositions: number[] = getFruitPositions(
        options.applePositionsFromTree,
        options.appleTreePosition
    );

    const orangePositions: number[] = getFruitPositions(
        options.orangePositionsFromTree,
        options.orangeTreePosition
    );

    const applesInHouse: number[] = filterFruitPositionsOffHouse(
        applePositions,
        options.houseStartPosition,
        options.houseEndPosition
    );

    const orangesInHouse: number[] = filterFruitPositionsOffHouse(
        orangePositions,
        options.houseStartPosition,
        options.houseEndPosition
    );

    return [applesInHouse.length, orangesInHouse.length];
}

const getFruitPositions = (
    fruitPositionsFromTree: number[],
    fruitTreePosition: number
): number[] =>
    fruitPositionsFromTree.map((position) => {
        return fruitTreePosition + position;
    });

const filterFruitPositionsOffHouse = (
    fruitPositions: number[],
    houseStartPosition: number,
    houseEndPosition: number
): number[] =>
    fruitPositions.filter((fruitPosition) => {
        return (
            fruitPosition >= houseStartPosition &&
            fruitPosition <= houseEndPosition
        );
    });
