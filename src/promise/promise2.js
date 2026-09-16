function getRandom(){
    return new Promise((resolve) =>
    setTimeout(() => resolve (Math.random () * 30),3000)
    )
}

async function main(){
    console.log("Inicio do programa")
     await getRandom()
     .then(value => {
        console.log(value)
     })
    console.log("Fim do programa")
        //o await faz esperar o tempo do codiog para depois fazer o proximo
        //ali o fim do programa ia aparecr primeiro se n tivesse o await
}
main()