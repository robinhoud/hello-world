var combattre = true;
// Un peu de maths magiques pour calculer les chances
// de toucher le dragon. Nous allons y venir vite !
var vousTouchez = Math.floor(Math.random() * 2);
var dommagesPourCeTour = Math.floor(Math.random() * 5 + 1);
var dommagesTotaux = 0;

while (combattre) {
    if (vousTouchez) {
        console.log("Vous avez touché le dragon et fait " + dommagesPourCeTour + " dommages !");
        dommagesTotaux += dommagesPourCeTour;

        if (dommagesTotaux >= 4) {
            console.log("Vous l'avez fait ! Vous avez vaincu le dragon !");
            combattre = false;
        } else {
            vousTouchez = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("Le dragon vous crache du feu ! Vous avez une tête de toast !");
        combattre = false;
    }
}
