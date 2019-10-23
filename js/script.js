import {Game} from "./game"; //empêche les prompt donc prompt.js créé juste pour ça


$(document).ready(function() {
        let game = new Game(10, 10);
        game.createGrid();
    });

