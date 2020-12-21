let Vehicule = function (couleur, nbRoues, marque){
    this.couleur = couleur;
    this.roues = nbRoues;
    this.marque = marque;

    Vehicule.prototype.demarrer = function (){
        console.log("Je démarre ma voiture " + this.couleur + " avec " + this.roues + " roues et de la marque " + this.marque + ".");
    }

    Vehicule.prototype.arreter = function () {
        console.log("Je m'arrête !");
    }
}
console.log(Vehicule.prototype);

let unVehicule = new Vehicule("bleu", 4, "Peugeot");
unVehicule.prototype.demarrer();
unVehicule.prototype.arreter();

let Velo = function (couleur, nbRoues, marque, rayonRoues, typePeinture){
    Vehicule.call(this, couleur, nbRoues, marque);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;

    Velo.prototype.monter = function (){
        console.log("Je monte à Velo, mes roues ont un rayon de " + this.rayonRoues + " et une peinture " + this.typePeinture);
    }
}
Velo.prototype = Object.create(Vehicule.prototype); //Copie du prototype parent
Velo.prototype.constructor = Velo;//Assignation du constructeur
console.log(Velo.prototype);
let unVelo = new Velo("rouge", 2, "Arena", 40, "aluminium")
unVelo.prototype.monter();

let Voiture = function (couleur, nbRoues, marque, assurance, proprietaire){
    Vehicule.call(this, couleur, nbRoues, marque);
    this.assurance = assurance;
    this.proprietaire = proprietaire;

    Voiture.prototype.passerAuCarWash = function (){
        console.log("La voiture passe au carwash, elle est assurée à " + this.assurance + " et le propriétaire est " + this.proprietaire);
    }
}
Voiture.prototype = Object.create(Vehicule.prototype); //Copie du prototype parent
Voiture.prototype.constructor = Voiture;//Assignation du constructeur
let uneVoiture = new Voiture("noir",4, "Porsh", "Allianz", "Joe");
uneVoiture.prototype.passerAuCarWash();
console.log(Voiture.prototype);