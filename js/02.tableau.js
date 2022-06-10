villes = new Array('nantes', 'paris', 'saint-nazaire', 'angers', 'le mans');

villes.forEach(element => {
    console.log(element);
});

boole = villes.every(function(element, index, array) {
    return element.includes("a");    
});

console.log(`lettreADansToutesLesVilles = ${boole}`);

someTiret = villes.some(function(element, index, array) {
    return element.includes("-");    
});

console.log(`auMoinsUneVilleAvecUnTiret = ${someTiret}`);

filterChar = villes.filter(function(element, index, array) {
    return (element.includes("-") == false && element.includes(" ") == false);    
})

console.log(`villesSansTiretSansEspace = [${filterChar}]`);

chaineFunc = villes.filter(function(element, index, array) {
    return (element.slice(-1) == "s");    
}).map(function(element, index, array) {
    return element.toUpperCase();    
});

console.log(`villesMajusculeSeTerminantParS  = [${chaineFunc}]`);