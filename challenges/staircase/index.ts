export default (size: number): string => {
    let stairCase = '';

    if (!size) {
        throw new Error ('A size must be set to 1 or above');
    }

    for (let index = 1; index <= size; index++) {
        stairCase += '#'.repeat(index).padStart(size);

        if (index != size) {
            stairCase += '\n';
        }
    }

    return stairCase;
}
