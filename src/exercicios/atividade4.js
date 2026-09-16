const  clearTheKitchen= true
const washTheHouse = false
console.log(
    clearTheKitchen && washTheHouse
    ?"eu vou descansar" : "não vou descansar"
)

const hours = 21
console.log(
    "Esse horário eu estarei",
    hours >= 0 && hours < 6 ? "dormindo" :
    hours >= 6 && hours <24 ? "acordado" :
    "horário invalido"
)

cons