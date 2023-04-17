let passwordInput = document.getElementById("password")

function checkCorrectPassword() {

    //check for lowercase letters
    let lowerCaseLetters = /[a-z]/;
    if (passwordInput.value.match(lowerCaseLetters)) {
        
    } else {
        alert("Password requires at least 1 lowercase letter!");
    }

    //check for capital letters
    let upperCaseLetters = /[A-Z]/;
    if (passwordInput.value.match(upperCaseLetters)){
    
    } else {
        alert("Password requires at least one upper case letter!")
    }

    //check password for numbers
    let number = /[0-9]/;
    if (passwordInput.value.match(number)){
    
    } else {
        alert("Password requires at least 1 number!")
    }

    //check password for special characters
    let character = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (passwordInput.value.match(character)){
    
    } else {
        alert("Password requres at least 1 special character!")
    }

    //check length of password for at least 8 characters
    if(passwordInput.value.length < 8) {
        alert("Password must be at least 8 characters!")
    } else {
        alert("Password accepted!")
    }
}