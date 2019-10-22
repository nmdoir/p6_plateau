class Player {
    constructor() {
        this.name = null;
        this.life = 100;
        this.weapon = null;
        this.position = null;
        this.move = false;
        this.playerTab = [
            {
                "id":0,
                "name": this.name, // "Soma"
                "life": this.life,
                "weapon": this.weapon,
                "move": this.move,
                "position": this.position,
                "countMove": 0 //why?
            },
            {
                "id":0,
                "name": this.name, // "Julien"
                "life": this.life,
                "weapon": this.weapon,
                "move": this.move,
                "position": this.position,
                "countMove": 0 //why?
            }
        ]
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

    getPlayerTab() {
        return this.playerTab
    }

    setName(name) {
        this.name = name
    }

    setLife(life) {
        this.life = life
    }

    setWeapon(weapon){
        this.weapon = weapon
    }

    setMove(move){
        this.move = move
    }

    setPosition(position){
        this.position = position
    }

    increaseLife(points) {
        this.life += points;
        return this.life
    }

    decreaseLife(damage) {
        this.life -= damage;
        return this.life
    }

    whoCanPlay() {
        let randomInt = null;
        for (let i = 0; i<2; i++) {
            randomInt = Math.floor(Math.random() * 2)
        }
        this.playerTab[randomInt].move = true;
    }

    getWhoCanPlay() {
        for (let i = 0; i < this.playerTab.length; i++)
        {
            if(this.playerTab[i].move === true) {
                return this.player[i]
            }
        }
        return null //à quoi ça sert ?
    }

    allowPlayerMovement(players, player) //pas compris cette fonction
    //à quoi correspondent players et player? déclarés où?
    {
        player.countMove = 0;
        if(players[0].move === true){
            players[0].move = false;
            players[1].move = true;
            console.log(players[1]); //ligne à supprimer?
            console.log('player 0 to false') //ligne à supprimer?
        }else if(players[1].move === true){
            players[1].move = false;
            players[0].move = true;
            console.log(players[0]); //ligne à supprimer?
            console.log('player 1 to false') //ligne à supprimer?
        }

        console.log(players); //ligne à supprimer?
        return players //pourquoi?
    }

    export { Player }
    //utilisé lors de la création de modules JavaScript pour exporter des fonctions, des objets ou des valeurs primitives à partir du module, de sorte qu'ils puissent être utilisés par d'autres programmes grâce à l'instruction import.


}