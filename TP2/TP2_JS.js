function calculer() {
    let result = document.getElementById("result");
    let i1=document.getElementById("op1");

    let val1=parseFloat(i1.value);

    let i2=document.getElementById("op2");
    let val2=parseFloat(i2.value);

    result.innerHTML=`${val2+val1}`

}


function permuter() {
    
    let ip1 = document.getElementById("p1");
    let ip2 = document.getElementById("p2");
    let i1 = ip1.value;
    let i2 = ip2.value;

    let div = document.getElementById("EX2");

    div.removeChild(ip1);
    div.removeChild(ip2);

    let p1 = document.createElement("input");
    let p2 = document.createElement("input");

    p1.setAttribute('value', i2);
    p1.setAttribute('id','p1')
    p2.setAttribute('id','p2')
    p2.setAttribute('value', i1);

    div.appendChild(p1);
    div.appendChild(p2);
}


function calculer_operation(){
    var allFieldsFilled = true;
    var requiredInputs = document.querySelectorAll('input[required], select[required]');
            requiredInputs.forEach(function(input) {
                if (!input.value.trim()) {
                    allFieldsFilled = false;
                    return;
                }
            });

            if (!allFieldsFilled) {
                alert("Veuillez remplir tous les champs obligatoires.");
                return;
            }
    let result = document.getElementById("resultat");
    let i1=document.getElementById("op1_2");

    let val1=i1.value;
    console.log(val1)
    let i2=document.getElementById("op2_2");
    let val2=i2.value;

    console.log(val2)
    let op=document.getElementById("opération").value
    console.log(typeof(eval(val1+op+val2)))
    result.innerHTML=`${eval(val1+op+val2)}`
    

}




