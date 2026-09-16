function requestCar(drivers){
    return new Promise((resolve,reject) => {
        if (drivers > 0){
            return resolve("Seu motorista está a caminho!")
        }
        return reject("Não há motoristas disponiveis")
})
}
async function main(){
    let drivers = 0

    const request = await requestCar(drivers).catch(() => null)

    if(!request){
        console.log( 'ERRO')
        return
    }
    console.log(`Resultado: ${request}`)
}
main()

