//Demander le nom des joueurs
var nom_j1 = prompt("Entrez le nom du joueur 1 : ");
var nom_j2 = prompt("Entrez le nom du joueur 2 : ");

if (!nom_j1 || nom_j1 === "") {
    nom_j1 = "Joueur 1";
}

if (!nom_j2 || nom_j2 === "") {
    nom_j2 = "Joueur 2";
}


$(document).ready(function() {
    createGrid();
});