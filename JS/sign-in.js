const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container_signup_signin');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// Functions to handle sign-up and sign-in

function signInValidateForm() {
    // Get data from sign-in form
    var email = document.forms["sign-in-form"]["sign-in-email"].value.trim();
    var password = document.forms["sign-in-form"]["sign-in-passwd"].value.trim();

    // Validate sign-in data
    if (!email || !password) {
        document.getElementById("signInError").innerHTML = "Email and password are required";
        return false;
    }

    // Check if email is in a valid format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("signInError").innerHTML = "Invalid email format";
        return false;
    }

    // Check if email exists in local storage
    var storedData = JSON.parse(localStorage.getItem("userData")) || [];
    if (!storedData.some(user => user.email === email)) {
        document.getElementById("signInError").innerHTML = "Email not found";
        return false;
    }

    // Check if the password matches
    var user = storedData.find(user => user.email === email);
    if (password !== user.password) {
        document.getElementById("signInError").innerHTML = "Incorrect password";
        return false;
    }

    // Clear error message
    document.getElementById("signInError").innerHTML = "";

    return true;
}


function signUp() {
    // Validate sign-up form
    var validationResults = signUpValidateForm();

    // Display all validation messages
    displayValidationMessages(validationResults);

    // Check if any validation failed
    if (!validationResults.isValid) {
        return false;
    }

    // Get data from sign-up form
    var name = document.forms["sign-up-form"]["sign-up-name"].value.trim();
    var email = document.forms["sign-up-form"]["sign-up-email"].value.trim();
    var password = document.forms["sign-up-form"]["sign-up-passwd"].value.trim();

    // Get existing data from local storage
    var storedData = JSON.parse(localStorage.getItem("userData")) || [];

    // Check if email is unique
    if (storedData.some(user => user.email === email)) {
        document.getElementById("emailError").innerHTML = "Email is already registered";
        return false;
    }

    // Store new data in local storage
    var userData = { name: name, email: email, password: password };
    storedData.push(userData);
    localStorage.setItem("userData", JSON.stringify(storedData));

    // Clear form and perform actions after successful sign-up
    document.forms["sign-up-form"].reset();
    window.location.href = 'home.html';

    // Return false to prevent the form from submitting
    return false;
}

function signUpValidateForm() {
    // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // Get data from sign-up form
    var name = document.forms["sign-up-form"]["sign-up-name"].value.trim();
    var email = document.forms["sign-up-form"]["sign-up-email"].value.trim();
    var password = document.forms["sign-up-form"]["sign-up-passwd"].value.trim();

    // Validation results object
    var validationResults = {
        isValid: true,
        nameError: "",
        emailError: "",
        passwordError: ""
    };

    // Validate name
    if (name === '') {
        validationResults.isValid = false;
        validationResults.nameError = "Name is required";
    }

    // Validate email
    if (email === '') {
        validationResults.isValid = false;
        validationResults.emailError = "Email is required";
    } else {
        // Check if email is in a valid format
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            validationResults.isValid = false;
            validationResults.emailError = "Invalid email format";
        }
    }

    // Validate password
    if (password === '') {
        validationResults.isValid = false;
        validationResults.passwordError = "Password is required";
    }

    return validationResults;
}

function displayValidationMessages(validationResults) {
    // Display name error message
    document.getElementById("nameError").innerHTML = validationResults.nameError;

    // Display email error message
    document.getElementById("emailError").innerHTML = validationResults.emailError;

    // Display password error message
    document.getElementById("passwordError").innerHTML = validationResults.passwordError;
}


function signIn() {
    // Validate sign-in form
    if (!signInValidateForm()) {
        return;
    }

    document.forms["sign-in-form"].reset();
    window.location.href = 'home.html';
}
document.getElementById("signUpNameInput").addEventListener('input', () => {
    document.getElementById("nameError").innerHTML = "";
});

document.getElementById("signUpEmailInput").addEventListener('input', () => {
    document.getElementById("emailError").innerHTML = "";
});

document.getElementById("signUpPasswordInput").addEventListener('input', () => {
    document.getElementById("passwordError").innerHTML = "";
});

document.getElementById("signInEmailInput").addEventListener('input', () => {
    document.getElementById("signInError").innerHTML = "";
});

document.getElementById("signInPasswordInput").addEventListener('input', () => {
    document.getElementById("signInError").innerHTML = "";
});