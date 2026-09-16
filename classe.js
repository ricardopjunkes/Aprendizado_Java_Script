/* const person ={
    name:"Ricardo",
    age:22,
    intro(){
        return `Meu nome é ${this.name}`
    }
}
 */

/* class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    intro(){
        return `Meu nome é ${this.name} e tenho ${this.age} anos`
    }
}

const person = new Person ("Ricardo",19)
const person2 = new Person("Carol", 18)

console.log(person.intro())
console.log(person2.intro()) */

// #NAME faz ele ser privado, ou seja, nao vai ter como trocar
class Person {
    #name
    #age
    #money = 0
    constructor(name,age){
        this.#name = name
        this.#age = age
    }
    intro(){
        return `Meu nome é ${this.#name} e tenho ${this.#age} anos`
    }
    getname(){
        return this.#name
    }
    getAge(){
        return this.#age
    }
    getMoney(){
        return this.#money
    }
    setMoney(value){
        this.#money = value
    }
    incrementMoney(value){
        this.setMoney(this.#money + value)
    }
}

const person = new Person ("Ricardo",19)



person.incrementMoney(100)
person.incrementMoney(30)
person.incrementMoney(10)

console.log(person.getMoney())