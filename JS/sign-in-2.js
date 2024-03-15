function signUpValidateForm() {
    var name = document.forms["sign-up-form"]["sign-up-name"].value.trim();
    var email = document.forms["sign-up-form"]["sign-up-email"].value.trim();
    var password = document.forms["sign-up-form"]["sign-up-passwd"].value;

    document.getElementById("signUpError").innerHTML = "";

    if (name === '' || email === '' || password === '') {
        document.getElementById("signUpError").innerHTML = "All fields are required.";
        return false;
    }

    var storedData = JSON.parse(localStorage.getItem("userData")) || [];
    if (storedData.some(user => user.email === email)) {
        document.getElementById("signUpError").innerHTML = "Email is already registered.";
        return false;
    }

    return true;
}

function signInValidateForm() {
    var email = document.forms["sign-in-form"]["sign-in-email"].value.trim();
    var password = document.forms["sign-in-form"]["sign-in-passwd"].value;

    document.getElementById("signInError").innerHTML = "";

    if (email === '' || password === '') {
        document.getElementById("signInError").innerHTML = "Email and password are required.";
        return false;
    }

    var storedData = JSON.parse(localStorage.getItem("userData")) || [];
    if (!storedData.some(user => user.email === email)) {
        document.getElementById("signInError").innerHTML = "Email not found.";
        return false;
    }

    var user = storedData.find(user => user.email === email);
    if (password !== user.password) {
        document.getElementById("signInError").innerHTML = "Incorrect password.";
        return false;
    }

    return true;
}

function signUp() {
    if (!signUpValidateForm()) {
        return false;
    }

    var name = document.forms["sign-up-form"]["sign-up-name"].value.trim();
    var email = document.forms["sign-up-form"]["sign-up-email"].value.trim();
    var password = document.forms["sign-up-form"]["sign-up-passwd"].value;

    var storedData = JSON.parse(localStorage.getItem("userData")) || [];
    if (storedData.some(user => user.email === email)) {
        document.getElementById("signUpError").innerHTML = "Email is already registered.";
        return false;
    }

    var userData = { name: name, email: email, password: password };
    storedData.push(userData);
    localStorage.setItem("userData", JSON.stringify(storedData));

    document.forms["sign-up-form"].reset();
    window.location.href = 'home.html';
    return false;
}

function signIn() {
    if (!signInValidateForm()) {
        return false;
    }

    var email = document.forms["sign-in-form"]["sign-in-email"].value.trim();
    var password = document.forms["sign-in-form"]["sign-in-passwd"].value;

    var storedData = JSON.parse(localStorage.getItem("userData")) || [];
    var user = storedData.find(user => user.email === email);

    if (!user || password !== user.password) {
        document.getElementById("signInError").innerHTML = "Incorrect email or password.";
        return false;
    }

    document.forms["sign-in-form"].reset();
    window.location.href = 'home.html';
    return false;
}
