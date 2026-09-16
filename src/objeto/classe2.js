class Game {
    static games = []
    title
    time
    status = "indle"
    constructor(title,time){
        this.title = title
        this.time = time
        Game.games.push(this)
    }
    start(){
        this.status = "progress"
    }
    stop(){
        this.status = "ended"
    }
    delete(){
        Game.games = Game.games.filter(game => game.title !== this.title)
    }
}

const parkour = new Game ("Parkour",20)
const puzzle = new Game("Puzzle",16)

console.log(Game.games)

parkour.delete()

console.log(Game.games)