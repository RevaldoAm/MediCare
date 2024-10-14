document.querySelector('.input').onclick = function(){
    var email = document.querySelector('.email').value;

    if(email == ""){
        alert("Fill your email");
        return false
    } else{
        return true
    }
}

document.querySelector('.input').onclick = function(){
    var pass = document.querySelector('.pass').value;

    if(pass == ""){
        alert("Fill your password");
        return false
    } else{
        return true
    }
}