type textTallyTuple = [string, number, number[]]

type textTally = {
    [key: string]: { appearances: number, positions: number[] }
};

export const getTotalWords = (text: string): number => {
    const listOfWords = getListOfWords(text);

    if (arrayIsInvalid(listOfWords)) return 0;

    return listOfWords.length;
}

export const getTotalSentences = (text: string): number => {
    const listOfSentences = getListOfSentences(text);

    if (arrayIsInvalid(listOfSentences)) return 0;

    return listOfSentences.length;
}

export const getWordsOrderedByLength = (text: string): string[] => {
    const words = getListOfWords(text);

    if (arrayIsInvalid(words)) return [];

    return words.sort((word, previousWord) => previousWord.length - word.length);
}

// Could possibly combine getSortedWordAppearanceTally & getSortedPhraseAppearanceTally
export const getWordsOrderedByAppearance = (text: string): string[] =>
    getTextTupleOrderedByAppearance(text).map((textTally) => textTally[0]);

export const getPhrasesOrderedByAppearance = (text: string, numberOfWords: number): string[] => {
    if (numberOfWords < 2) throw new Error('Number of words must be greater than or equal to 1');

    return getTextTupleOrderedByAppearance(text, numberOfWords).map(
        (textTally) => textTally[0]
    );
}

export const getPercentageOfWordAppearances = (
    text: string,
    numberOfAppearances: number
): number => {
    if (numberOfAppearances < 1)
        throw new Error('Number of appearances must be greater than or equal to 1');

    const wordTally = getAppearanceTally(
        getListOfWords(text)
    );

    const words = Object.keys(wordTally);

    // Filters out words that don't appear the provided amount
    const totalWordsAppearedInThreshold = words.filter(
        (word) => wordTally[word] && wordTally[word].appearances === numberOfAppearances
    );

    return +(totalWordsAppearedInThreshold.length / words.length * 100).toFixed(2);
}

export const getAverageNumberOfWordsPerSentence = (text: string): number => {
    const sentences = getListOfSentences(text);
    const totalWordsInSentences = sentences.map(
        (sentence) => getListOfWords(sentence).length
    );

    const totalWords = totalWordsInSentences.reduce(
        (runningTotal, totalWordsInSentence) => runningTotal + totalWordsInSentence,
        0
    );

    return Math.round(totalWords / sentences.length);
}

export const getProminenceOfMostPopularWord = (text: string, maxPopularityIndex: number): [string, number][] => {
    const sortedWordAppearanceTally = getTextTupleOrderedByAppearance(text)

    if (arrayIsInvalid(sortedWordAppearanceTally)) return [];

    const popularWordTally = sortedWordAppearanceTally.slice(0, maxPopularityIndex);

    const totalWords = getTotalWords(text);

    const prominenceTuple = popularWordTally.map((wordTally): [string, number] => {
        const listOfWordPositions = wordTally[2];
        const positionsSum = listOfWordPositions.reduce(
            (rollingTotal: number, wordPosition) => wordPosition + rollingTotal,
            0
        );

        const prominence = +(
            (totalWords - (
                (positionsSum - 1) / listOfWordPositions.length)
            ) * (100 / totalWords)
        ).toFixed(2);

        return [wordTally[0], prominence]
    });

    return prominenceTuple;
}

const getTextTupleOrderedByAppearance = (text: string, numberOfWords = 1): textTallyTuple[] => {
    const textList = numberOfWords && numberOfWords > 1
        ? getListOfPhrases(text, numberOfWords)
        : getListOfWords(text);

    if (arrayIsInvalid(textList)) return [];

    return getSortedTallyTuple(textList);
}

const getAppearanceTally = (textList: string[]): textTally => {
    const textTally: textTally = {};

    textList.forEach((text: string, index: number) => {
        textTally[text] = {
            appearances: textTally[text] ? textTally[text].appearances + 1 : 1,
            positions: (
                textTally[text]?.positions?.length
                    ? [index, ...textTally[text].positions]
                    : [index]
            )
        }
    });

    return textTally;
}

const getSortedTallyTuple = (textList: string[]): textTallyTuple[] => {
    const textListTally = getAppearanceTally(textList);
    const textTallyKeys = Object.keys(textListTally);

    return textTallyKeys.map(
        (textTallyKey) => [
            textTallyKey,
            textListTally[textTallyKey].appearances,
            textListTally[textTallyKey].positions,
        ] as textTallyTuple
    ).sort(
        (textTallyTuple, previousTextTallyTuple) => previousTextTallyTuple[1] - textTallyTuple[1]
    );
}

const arrayIsInvalid = (array: unknown[]): boolean => !Array.isArray(array) || array.length < 1;

const getListOfWords = (text: string) => matchTextAgainstRegex(text, /([A-Za-z-]+)[ .]?/g);

const getListOfSentences = (text: string) => matchTextAgainstRegex(text, /([A-Za-z- ]+)\./g);

const getListOfPhrases = (text: string, numberOfWords: number) => {
    const wordPhraseRegex = Array(numberOfWords).fill('\\w+').join(' ');
    return matchTextAgainstRegex(text, new RegExp(`(${wordPhraseRegex})`, 'g'));
}

const matchTextAgainstRegex = (text: string, regex: RegExp): string[] => {
    // Used regex instead of split on whitespace / full-stop for performance
    const words = Array.from(text.matchAll(regex), match => match[1]);

    if (!words?.length || !Array.isArray(words)) return [];

    return words;
}
