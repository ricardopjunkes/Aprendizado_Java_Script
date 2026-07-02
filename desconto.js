const price = 340
const percentage = 25

const discount = (price * percentage) / 100
const finalPrice = price - discount

console.log ('Preço do produto:', price)
console.log ('Valor do desconto:', discount)
console.log('O preço final é de:', finalPrice)