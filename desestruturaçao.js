function main(){
    const person = {
        name: "Ricardo",
        age: 18,
        isProgramer: true
    }
    const { name, age, isProgramer} = person
    console.log(name,age,isProgramer)
}
main()

function secondary(){
    const colors = ["verde", "amarelo", "vermelho"]
    const [firstColor,secondColor] = colors
    console.log(firstColor)
}
secondary()

function boneco() {
    const nickname = "Ricardo P"

    const player = {
        nickname: 'Ricardo',
        health: 18,
        inventory: {
            items: ["Bff", "doranshield", "doransword"], // Aspas adicionadas
            potions: [
                { type: "regeneration", duration: 8 },
                { type: "defense", duration: 8 }
            ]
        }
    }

    // Desestruturação correta do array de poções:
    const { inventory: { potions } } = player
    const [{ type, duration }, { duration: secondDuration, type: secondType }] = potions

    console.log(type, duration)             // regeneration 8
    console.log(secondType, secondDuration) // defense 8
}

boneco()
