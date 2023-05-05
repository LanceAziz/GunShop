// Forms Inputs
let rUsername = document.getElementById("usernameRID");
let rPassword = document.getElementById("passwordRID");
let birthdate = document.getElementById("birthdateID");
let license = document.getElementById("licenseID");
let lUsername = document.getElementById("usernameLID");
let lPassword = document.getElementById("passwordLID");

// The Logged Use;
let loggedUser;

// Clear Authentication Forms
function ClearDataAuth(func) {
    if(func == 'login'){
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
    if(response.ok){
        loggedUser = await response.json();
        console.log(loggedUser);  
    }
    else{

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
