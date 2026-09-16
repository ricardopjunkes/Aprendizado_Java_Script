// estrutura if/else
    let temperature = 25;
if(temperature >= 30 ) {
    console.log("está muito calor la fora");
} else {
    console.log("a temperatura está agradavel")
}


let grade = 5
if ( grade >= 9 ) {
    console.log("está aprovado");
} else if (grade >= 7) {
    console.log("aprovado na media");
} else {
    console.log("está reperovado");
}


const sideA = 3
const sideB = 4
const sideC = 5

// equilatero = lados iguais, isosceles = 2 lados iguais isosceles = nenhum igual
if (sideA === sideB && sideB === sideC) {
    console.log ("triangulo equilatero")
} else if ( sideA === sideB || sideB === sideC  || sideA === sideC) {
    console.log("triangulo isosceles")
} else {
    console.log("triangulo escaleno")
}

const r1 = require("node:readline")

const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})

prompt.question("Digite sua idade", answer => {
    const age = Number.parseInt(answer)
    if (Number.isNaN(age)){
        console.log("o que voce digitou não é um numero valido")
    } else {
        console.log(`a sua idade é ${age}`)
        console.log(`Daqui 4 anos voce tera ${age + 4}`)
    }
    prompt.close()
})
