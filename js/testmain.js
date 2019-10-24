function createGrid() {
    let bloc = document.getElementById('plateau');
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        //console.log("10 lignes"); OK

        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            //console.log("10 colonnes"); OK
        }
    }
    bloc.appendChild(table);
}

//Demander le nom des joueurs
var nom_j1 = prompt("Entrez le nom du joueur 1 : ");
var nom_j2 = prompt("Entrez le nom du joueur 2 : ");

if (!nom_j1 || nom_j1 === "") {
    nom_j1 = "Joueur 1";
}

if (!nom_j2 || nom_j2 === "") {
    nom_j2 = "Joueur 2";
}

//Créer la grille
$(document).ready(function() {
    createGrid();
    //console.log OK
});