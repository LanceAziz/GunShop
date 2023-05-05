// Forms Inputs
let rUsername = document.getElementById("usernameRID");
let rPassword = document.getElementById("passwordRID");
let birthdate = document.getElementById("birthdateID");
let license = document.getElementById("licenseID");
let lUsername = document.getElementById("usernameLID");
let lPassword = document.getElementById("passwordLID");

let loggedUser;

// Resigter Function
async function register() {
    let user = {
        name: rUsername.value,
        password: rPassword.value,
        birthdate: birthdate.value,
        license: license.value
    }
    ClearDataAuth();
    var response = await fetch(`http://localhost/GunShop/Back-End/public/api/register`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    loggedUser = await response.json();
    console.log(loggedUser);
}

// Login Function
async function login() {
    let user = {
        name: lUsername.value,
        password: lPassword.value,
    }
    ClearDataAuth();
    var response = await fetch(`http://localhost/GunShop/Back-End/public/api/login`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    console.log(response);
    if (response.ok){
        loggedUser = await response.json();   
        console.log(loggedUser); 
    }
    else {
    }
}

// Clear Authentication Forms
function ClearDataAuth() {
    rUsername.value = "";
    rPassword.value = "";
    birthdate.value = "";
    license.value = "";
    lUsername.value = "";
    lPassword.value = "";
  }
  