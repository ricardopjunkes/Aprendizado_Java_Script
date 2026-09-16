function main(callback){
    console.log("Hello world")
    callback()
}

function exec(){
    console.log("Ricardo")
}
main(exec)



console.log("Inicio do programa")
setTimeout(() => {
    console.log("1 + 1 =", 1 + 1)
}, 2000)
console.log( 'Fim do programa')