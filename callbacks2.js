

//const rl = require("node:readline")
import rl from "node:readline"
const prompt = rl.createInterface({
    input: process.stdin,
    output:process.stdout
})

const myQuestion = "Qual é o seu nome?"
const handle = (answer) => {
    console.log(`ola ${answer}`)
    prompt.close()
}


prompt.question(myQuestion,handle)