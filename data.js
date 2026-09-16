/* const date = new Date()

/* console.log(date.getDate())
console.log(date.getDay())
console.log(date.getFullYear())
console.log(date.getHours())
console.log(date.getMonth()) */  //pega data atual = get

/* console.log(date.getHours())
date.setHours(date.getHours() + 5)

console.log(date.toString()) //toString mostra o dia mes ano...
console.log(date.toLocaleDateString()) //deixa o padrao
console.log(date.toUTCString()) //universal data */ 

const timer = setInterval(() => {

    const date = new Date()

    console.log(date.getSeconds())

    if (date.getSeconds() > 15) clearInterval(timer)

}, 1000);