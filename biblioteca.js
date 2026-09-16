import chalk from  "chalk"
import { intro,outro,text } from "@clack/prompts"

console.log(chalk.blue.underline("Ricardo Dev"))
console.log(chalk.bgGreen("Ricardo"))


async function main(){
intro(chalk.green("bem vindo ao programa"))

const name = await text({ message: "qual é o seu nome"})

outro(`olá ${name}`)

}
main()