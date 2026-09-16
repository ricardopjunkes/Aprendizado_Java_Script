let strings = 'Love is the best to in this world'
console.log(strings.endsWith('world')) // true
console.log(strings.endsWith('love')) // false
console.log(strings.endsWith('in this world')) // true

let country = 'Finland'
console.log(country.endsWith('land')) // true
console.log(country.endsWith('fin')) // false
console.log(country.endsWith('Fin')) //  false





let string = '30 Days Of JavaScript'
console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false
console.log(string.includes('Script'))     // true
console.log(string.includes('script'))     // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let countrys = 'Finland'
console.log(countrys.includes('fin')) // false
console.log(countrys.includes('Fin')) // true
console.log(countrys.includes('land')) // true
console.log(countrys.includes('Land')) // false