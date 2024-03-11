function validation(a = 0) {
   
    if ( a==0)
        {
            while(prix===NaN || prix<0)
                {
                    prix=Number(prompt("Veuillez entrer un prix valide"))
                }
            return prix
        }
    else if(a===1){

        while(prix===NaN || prix<0)
                {
                    prix=Number(prompt("Veuillez entrer un prix valide"))

                }
        
        while(taxe===NaN || taxe<0 || taxe>100)
                {

                    taxe=Number(prompt("Veuillez entrer un nombre (TAXE) valide"))
                }
        
        return [prix,taxe]



    }


}

//EX1
let userInput = prompt("Veuillez entrer votre chaîne de caractères:");
let div = document.getElementById("d1");
div.innerHTML = userInput;

//EX2
let a = 20;
let b = 10;
let result = a + b;
alert("La somme de a et b est : " + result);

//EX3 
let budget = 100000; // variable de votre choix
let achat = 2000;

if (budget >= achat) {
    let response = document.getElementById("d2");
    response.innerHTML = "Votre budget permet cet achat";
} else {
    let response = document.getElementById("d2");
    response.innerHTML = "Votre budget ne permet pas cet achat";
}

// EX4
let entry = Number(prompt("Entrez votre prix HT:"));
while(isNaN(entry) || entry<0)
{
    entry=Number(prompt("Veuillez entrer un prix valide"))
}

let prix = (1 + 0.2) * Number(entry);
document.body.innerText += "\nLe prix après taxe est " + prix;

//EX5 
let entry1 = Number(prompt("Entrez votre prix HT:"));
let taxe = Number(prompt("Entrez un nombre (TAXE)"));

while(isNaN(entry1) || entry1 <0)
                {
                    entry1=Number(prompt("Veuillez entrer un prix valide"))

                }
        
 while(isNaN(taxe) || taxe<0 || taxe>100)
                {

                    taxe=Number(prompt("Veuillez entrer un nombre (TAXE) valide"))
                }


let prix1 = (1 + Number(taxe / 100)) * Number(entry1);
document.body.innerText += "\nLe prix après taxe est " + prix1;


//EX6

let entry2 = Number(prompt("Entrez votre prix HT:"));
let taxe1 = Number(prompt("Entrez un nombre (TAXE)"));

while(isNaN(entry2) || entry2 <0)
                {
                    entry2=Number(prompt("Veuillez entrer un prix valide"))

                }
        
 while(isNaN(taxe1) || taxe1<0 || taxe1>100)
                {

                    taxe1=Number(prompt("Veuillez entrer un nombre (TAXE) valide"))
                }


let prixTTC = (1 + Number(taxe / 100)) * Number(entry1);

let style = prixTTC > 100 ? 'color: red;' : 'color: green;';
let contenuHTML = '<p style="' + style + '">Le prix TTC est : ' + prixTTC.toFixed(2) + '</p>';
document.body.innerHTML += contenuHTML;


//EX7