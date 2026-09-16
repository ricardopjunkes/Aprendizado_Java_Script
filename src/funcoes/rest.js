const positive = [1,2,3,4]
const negative = [-1,-2,-3,-4]

const numbers= [...positive,...negative]

const[one,two,...other] = numbers
console.log(one,two,)
console.log(other)