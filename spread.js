// ele serve principalmente para espalhar ou copiar valores.

const player ={
    nickname: "Ricardo",
    health: 18,
    inventory:{
        items: ["sword","shield","bow"],
        potions: [
            { type: "regeneration",duration: 8},
            {type: "defense", duration: 8}
        ]
    }
}

function updatePlayer(player,newProps){
    return { 
        ...player,
         ...newProps}
}
const updatedPlayer = updatePlayer(player,{
    nickname: "Carol",
    coins: 0,
})
console.log(updatedPlayer)


const positive = [1,2,3,4]
const negative = [-1,-2,-3,-4]

const numbers= [...positive,...negative]

console.log(numbers)