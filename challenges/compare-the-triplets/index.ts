export default (
    bobsScores: [number, number, number],
    alicesScores: [number, number, number]
): [number, number] => {
    let aliceTotalScore = 0;
    let bobTotalScore = 0;

    for (let i = 0; i < 3; i++) {
        if (alicesScores[i] > bobsScores[i]) {
            aliceTotalScore++;
        } else if (bobsScores[i] > alicesScores[i]) {
            bobTotalScore++;
        }
    }

    return [bobTotalScore, aliceTotalScore];
}
