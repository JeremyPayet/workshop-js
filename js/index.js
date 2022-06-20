
/* Partie création de page Web */
var body = document.getElementsByTagName('body').item(0);

var div1 = document.createElement("div");
div1.id = "div1";
var titre = document.createElement('h1');
var texte = document.createTextNode("Ajouter un utilisateur");
/* Création du premier titre */
titre.appendChild(texte);
div1.appendChild(titre);
body.appendChild(div1);

function createInputFormulaire(formulaire, type, id, labelTexte) {
    var div_row = document.createElement("div");
    div_row.className = "row";
    var div_col1 = document.createElement("div");
    div_col1.className = "col-2";

    var label = document.createElement("label");
    var entree = document.createElement("input");
    var texte = document.createTextNode(labelTexte);
    label.setAttribute("for", id);
    label.appendChild(texte);
    div_col1.appendChild(label);
    div_row.appendChild(div_col1);
    
    var div_col2 = document.createElement("div");
    div_col2.className = "col";
    entree.type = type;
    entree.setAttribute("id", id);
    div_col2.appendChild(entree);
    div_row.appendChild(div_col2);
    formulaire.appendChild(div_row);
}

var formulaire = document.createElement("form");

var div_form = document.createElement("div");
div_form.className = "container-fluid";



createInputFormulaire(formulaire, "text", "nom", "Nom");
createInputFormulaire(formulaire, "password", "pass", "Mot de passe");

var button = document.createElement('button');
var div_row = document.createElement("div");
div_row.className = "row";  

button.setAttribute("submit", "#");
button.textContent = "Ajouter";
div_row.appendChild(button)

formulaire.appendChild(div_row);





div_form.appendChild(formulaire);
div1.appendChild(div_form);

var div2 = document.createElement("div");
div2.id = "div2";

var titre2 = titre.cloneNode(true);
titre2.childNodes[0].nodeValue = "Liste utilisateurs";

div2.appendChild(titre2);

var button2 = button.cloneNode(true);
button2.childNodes[0].nodeValue = "Rafraichir";
div2.appendChild(button2);

function createTableau(tableau, ncol, nrow, headers) {
    var tahead = document.createElement("thead");
    var tabody = document.createElement("tbody");
    var tabtrh = document.createElement("tr");
    var tabtrbody = document.createElement("tr");

    headers.forEach(element => {
        var tabh = document.createElement("th");
        tabh.textContent = element;
        tabtrh.appendChild(tabh);
    });

    tahead.appendChild(tabtrh);
    tableau.appendChild(tahead);

    for (let index = 1; index < nrow.length; index++) {
        var tabh = document.createElement("th");
        for (let col = 0; col < ncol.length; col++) {
            tabd = document.createElement("td");
            tabd.textContent = col;
            tabh.appendChild(tabd);
        }
        tabtrbody.appendChild(tabh);
    }

    //tabody.appendChild(tabtrbody);
    tableau.appendChild(tabody);
}

var tableau = document.createElement("table");
tableau.className = "table table-bordered table-striped";
createTableau(tableau, 3, 4, ["id", "nom", "mot de passe"]);

div2.appendChild(tableau);
body.appendChild(div2);





