let Vehicule = function (couleur, nbRoues, marque){
    this.couleur = couleur;
    this.roues = nbRoues;
    this.marque = marque;

    Vehicule.prototype.demarrer = function (){
        console.log("Je démarre ma voiture " + couleur + " avec " + nbRoues + " roues et de la marque " + marque + ".");
    }

    Vehicule.prototype.arreter = function () {
        console.log("Je m'arrête !");
    }
}
console.log(Vehicule.prototype);

Vehicule("bleu", 4, "Peugeot");
Vehicule.prototype.demarrer();
Vehicule.prototype.arreter();

let Velo = function (couleur, nbRoues, marque, rayonRoues, typePeinture){
    Vehicule.call(this, couleur, nbRoues, marque);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;

    Velo.prototype.monter = function (){
        console.log("Je monte à Velo !");
    }
}
Velo.prototype = Object.create(Vehicule.prototype); //Copie du prototype parent
Velo.prototype.constructor = Velo;//Assignation du constructeur
console.log(Velo.prototype);
Velo("rouge", 2, "Arena", 40, "aluminium")
Velo.prototype.monter();

let Voiture = function (couleur, nbRoues, marque, assurance, proprietaire){
    Vehicule.call(this, couleur, nbRoues, marque);
    this.assurance = assurance;
    this.proprietaire = proprietaire;

    Voiture.prototype.passerAuCarWash = function (){
        console.log("Ma voiture passe au carwash");
    }
}
Voiture.prototype = Object.create(Vehicule.prototype); //Copie du prototype parent
Voiture.prototype.constructor = Voiture;//Assignation du constructeur
Voiture("noir",4, "Porsh", "Allianz", "Joe");
Voiture.prototype.passerAuCarWash();
console.log(Voiture.prototype);