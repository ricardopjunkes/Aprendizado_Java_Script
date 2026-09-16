// && E (AND)
// !NAO (NOT)
// || ou (OR)

console.log('&& E (AND)')
console.log('🍰 e 🍕')

console.table([
    ["🍰",'🍕', true],
    ["❌",'🍕', false],
    ["🍰",'❌', false],
    ["❌",'❌', false],
])

const cake = true
const pizza = false

console.log(cake && pizza)

