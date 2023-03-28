let input = '';

class Calculatrice{

        constructor() {
            this.input = document.getElementById('resultat');
        }

        ajouter(value) {
            input += value;
            document.getElementById('resultat').value = input;}
        
        reinitialiser() {
            input = '';
            document.getElementById('resultat').value = input;}
        
        calculer() {
            try {
                let result = eval(input);
                document.getElementById('resultat').value = result;
                input = result.toString();
            } catch (error) {
                alert('Erreur de calcul');
            }
        }
        
        retourArriere(){
            document.getElementById('resultat').value = document.getElementById('resultat').value.slice(0, -1);
            input = document.getElementById('resultat').value;
        }
        
}

let calculatrice = new Calculatrice();
