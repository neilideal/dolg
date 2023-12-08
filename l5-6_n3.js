let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];
console.log(addMatrices(matrix1, matrix2));

function addMatrices(matrix1, matrix2) {
    let maxSize = 0;

    // Проверяем, что все массивы имеют одинаковый размер и находим максимальный размер
    [matrix1, matrix2].forEach(matrix => {
        if (matrix.some(row => row.length !== matrix.length)) {
            throw new Error('Все массивы должны быть одного размера');
        }
        maxSize = Math.max(maxSize, matrix.length);
    });

    // Создаём новые матрицы с дополнительными нулями, если нужно
    [matrix1, matrix2] = [matrix1, matrix2].map(matrix =>
        matrix.map(row =>
            row.length < maxSize ? row.concat(new Array(maxSize - row.length).fill(0)) : row
        )
    );

    let result = [];
    for (let i = 0; i < maxSize; i++) {
        result[i] = [];
        for (let j = 0; j < maxSize; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}
