const person = {
    name: "Ricardo"
}

const text = `objeto: ${JSON.stringify(person)}`
// so da para pegar dentro  quando tem o json.stirngfy
console.log(text)

const texto = `Programa javascript
seja bem vindo!`
//quebra de linha no terminal quando usa o `
console.log(texto)           

const myName =  "Ricardo"
console.log(myName[0])
console.log(myName.length)
console.log(myName.toUpperCase())
console.log(myName.includes("i"))
console.log(myName.startsWith("r"))
console.log(myName.startsWith("R"))
console.log(myName.slice(0,5))
console.log(myName.replace("Ricardo","Eu"))

const teste = "Eu-sou-ricardo"
const chars1 = teste.split("-")
const chars2 = teste.split("")
console.log(chars1)
console.log(chars2)


const meuNome = "Eu sou \n\"ricardo\""
console.log(meuNome)