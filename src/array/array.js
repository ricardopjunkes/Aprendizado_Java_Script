const numbers = [4,30,67]

numbers[0] = 6
numbers[6] = 7

//push serve para colocar o numero no ultimo lugar
numbers.push(76)

//.pop() serve para eliminar o ultimo
const lastNumbers = numbers.pop()

// .shift serve para eliminar o primeiro numero
const firstNumbers = numbers.shift()

// .unshift adiciona um numero no primeiro lugar

console.log(numbers)
console.log(numbers.length)
console.log(lastNumbers)