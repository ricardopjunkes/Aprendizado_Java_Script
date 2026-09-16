//bloco
if (true){
    const myName = "Ricardo"
    let myAge = 18
    var myCity = "Florianopolis"

}

console.log(myCity)
//se for const e let não da para acessar, apenas se for o VAR

//funçao
function main(){
    var myNamei = "Ricardo"
}

//se for função não é possivel acessar mesmo com o VAR

//léxico
const meuNome = "Ricardo"

function main(){
    function secondary(){
        let number = 1
        //so daria cert ose o console.log estivesse AQUI
    }
    console.log(meuNome)
}


function principal(){
    let numero = 10
    function secundario(){

        console.log(numero) //funçao lexico, se n estiver na funçao dentro de outra função e nao tiver nada nela,
                            // ela vai subir até achar o variavel correta

    }
    secundario()
}
principal()

