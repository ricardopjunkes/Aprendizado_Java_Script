// while = enquanto durar, ele é usado para fazer algo continuo

let count= 5
while(count <= 20){
    console.log(count)
    count++
}


const x = 20
let playerX = 0

while(playerX < x){
    console.log("P" .padStart(playerX,"."))
    playerX++
}

let current
let times = 0
const expected = 1

while(current !== expected){
    current = Math.floor(Math.random () * (10 + 1))
    console.log(current)
    times++

}
console.log(times)


