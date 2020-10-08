export default (arrayOfNumbers: number[]): number => {
    let total = 0;

    arrayOfNumbers.forEach((element: number) => {
        total = total + element;
    });

    return total;
};
