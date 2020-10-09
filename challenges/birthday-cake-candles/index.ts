export default (candles: number[]): number => {
    const tallestCandleNumber = Math.max(...candles);

    const filteredCandles = candles.filter(
        (n) => n >= tallestCandleNumber
    );

    return filteredCandles.length;
}
