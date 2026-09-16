const users = new Map([
    ["ricardo",{age:18,coins:100}],
    ["carol",{age:18,coins:0}],
    ["vinicius",{age:24,coins:-100}]
])

users.delete("vinicius")
console.log(users)
console.log(users.size)
console.log(users.has("ricardo"))
console.log(users.has("miguel"))

for(const[key,value] of users.entries()){
    console.log("a chave é:", key)
    console.log("o valor é:", value)
}


//console.log(users.get("ricardo"))

/* const users = {
    ricardo: {
        age:22,
        coins: 100,
    },
    carol:{
        age:18,
        coins: 30,
    },
    vinicius:{
        age:24,
        coins: -10
    }
}

users["miguel"] = {age:17,coins: 1000}

console.log(users) */