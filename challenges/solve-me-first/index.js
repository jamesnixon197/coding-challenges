const solveMeFirst = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Two numbers need to be passed in');
    }

    return a + b;
};

module.exports = solveMeFirst;
