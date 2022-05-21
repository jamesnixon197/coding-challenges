type textTallyTuple = [string, number]

type textTally = {
    [key: string]: { appearances: number }
};

export const getTotalWords = (text: string): number => getListOfWords(text).length;
export const getTotalSentences = (text: string): number => getListOfSentences(text).length;

export const getLengthOfLongestWord = (text: string): number => {
    const words = getListOfWords(text);

    const orderedWords = words.sort((word, previousWord) => previousWord.length - word.length)

    return orderedWords[0].length;
}

export const getSortedWordAppearanceTally = (text: string): textTallyTuple[] => {
    const words = getListOfWords(text);

    return getSortedTallyTuple(words);
}

export const getSortedPhraseAppearanceTally = (text: string, numberOfWords: number): textTallyTuple[] => {
    if (numberOfWords < 2) throw new Error('Number of words must be greater than or equal to 1');

    const phrases = getListOfPhrases(text, numberOfWords);

    return getSortedTallyTuple(phrases);
}

export const getPercentageOfWordAppearances = (text: string, numberOfAppearances: number): number => {
    if (numberOfAppearances < 1) throw new Error('Number of appearances must be greater than or equal to 1');

    const words = getListOfWords(text);
    const wordTally = getAppearanceTally(words);
    const allWords = Object.keys(wordTally);

    const totalWords = allWords.length;
    const totalWordsAppearedInThreshold = allWords.filter(
        (word) => wordTally[word] && wordTally[word].appearances === numberOfAppearances
    ).length;

    return Math.round(totalWordsAppearedInThreshold/totalWords * 100)
}

export const getAverageNumberOfWordsPerSentence = (text: string): number => {
    const sentences = getListOfSentences(text);

    const totalWordsInSentences = sentences.map((sentence) => getListOfWords(sentence).length);

    const totalWords = totalWordsInSentences.reduce(
        (runningTotal, totalWordsInSentence) => runningTotal + totalWordsInSentence,
        0
    );

    return Math.round(totalWords / sentences.length);
}

const getAppearanceTally = (textList: string[]): textTally => {
    const textTally: textTally = {};
    textList.forEach((text: string) => {
        textTally[text] = textTally[text] && textTally[text].appearances
            ? {appearances: textTally[text].appearances + 1}
            : {appearances: 1}
    });

    return textTally;
}

const getSortedTallyTuple = (textList: string[]): textTallyTuple[] => {
    const textListTally = getAppearanceTally(textList);
    const textTallyKeys = Object.keys(textListTally);

    return textTallyKeys.map(
        (textTallyKey) => [
            textTallyKey,
            textListTally[textTallyKey].appearances
        ] as textTallyTuple
    ).sort(
        (textTallyTuple, previousTextTallyTuple) => previousTextTallyTuple[1] - textTallyTuple[1]
    );
}

const getListOfWords = (text: string) => matchTextAgainstRegex(text, /([a-z]+)[ .]/g);

const getListOfSentences = (text: string) => matchTextAgainstRegex(text, /([a-z ]+)\./g);

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
