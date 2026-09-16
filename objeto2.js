const ramMemory = {
    name: "Hyperx",
    size: 16000
}


const computer = {
    motherboard: "B360M",
    videoCard: "RTX 3080",
    cpu: "Inter i7 8700",
    font:{
        name: "XPG core Reactor",
        watts: 800
    },
    case:{
        name: "Draco GameMax",
        color: "Black"
    },
    ram: [ramMemory, ramMemory]
}
console.log(computer.font.watts)
console.log(computer.ram)
console.log(computer)