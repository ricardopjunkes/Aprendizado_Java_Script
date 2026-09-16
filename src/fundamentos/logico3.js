console.log("! NAO (NOT")
console.log("porta")

const isOpen = true

console.log(!isOpen)

// o ! deixa ao contrario


const takeBath = true
const brushTeeth = true

const isReady = takeBath && brushTeeth
console.log(isReady)
// se um deles estiver FALSE, a resposta vai dar FALSE,por conta do &&

const wasDishes = false // lavar louça
const doHomework = true

const canPlay = wasDishes || doHomework

console.log(canPlay)

// embaixo tem uma combinaçao, tomar banho e 
// escovar os dentes ou fazer o dever

console.log((takeBath && brushTeeth)) && (washDishes || doHomework)