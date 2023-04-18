let passwordInput = document.getElementById("password") //instead of having to put .value in every line of this code that references passwordInput you could just add.value to the end of this line and therefore the variable already has it built in

function checkCorrectPassword() {

    //check for lowercase letters
    let lowerCaseLetters = /[a-z]/;
    if (passwordInput.value.match(lowerCaseLetters)) {
        
    } else {
        alert("Password requires at least 1 lowercase letter!");
    }

    /*to be more efficient have the if else be searching for the opposite 
    Example:
    
    let lowerCaseLetters = /[a-z]/;
    if (!passwordInput.value.match(lowerCaseLetters)) {
        alert("Password requires at least 1 lowercase letter!");
    }
    
    You can then do this to each if else block to make it more efficient and not having the empty logic withint he if statement. 
    */
    
    
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

//^^^this last else statement would still hold true
