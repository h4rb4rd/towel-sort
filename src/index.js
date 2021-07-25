
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];

    const stack = [];

    for (let i = 0; i < matrix.length; i++) {
        if (!(i % 2)) stack.push(matrix[i]);
        if (i % 2) stack.push(matrix[i].reverse());
    }

    return stack.flat();
}
