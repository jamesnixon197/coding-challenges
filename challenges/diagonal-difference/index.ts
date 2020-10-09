const calculateDiagonalItemTotal = (
    square: number[][],
    direction: 'left' | 'right'
): number => {
    let squareLineIndex = direction === 'right' ? square.length - 1 : 0;
    const diagonalArray: number[] = [];

    square.forEach((squareLine: number[]) => {
        if (square.length != squareLine.length) {
            throw new Error('Square passed in is not valid');
        }

        diagonalArray.push(squareLine[squareLineIndex]);

        if (direction === 'right') {
            squareLineIndex--;
        } else {
            squareLineIndex++;
        }
    });

    return diagonalArray.reduce((x, y) => x + y, 0);
};

export default (square: number[][]): number => {
    const leftDiagonalTotal = calculateDiagonalItemTotal(square, 'left');
    const rightDiagonalTotal = calculateDiagonalItemTotal(square, 'right');

    return Math.abs(leftDiagonalTotal - rightDiagonalTotal);
}
