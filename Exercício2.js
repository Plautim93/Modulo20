function encontrarIndicesMaiorMenor(arr) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[indiceMaior]) {
            indiceMaior = i;
        }
        if (arr[i] < arr[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return {
        indiceMaior: indiceMaior,
        indiceMenor: indiceMenor
    };
}

// Exemplo de uso
let numeros = [3, 5, 2, 9, 1];
let indices = encontrarIndicesMaiorMenor(numeros);
console.log("Índice do maior valor:", indices.indiceMaior);
console.log("Índice do menor valor:", indices.indiceMenor);
