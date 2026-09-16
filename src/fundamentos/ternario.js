// ternário

// (expressáo) ? (se verdadeiro) : (se falso)

const number = 2
console.log((number % 2 === 0)? "Par" : "Ímpar")

const numbers = 3
console.log((numbers % 2 === 0)? "Par" : "Ímpar")

const age = 22
console.log((age >= 18) ? "Maior de idade" : "Menor de idade")

const ages = 12
console.log((ages >= 18) ? "Maior de idade" : "Menor de idade")
//

const vinicius = false
const amigo = true

console.log(
    vinicius && amigo
    ? "O vinicius é uma pessoa amigavel"
    : amigo?"O vinicius  é amigo" : "O vinicius não é amigo"
)
//


const bank = 300
const transferValue = 450

console.log(
    transferValue < bank
    ?"a transfêrencia pode ser feita"
    : "a transfêrencia não pode ser feita"
)
//

const isAdult = true
console.log(`Cristiano ${isAdult ? "não" : ""} é criança`)


const hours = 14

console.log(
    "Está de",
    hours >= 0 && hours < 6 ? "madrugada" :
    hours >= 6 && hours < 12 ? "manhã" :
    hours >= 12 && hours < 18 ? "tarde" :
    "noite"
)