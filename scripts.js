//Alyssa Ancheta

var button = document.getElementById("add_wish_button");
var minorWishList = [];
document.getElementById("addedWish").innerHTML = "";

button.onclick = function() { 
    document.getElementById("addedWish").innerHTML = "";
    var wish = document.getElementById("minor-wish").value;
    minorWishList.push(wish);

    if (wish == "") {
        minorWishList.pop();
    }

    for (i = 0; i<minorWishList.length; i++) {
        var minorWish = minorWishList[i];
        document.getElementById("addedWish").innerHTML += "<li> <div class = 'minorWishDiv'> " 
        + minorWish  + " </div> <input type = 'checkbox' class = 'wishlistCheckbox' onclick = 'clickCheckbox()'></li>" ;           
        document.getElementById("minor-wish").value = "";
    }
}

var wishes = document.getElementsByClassName("minorWishDiv");
var checkboxes = document.getElementsByClassName("wishlistCheckbox");

function clickCheckbox() {

    for (i = 0; i < checkboxes.length; i++) {
        
        if (checkboxes[i].checked ) {    
        wishes[i].style.textDecoration = "line-through";
        wishes[i].style.color = "#c3c3c3";
        
        } else {    
        wishes[i].style.textDecoration = "none";
        wishes[i].style.color = "#fefbe0";
        }
    } 
}


