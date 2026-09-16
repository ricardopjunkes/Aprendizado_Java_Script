const rl = require("node:readline")

const prompt = rl.createInterface({  //cria a interface para a escrita
    input: process.stdin,//ele pega o input do processo
    output: process.stdout
})

prompt.question()
prompt.close