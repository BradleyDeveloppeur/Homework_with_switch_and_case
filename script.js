total = 0;

function add(){
    let fruit = document.getElementById("fruit").value;
   
    switch(fruit){      
        case "avocat":
            total += 5
            alert("Vous avez choisir un avocat " + total + "$")
            break;
        case "mangue":
            total += 10
            alert("vous avez choisir une mangue " + total + "$")
            break;
        case "papay":
            total += 20
            alert("vous avez choisir un papay " + total + "$")
            break;
        default:
            alert("Vous devez faire un choix")
            break;
    }
}

function finaliser(){
       alert("Le prix total de l'achat est " + total + " $")

}