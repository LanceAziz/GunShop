let username = document.getElementById("usernameID")
let password = document.getElementById("passwordID")
let birthdate = document.getElementById("birthdateID")
let license = document.getElementById("licenseID")

async function register() {
    let user = {
        name: username.value,
        password: password.value,
        birthdate: birthdate.value,
        license: license.value
    }
    var response = await fetch(`http://localhost/GunShop-Backend/Back-End/public/api/register`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    console.log(response);
}
async function login() {
    let user = {
        name: username.value,
        password: password.value,
    }
    var response = await fetch(`http://localhost/GunShop-Backend/Back-End/public/api/login`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    console.log(response);
}

