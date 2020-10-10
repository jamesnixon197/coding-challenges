export default (gradeNumbers: number[]) => {
    const roundedNumbers: number[] = [];

    gradeNumbers.forEach(grade => {
        if (grade > 100) {
            throw new Error('Invalid grade passed in');
        } else if (grade < 38) {
            roundedNumbers.push(grade);
            return;
        }

        const differenceToNext5Multiple = (5 - (grade % 5))

        if (differenceToNext5Multiple <= 2) {
            roundedNumbers.push(grade + differenceToNext5Multiple);
        } else {
            roundedNumbers.push(grade);
        }
    });

    return roundedNumbers;
};
