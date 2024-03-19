function envoyer(){

    let email=document.getElementById("email")
    let objet=document.getElementById("objet")
    let corps=document.getElementById("corps")

    let sender=document.getElementById("sender")
    sender.innerHTML='Sender: '+email.value

    let ob1=document.getElementById("objet_1")
    ob1.innerHTML='objet: '+objet.value

    let corps_1=document.getElementById("corps_1")
    corps_1.innerHTML='corps: '+corps.value


}