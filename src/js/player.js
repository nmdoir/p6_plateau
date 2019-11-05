class Player {
    constructor() {
        this.name = null;
        this.life = 100;
        this.weapon = null;
        this.position = null;
        this.move = false;
        this.playerTab = [
            {
                "id": 1,
                "name": name_j1,
                "life": this.life,
                "weapon": this.weapon,
                "position": this.position,
                "move": this.move,
                "countMove": 0
            },
            {
                "id": 2,
                "name": name_j2,
                "life": this.life,
                "weapon": this.weapon,
                "position": this.position,
                "move": this.move,
                "countMove": 0
            }
        ]
    }

    availableMove() {

    }

    getName() {
        return this.name
    }

    getLife() {
        return this.life
    }

    getWeapon() {
        return this.weapon
    }

    getMove() {
        return this.move
    }

    getPosition() {
        return this.position
    }

    increaseLife(points) {
        this.life += points;
        return this.life
    }

    decreaseLife(damage) {
        this.life -= damage;
        return this.life
    }
}

export {Player};