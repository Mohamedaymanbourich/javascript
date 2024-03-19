let prixHT=prompt("entrez un prix")
let tva=prompt("Entrez un taux entre 0 et 100 (%)")

prixHT.trim;tva.trim
while(isNaN(Number(prixHT)) || parseFloat(prixHT)<0){


    prixHT=prompt("Entrez un prix valide")

}



while(isNaN(Number(tva)) || parseFloat(tva)<0 || parseFloat(tva)>100){


    tva=prompt("Entrez un taux valable")

}

let nb=parseFloat(prixHT)*(1+parseFloat(tva)/100)

document.body.innerText=`${nb.toFixed(2)}`








