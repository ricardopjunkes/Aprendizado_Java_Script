const numbers = [];

for(let i = 0; i < 10; i++){
    numbers.push(i);
}

console.log(numbers);

const text = "se inscreva no canal da twitch: eokaka_";
const letter = "a"
let times = 0
for (const char of text.toLocaleLowerCase()){
    if (char === letter) times++
}
console.log(`a letra (${letter}) se repete ${times} vezes`)

const r1 = require("node:readline")

const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})
prompt.question("Qual numero deseja ver a tabuada?", answer =>{
    const number= Number.parseInt(answer)

    if (Number.isNaN(number)){
        console.log("não é valido")
    } else {
        console.log(`a tabuda do ${number} é `)
        for(let i=1; i<= 10 ; i++){
            console.log(` ${i} x ${number} é igual a ${i*number}`)
         }
    }
    prompt.close()

})