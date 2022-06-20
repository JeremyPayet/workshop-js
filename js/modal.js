import tableau_json from "../data/data.json" assert {type: 'json'};

/* Partie gestion tableau */

function appendToTable(table) {
    tableau_json.data.forEach(element => {
        var tabtrbody = document.createElement("tr");
        for (let index = 0; index < 3; index++) {
            
            var td = document.createElement("td");
            if (index == 0) {
                td.innerHTML = element.id; 
            } else if (index == 1){
                td.innerHTML = element.nom;
            } else {
                td.innerHTML = element.mot_de_passe;
            }
            
            tabtrbody.appendChild(td);
        }
        table.appendChild(tabtrbody);
    })
}

console.log("Hello");
console.log(tableau_json.data);
appendToTable(document.getElementsByTagName("tbody")[0])

/*window.addEventListener("load", function () {
     this.document.getElementsByTagName("tbody").innerHTML = {tableau_json.data.map((item, i) => (
     <tr>
     <td>{item.id}</td>
     <td>{item.nom}</td>
     <td>{item.mot_de_passe}</td>
     </tr>
 ))}
 
});
*/

/*
        for (const objet in element) {
            var td = document.createElement("td");
            td.innerHTML = element;
            tabtrbody.appendChild(td);
        } */