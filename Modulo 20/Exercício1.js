function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Exemplo de uso
let numero1 = 36;
let numero2 = 90;
console.log("O MDC é:", calcularMDC(numero1, numero2));
