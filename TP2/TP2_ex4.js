let x = prompt("Entrez une variable (une valeur numérique)")

x.trim;

while(isNaN(Number(x))){


    x=prompt("Entrez une variable valide")

}

let y = prompt("Entrez une deuxième varaiable")
y.trim;
while(isNaN(Number(y))){


    y=prompt("Entrez une variable valide")

}


let z = prompt("Entrez une troisième variable") 
z.trim
while(isNaN(Number(z))){


    z=prompt("Entrez une variable valide")

}

if(x==y && x==z){
    let div=document.getElementById("EX4")
    div.innerHTML="Ces trois variable sont égales"
}

else if( x==y || z==y || x==z ){

        
    let div=document.getElementById("EX4")
    div.innerHTML="Deux des variables sont de valeurs égales."
}

else{
    
    let div=document.getElementById("EX4")
    div.innerHTML="Les trois variables sont différentes."

}