// Variables 
var emailField = document.getElementById("field");
var emailLabel = document.getElementById("label");
var emailError = document.getElementById("error");
var email = emailField.value;
var emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

//  Function
function validate() {
    emailLabel.style.bottom = "45px"; // Adjust as needed


// If else conditions
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Enter a valid email, please";
        emailField.style.borderBottomColor = "red";
        emailError.style.top = "120%"
        return false;
    } else {
        emailError.innerHTML = ""; // Clear the error message if valid
        emailField.style.borderBottomColor = "green";        
        emailError.style.top = "100%"
        return true;
    }
}
