function sumMultiples(limit) {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
}

module.exports = sumMultiples; // Exporta a função para que possa ser usada em outros arquivos
