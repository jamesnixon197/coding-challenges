import {
    getTotalWords,
    getTotalSentences,
    getWordsOrderedByLength,
    getWordsOrderedByAppearance,
    getPercentageOfWordAppearances,
    getAverageNumberOfWordsPerSentence,
    getPhrasesOrderedByAppearance,
    getProminenceOfMostPopularWord
} from '../.'

// eslint-disable-next-line
const testText = 'lorem ipsum dolor sit amet consectetur lorem ipsum et mihi quoniam et adipiscing elit.sed quoniam et advesperascit et mihi ad villam revertendum est nunc quidem hactenus ex rebus enim timiditas non ex vocabulis nascitur.nummus in croesi divitiis obscuratur pars est tamen divitiarum.nam quibus rebus efficiuntur voluptates eae non sunt in potestate sapientis.hoc mihi cum tuo fratre convenit.qui ita affectus beatum esse numquam probabis duo reges constructio interrete.de hominibus dici non necesse est.eam si varietatem diceres intellegerem ut etiam non dicente te intellego parvi enim primo ortu sic iacent tamquam omnino sine animo sint.ea possunt paria non esse.quamquam tu hanc copiosiorem etiam soles dicere.de quibus cupio scire quid sentias.universa enim illorum ratione cum tota vestra confligendum puto.ut nemo dubitet eorum omnia officia quo spectare quid sequi quid fugere debeant nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur sunt enim prima elementa naturae quibus auctis virtutis quasi germen efficitur.nam ut sint illa vendibiliora haec uberiora certe sunt.cur deinde metrodori liberos commendas.mihi inquam qui te id ipsum rogavi nam adhuc meo fortasse vitio quid ego quaeram non perspicis.quibus ego vehementer assentior.cur iustitia laudatur mihi enim satis est ipsis non satis.quid est enim aliud esse versutum nobis heracleotes ille dionysius flagitiose descivisse videtur a stoicis propter oculorum dolorem.diodorus eius auditor adiungit ad honestatem vacuitatem doloris.nos quidem virtutes sic natae sumus ut tibi serviremus aliud negotii nihil habemus.';

describe('getTotalWords', () => {
    describe('Empty text block', () => {
        it('should return 0 words found', () => {
            const totalWords = getTotalWords('');

            expect(totalWords).toBe(0);
        });
    });

    describe('Valid text block', () => {
        it('should return the total number of words', () => {
            const totalWords = getTotalWords(testText);

            expect(totalWords).toBe(260);
        });
    });
});

describe('getTotalSentences', () => {
    describe('Empty text block', () => {
        it('should return 0 sentences found', () => {
            const totalSentences = getTotalSentences('');

            expect(totalSentences).toBe(0);
        });
    });

    describe('Valid text block', () => {
        it('should return the total number of sentences', () => {
            const totalSentences = getTotalSentences(testText);

            expect(totalSentences).toBe(22);
        });
    });
});

describe('getWordsOrderedByLength', () => {
    describe('No words found', () => {
        it('should return the the longest word', async () => {
            const lengthOfLongestWord = getWordsOrderedByLength('');

            expect(lengthOfLongestWord).toStrictEqual([]);
        });
    });

    describe('List of words found', () => {
        it('should return the the longest word', async () => {
            const lengthOfLongestWord = getWordsOrderedByLength(testText);

            expect(lengthOfLongestWord[0]).toBe('perquirendisque');
        });
    });
});

describe('getWordsOrderedByAppearance', () => {
    describe('No words found', () => {
        it('should return an empty array', async () => {
            const wordAppearanceTally = getWordsOrderedByAppearance('');

            expect(wordAppearanceTally).toStrictEqual([]);
        });
    });

    describe('List of words found', () => {
        it('should return the most common words', async () => {
            const wordAppearanceTally = getWordsOrderedByAppearance(testText);

            expect(wordAppearanceTally.slice(0, 6)).toStrictEqual(
                [
                    'non',
                    'est',
                    'enim',
                    'mihi',
                    'ut',
                    'quid',
                ]
            );
        });
    });
});

describe('getPercentageOfWordAppearances', () => {
    describe('numberOfAppearances less than 1', () => {
        it('should throw an error', async () => {
            expect(
                () => getPercentageOfWordAppearances(testText, 0)
            ).toThrow(
                'Number of appearances must be greater than or equal to 1'
            );
        });
    });

    describe('Valid numberOfAppearances', () => {
        it('should return percentage of words that appeared once', async () => {
            const percentageOfWordAppearances = getPercentageOfWordAppearances(
                testText,
                1
            );

            expect(percentageOfWordAppearances).toBe(82.29);
        });
    });
});

describe('getAverageNumberOfWordsPerSentence', () => {
    it('should return the average number of words per sentence', async () => {
        const average = getAverageNumberOfWordsPerSentence(testText);

        expect(average).toBe(12);
    });
});

describe('getPhrasesOrderedByAppearance', () => {
    describe('numberOfWords less than 1', () => {
        it('should throw an error', async () => {
            expect(
                () => getPhrasesOrderedByAppearance(testText, 1)
            ).toThrow('Number of words must be greater than or equal to 1');
        });
    });

    describe('Valid numberOfWords', () => {
        describe('No phrases found', () => {
            it('should return an empty array', async () => {
                const phraseAppearanceTally = getPhrasesOrderedByAppearance('', 2);

                expect(phraseAppearanceTally).toStrictEqual([]);
            });
        });

        describe('Phrases found', () => {
            it('should return the most common phrases', async () => {
                const phraseAppearanceTally = getPhrasesOrderedByAppearance(testText, 2);

                expect(phraseAppearanceTally.slice(0, 3)).toStrictEqual(
                    [
                        'lorem ipsum',
                        'et mihi',
                        'dolor sit',
                    ]
                );
            });
        });
    });
});

describe('getProminenceOfMostPopularWord', () => {
    describe('No words found', () => {
        it('should return an empty array', async () => {
            const wordProminence = getProminenceOfMostPopularWord('', 5);

            expect(wordProminence).toStrictEqual([]);
        });
    });

    describe('Words found', () => {
        it('should return the prominence of the top 5 popular words', async () => {
            const wordProminence = getProminenceOfMostPopularWord(testText, 5);

            expect(wordProminence).toStrictEqual([
                [ 'non', 57.86 ],
                [ 'est', 53.40 ],
                [ 'enim', 46.09 ],
                [ 'mihi', 62.54 ],
                [ 'ut', 38.92 ]
            ])
        });
    });
});
