// quando são strings ou numbers e eles são iguais vai ser TRUE, porém quando é uma lista vai ser false mesmo sendo igual, ja que não estão guardadas na mesma memoria


let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false


let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

// so funcionaria a lista ser igual quando fosse isso daqui

let listaverdadeira = [0,3,6]
let outraLista = listaverdadeira

console.log(listaverdadeira == outraLista)

