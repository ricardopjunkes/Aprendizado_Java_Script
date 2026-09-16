// set é bom para remover itens de lista repetidos, funciona em STRING tambem

const numbers = new Set ([5,1,4,22,98,4,3011,5,-32])

numbers.add(2) //adiciona
numbers.delete(-32) //deleta
console.log(numbers.has(5)) //se tem true or false
console.log(numbers.size) //quantos tem

for(const number of numbers.values()){
    console.log(number) //printa todos os numeros
}


import {text} from "@clack/prompts"

async function main(){
    const input = await text({message: "Digite varios numeros"})
    
    const inputNumbers = input.split(" ").map(Number)
    const numbers = new Set(inputNumbers)
    
    console.log(inputNumbers)
    console.log(numbers)
}
main()