const r1 = require("node:readline")

const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})
console.log("bem vindo ao programa")
console.log("[1] Data atual")
console.log("[2] Horario atual")
console.log("[3] Ver animais")
console.log("[4] Ver comidas")
console.log("[0] sair")

prompt.question("> Selecione o que deseja fazer", answer =>{
    switch(answer){
        case "1": {
            const date = new Date()
            const day = date.getDate()
            const month = date.getMonth()+1
            const year = date.getFullYear()
            console.log(`hoje é ${day}/${month}/${year}`)

            break;
        }
        case "2": {
            const date = new Date()
            const hour = date.getHours()
            const minutes = date.getMinutes
            console.log(`agora são ${hours}:${minutes} do dia ${date}`)

            break;
        }
        case "3": {
            console.log("vaca")
            console.log("cachorro")

            break;
        }
        case "4": {
            console.log("queijo")
            console.log("carne")

            break;
        }
        default:(
            console.log("Fim do Programa")
        )
    }
    prompt.close()




})