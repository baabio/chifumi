// function game() {
//     let choix = ['pierre', 'feuille', 'ciseau'];
//     let joueur = prompt ("Entrer une donnée")
//     let num = Math.floor(Math.random() * 3);
//     let choixPc = choix[num];
//     console.log(choixPc)
// }
// game();

function choixAleatoire() {
    let choixPossibles = ["pierre", "feuille", "ciseaux"];
    let index = Math.floor(Math.random() * 3);
    return choixPossibles[index];
}


function determinerVainqueur(joueur, ordinateur) {
    if (joueur === ordinateur) {
        return "Égalité";
    } else if (
        (joueur === "pierre" && ordinateur === "ciseaux") ||
        (joueur === "feuille" && ordinateur === "pierre") ||
        (joueur === "ciseaux" && ordinateur === "feuille")
    ) {
        return "Joueur";
    } else {
        return "Ordinateur";
    }
}


function jouerSerie() {
    let scoreJoueur = 0;
    let scoreOrdinateur = 0;
    for (let manche = 1; manche <= 2; manche++) {
        let choixJoueur = prompt("Choisissez : pierre, feuille ou ciseaux ?");
        let choixOrdinateur = choixAleatoire();
        let resultatManche = determinerVainqueur(choixJoueur, choixOrdinateur);
        if (scoreJoueur > scoreOrdinateur){
            console.log('joueur gagne')  
        }else {
            console.log('pc gagne')  
        }
    }
}
jouerSerie();