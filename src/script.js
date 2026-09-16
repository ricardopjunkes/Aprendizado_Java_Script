//script start, criei o .env para passar informaçoes onde não passara para o github
//script watch, sempre que muda algo ele atualiza na hora
// "watch": "node --watch --env-file .env src/script.js"

console.log("hello world")

console.log(process.env.EMAIL)
console.log(process.env.PASSWORD)