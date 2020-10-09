type numberArray = [number, number, number, number, number];

export default (numbers: numberArray): [number, number] => {
    const sortedNumbers = numbers.sort();

    const minimumNumber: number = getMinimumTotal(sortedNumbers);
    const maximumNumber: number = getMaximumTotal(sortedNumbers);

    return [minimumNumber, maximumNumber];
}

const getMinimumTotal = (numbers: numberArray): number => {
    return (numbers.reduce((x, y) => x + y) - numbers[numbers.length - 1]);
};

const getMaximumTotal = (numbers: numberArray): number => {
    return numbers.reduce((x, y) => x + y) - numbers[0];
};
