function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return `nom = [${this.nom}], prenom = [${this.prenom}], pseudo = [${this.pseudo}]`;
    }
}

jules = new Personne("LEMAIRE", "Jules", "jules77");

paul = new Personne("LEMAIRE", "Paul", "paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

function afficherPersonne(personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = "jules44";
afficherPersonne(jules);

console.log(`age = [${jules.age}]`);

Personne.prototype.age = "NON RENSEIGNE";

console.log(`age = [${jules.age}]`);

jules.age = 30;

console.log(`age = [${jules.age}]`);

function getInitiales(personne) {
    return personne.prenom.charAt(0) + personne.nom.charAt(0);
}

console.log(getInitiales(jules));


robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet() {
        return `nom = [${this.nom}], prenom = [${this.prenom}], pseudo = [${this.pseudo}]`;
    }
}

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numero) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numero;
    this.getInfos = function () {
        return "Client numéro " + this.numeroClient + ": " + this.nom + " " + this.prenom;
    }
}

steve = new Client("LUCAS", "Steve", "steve44", "A01");

afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());