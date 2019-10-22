import {Player} from "./Player"

class Movement {
    move(idCase, playerTab) {
        let player = null;
        for (let i = 0; i < playerTab.length; i++) {
           if (playerTab[i].move === true) {
               player = playerTab[i]
           }
        }
    let currentCase = document.getElementById(player.position);
    let nextCase = document.getElementById(idCase);
    this.availableCases(nextCase, currentCase, player, playerTab);
    return playerTab
}

//pas compris cette fonction
availableCases(nextCase,currentCase, player, playerTab){
    const LIMIT_MOVE = 3;
    let test = new Player();

    if(nextCase.id !== currentCase.id && !nextCase.hasAttribute('data-player')
        && !nextCase.hasAttribute('data-accesscase')) {
        // Update the player position
        nextCase.setAttribute('data-class', currentCase.dataset.class);
        nextCase.setAttribute('data-player', player.nom);
        nextCase.className = currentCase.dataset.class;

        // Remove the old player position
        currentCase.classList.remove(currentCase.dataset.class);
        currentCase.removeAttribute('data-class');
        currentCase.removeAttribute('data-player');

        player.position = nextCase.id;
        player.countMove++;

        if(player.countMove === LIMIT_MOVE){
            let d =  test.allowPlayerMovement(playerTab, player)
        }
        return true;
    }

    return false;
}
}

export { Movement }