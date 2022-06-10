var body = document.getElementsByTagName('body').item(0);

var titre = document.createElement('h1');
var texte = document.createTextNode("Ajouter un utilisateur");
/* Création du premier titre */
titre.appendChild(texte);
body.appendChild(titre);

function createInputFormulaire(formulaire, type, id, labelTexte) {
    var label = document.createElement("label");
    var entree = document.createElement("input");
    var texte = document.createTextNode(labelTexte);
    label.setAttribute("for", id);
    label.appendChild(texte)
    formulaire.appendChild(label);

    entree.type = type;
    entree.setAttribute("id", id);
    formulaire.appendChild(entree);
}

var formulaire = document.createElement("form");

createInputFormulaire(formulaire, "text", "nom", "Nom");
createInputFormulaire(formulaire, "password", "pass", "Mot de passe");

var button = document.createElement('button');

button.setAttribute("submit", "#");
//button.appendChild(texte);
//button.childNodes[0].nodeValue = "Ajouter";
formulaire.appendChild(button);

body.appendChild(formulaire);

var titre2 = titre.cloneNode(true);
//titre2.childNodes[0].nodeValue = "Liste utilisateurs";

body.appendChild(titre2);

var button2 = button.cloneNode(true);
button2.childNodes[0].nodeValue = "Rafraichir";
formulaire.appendChild(button2);

function createTableau(tableau, ncol, nrow) {
    for (let index = 0; index < 4; index++) {
       console.log(index);
    }
}

var tableau = document.createElement("table");

body.appendChild(tableau);