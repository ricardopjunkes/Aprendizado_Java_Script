//index é a posiçao onde a letra está
let string = '30 Days Of JavaScript'
console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1



//Sempre que o .indexOf() não encontra o que você pediu, ele retorna -1 para dizer: "Não existe na frase".