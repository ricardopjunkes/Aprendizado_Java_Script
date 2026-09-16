
console.log('|| OUR (OR)')
console.log('🍰 e 🍕')

console.table([
    ["🍰",'🍕', true],
    ["❌",'🍕', true],
    ["🍰",'❌', true],
    ["❌",'❌', false],
])

const cake = false
const pizza = true

console.log(cake || pizza)
