//Nom des joueurs
import {Game} from "./game"; //empêche les prompt

/** var nom_j1 = prompt("Entrez le nom du joueur 1 : "),
    nom_j2 = prompt("Entrez le nom du joueur 2 : ");

if (!nom_j1 || nom_j1 === "") {
    nom_j1 = "Joueur 1";
}

if (!nom_j2 || nom_j2 === "") {
    nom_j2 = "Joueur 2";
}
 **/


$(document).ready(function() {
        let game = new Game(10, 10);
        game.createGrid();
    });

