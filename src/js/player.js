class Player {
    constructor() {
        this.name = null;
        this.life = 100;
        this.weapon = null;
        this.position = null;
        this.move = false;
        this.playerTab = [
            {
                "id": 0,
                "name": this.name,
                "life": this.life,
                "weapon": this.weapon,
                "move": this.move,
                "position": this.position,
                "countMove": 0
            },
            {
                "id": 0,
                "name": this.name,
                "life": this.life,
                "weapon": this.weapon,
                "move": this.move,
                "position": this.position,
                "countMove": 0
            }
        ]
    }
}

export {Player};