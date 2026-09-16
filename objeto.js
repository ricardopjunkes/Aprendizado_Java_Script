const player = {
    nickname: "Ricardo",
    health: 20,
    isDead: false,
    present() {
        console.log("meu nick é", this.nickname)
    }
}

player.present() 
player.name = "Ricardo"
console.log(player)

for(const prop in player){
    console.log(prop)
}
