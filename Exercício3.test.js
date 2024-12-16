const sumMultiples = require('./sumMultiples'); // Importa a função sumMultiples

test('soma de múltiplos de 5 ou 7 abaixo de 1000', () => {
    expect(sumMultiples(1000)).toBe(156361); // A soma correta dos múltiplos de 5 ou 7 abaixo de 1000
});