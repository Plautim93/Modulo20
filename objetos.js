let frutas = ['Maça','Uva', 'Banana']
console.log(frutas.length)

let primeiraFruta = frutas[0]
console.log(primeiraFruta)

let ultimaFruta = frutas [frutas.length - 1]
console.log(ultimaFruta)

frutas.push('Pera')

frutas.forEach(function(fruta){
    console.log(fruta)
})

frutas.pop()

frutas.forEach(function(fruta){
    console.log(fruta)
})

var jsonJS = [
    {
        "nome": function(){
            return 'João'
        },
        "idade": "42"

    },
    {
        "nome": "Maria",
        "idade": 25
    }
]

console.log(jsonJS)

const jsonRest = {
    "nome": "Samuel",
    "idade": 31
}

console.log(jsonRest)

console.log(JSON.stringify(jsonJS))

const texto = '[{"idade":"42"},{"nome":"Maria","idade":25}]'
console.log(JSON.parse(texto))
