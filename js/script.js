import { Game } from "./Game";

$(document).ready(function() {
        let game = new Game(10, 10);
        game.createGrid();
    });

