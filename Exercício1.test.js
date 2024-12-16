const mdc = require('./mathUtils'); // Importa a função mdc

test('calcula o MDC entre dois números', () => {
    expect(mdc(48, 18)).toBe(6);
    expect(mdc(54, 24)).toBe(6);
    expect(mdc(-48, -18)).toBe(6);
    expect(mdc(0, 5)).toBe(5);
    expect(mdc(5, 0)).toBe(5);
    expect(mdc(0, 0)).toBe(0); // O MDC de 0 e 0 é indefinido, mas aqui retornamos 0
    expect(mdc(7, 7)).toBe(7);
});