document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault(); 
    alert("Redirection interdite")})

function display_menu(){

    let menu=document.getElementById('menu')

    menu.style.visibility='visible'


}

function remove_menu(){


    let menu=document.getElementById('menu')

    menu.style.visibility='hidden'


}