
class Cell {
    constructor(access, weapon, player) {
        this.access = access ? access : null;
        this.weapon = weapon ? weapon : null;
        this.player = player ? player : null;
    }
}

export {Cell}