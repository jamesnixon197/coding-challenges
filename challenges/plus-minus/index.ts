type totalNumberList = {
    negativeNumbers: number;
    positiveNumbers: number;
    zeros: number;
};

export default (
    numberOfDecimals: number,
    numbers: number[]
): {
    positiveRatio: string,
    negativeRatio: string,
    zeroRatio: string
} => {
    const totalNumbersInArray = numbers.length;
    const totalNumberTypeList = getTotalNumberTypes(numbers);

    return {
        positiveRatio: calculateRatio(
            totalNumberTypeList.positiveNumbers,
            totalNumbersInArray,
            numberOfDecimals
        ),
        negativeRatio: calculateRatio(
            totalNumberTypeList.negativeNumbers,
            totalNumbersInArray,
            numberOfDecimals
        ),
        zeroRatio: calculateRatio(
            totalNumberTypeList.zeros,
            totalNumbersInArray,
            numberOfDecimals
        )
    };
};

const calculateRatio = (
    totalUniqueNumbers: number,
    totalInArray: number,
    numberOfDecimals: number
): string => {
    return parseFloat(`${totalUniqueNumbers / totalInArray}`).toFixed(
        numberOfDecimals
    );
};

const getTotalNumberTypes = (numbers: number[]): totalNumberList => {
    const totalNumberList: totalNumberList = {
        negativeNumbers: 0,
        positiveNumbers: 0,
        zeros: 0,
    };

    numbers.forEach((number) => {
        if (number > 0) totalNumberList.positiveNumbers++;
        if (number === 0) totalNumberList.zeros++;
        if (number < 0) totalNumberList.negativeNumbers++;
    });

    return totalNumberList;
};
