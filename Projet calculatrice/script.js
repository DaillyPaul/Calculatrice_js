// Déclare la variable input pour stocker les entrées de l'utilisateur.
let input = '';

//Fonction pour ajouter une variable
function ajouter(value) {
	input += value;
	document.getElementById('resultat').value = input;
}
// Fonction pour réinitialiser/effacer la variable et met à jour l'affichage de la calculatrice.
function reinitialiser() {
	input = '';
	document.getElementById('resultat').value = input;
}

//Fonction pour calculer l'expression avec "eval"
function calculer() {
	try {
		let result = eval(input);
		document.getElementById('resultat').value = result;
		input = result.toString();
	} catch (error) {
		alert('Erreur de calcul');
	}
}
