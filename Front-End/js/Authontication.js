// Forms Inputs
let rUsername = document.getElementById("usernameRID");
let rPassword = document.getElementById("passwordRID");
let birthdate = document.getElementById("birthdateID");
let license = document.getElementById("licenseID");
let lUsername = document.getElementById("usernameLID");
let lPassword = document.getElementById("passwordLID");
let button = document.getElementById("reg-btn");

// The Logged Use;
let loggedUser;

// Clear Authentication Forms
function ClearDataAuth(func) {
    if (func == 'login') {
        lUsername.value = "";
        lPassword.value = "";

    }
    else {
        rUsername.value = "";
        rPassword.value = "";
        birthdate.value = "";
        license.value = "";
    }
}
//Register Validator
//Replacer function that edits the design
function replacer(component,regx){
    if (regx.test(component.value) == true) {
        if (component.classList.contains('is-invalid')) {
            component.classList.replace('is-invalid', 'is-valid');
        }
        return true;
    } 
    else {
        component.classList.add('is-invalid');
        return false;
    }

}

//REGX
function validateUsername() {
    return replacer(rUsername, /^.{3,35}$/ )
}

function validatePassword() {
    return replacer(rPassword, /^.{5,20}$/ )
}
function validateLicense() {
    return replacer(license, /^[A-Za-z0-9]{15}$/ )
}

//EventListeners
rUsername.addEventListener("focus", () => {
    userameInputTouched = validateUsername();
})
rPassword.addEventListener("focus", () => {
    passwordInputTouched = validatePassword()
})
license.addEventListener("focus", () => {
    licenseInputTouched = validateLicense()
})

//Button (Enabled/Disabled)
let userameInputTouched = false;
let passwordInputTouched = false;
let licenseInputTouched = false;

function finalValidate(){
    if(userameInputTouched){
        validateUsername();
    }
    if(passwordInputTouched){
        validatePassword()
    }
    if(licenseInputTouched){
        validateLicense()
    }
    if(validateUsername()&&validatePassword()&&validateLicense()){
        button.removeAttribute("disabled")
    }else{
        button.setAttribute("disabled", true)
    }
}

// Resigter Function
async function register() {
    // Get The Form Values in a User Object
    let user = {
        name: rUsername.value,
        password: rPassword.value,
        birthdate: birthdate.value,
        license: license.value
    }
    // Posting User to the API
    var response = await fetch(`http://localhost/GunShop/Back-End/public/api/register`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (response.ok) {
        loggedUser = await response.json();
        console.log(loggedUser);
    }
    else {

    }
    ClearDataAuth('register');
}

// Login Function
async function login() {
    let user = {
        name: lUsername.value,
        password: lPassword.value,
    }
    var response = await fetch(`http://localhost/GunShop/Back-End/public/api/login`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    console.log(response);
    if (response.ok) {
        loggedUser = await response.json();
        console.log(loggedUser);
        document.querySelector('.valid-user').innerHTML = `Welcome ${loggedUser.name}`;
        $(".valid-user").fadeIn(300).delay(1500).fadeOut(400);
    }
    else {
        error = await response.json();
        console.log(error);
        document.querySelector('.invalid-user').innerHTML = error;
        $(".invalid-user").fadeIn(300).delay(1500).fadeOut(400);
    }
    ClearDataAuth('login');
}
