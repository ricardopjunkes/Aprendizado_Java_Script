const person = {
    name: 'Ricardo',

    greet() {
        console.log(this.name)

        const upper = () => {
            console.log(this.name.toUpperCase())
        }

        return { upper }
    }
}

person.greet().upper()