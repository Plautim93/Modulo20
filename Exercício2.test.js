const findIndices = require('./indexFinder'); // Importa a função findIndices

test('encontra os índices do maior e menor valor em um array', () => {
    expect(findIndices([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual({ minIndex: 1, maxIndex: 5 });
    expect(findIndices([10, 20, 30, 40, 50])).toEqual({ minIndex: 0, maxIndex: 4 });
    expect(findIndices([-5, -1, -10, -3])).toEqual({ minIndex: 2, maxIndex: 1 });
    expect(findIndices([])).toEqual({ minIndex: -1, maxIndex: -1 }); // Testa array vazio
});