const r1 = require("node:readline")

const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})
let bank = 3000
console.log(`Valor total no banco: ${bank}`)
prompt.question (" digite o valor que deseja transferir", answer =>{
    const amount = Number.parseInt(answer);
    if (Number.isNaN(amount)){
        console.log("numero invalido")
    } else if(amount > bank) {
        console.log(" valor é maior do que o total")
    } else if ( amount <= 0){
        console.log("o valor precisa ser positivo")
    } else {
        bank-=amount
        console.log(`voce transferiu ${amount} reais`)
        console.log(`voce ficou com ${bank} reais`)
    }
    prompt.close()
}) 