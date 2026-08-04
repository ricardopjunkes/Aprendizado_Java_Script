const animal = 'gato'

switch(animal){
    case"gato":{
        console.log("miau")
        break
    }
    case "galinha":{
        console.log("cocorico")
        break
    }
    case "cachorro":{
        console.log("au")
        break
    }    
} 

console.log(animal,"emitiu um som")



const stuff = "gato"
switch(stuff){
    case "pizza":
    case "bolo":
    case"hamburguer":{
        console.log("comida")
        break
    }    
    case "gato":
    case "cachorro":
    case "vaca":{
        console.log("animal")
        break
    }
    case "pá":
    case "picareta":
    case "espada":{
        console.log("ferramenta")
        break
    }
    default:{ 
        console.log("nao listado")
    }
}
