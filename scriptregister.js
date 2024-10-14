document.querySelector('.submit').onclick = function(){
    var name = document.querySelector('.name').value;

    if(name ==""){
        alert("Fill your name");
        return false
    } else{
        return true
    }
}

document.querySelector('.submit').onclick = function(){
    var gender = document.querySelector('.form-inline').value;

    if(gender ==""){
        alert("Choose your gender");
        return false
    } else{
        return true
    }
}

document.querySelector('.submit').onclick = function(){
    var city = document.querySelector('.select').value;
    
    if(city==""){
        alert("Choose your city");
        return false
    } else{
        return true
    }
}

document.querySelector('.submit').onclick = function(){
    var password = document.querySelector('.password').value;
    var confirmpass = document.querySelector('.confirmpass').value;

    if (password==""){
        alert("Password can't be empty")
        return false;
    } else if(password!=confirmpass){
        alert("Password doesn't match")
        return false;
    } else if(password.length<8){
        alert("Minimum 8 letters")
        return false;
    }else if(password.search(/[A-Z]/)==-1){
        alert("Minimum 1 Uppercase")
        return false;
    }else if(password.search(/[0-9]/)==-1){
        alert("Minimum 1 Number")
        return false;
    }
    else{
        return true;
    }
}