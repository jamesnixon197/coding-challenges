export default (numbers: number[], withDivision: boolean): number[] => {
    const productOfIntegers: number[] = [];

    numbers.forEach((element, index) => {
        if (withDivision) {
            productOfIntegers.push(numbers.reduce((x, y) => x * y) / element);
        } else {
            numbers.splice(index, 1);
            productOfIntegers.push(numbers.reduce((x, y) => x * y));
            numbers.unshift(element);
        }
    });

    return productOfIntegers;
}
