// Nav Bar
(function nav() {
    document.getElementById("nav-placeholder").innerHTML = `
<nav id="nav" class="navbar navbar-expand-lg sticky">
        <div class="container-fluid">
            <a href="index.html"><i class="fa-solid fa-person-rifle px-2 py-2 fs-5 rounded-0">Gunify</i></a>
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <a class="nav-link text-white" aria-current="page" href="index.html #Home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="index.html #About-Us">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="index.html #Categories">Categories</a>
                    </li>
                </ul>
                <div class="d-flex justify-content-center ">
                    <div class="d-flex position-relative">
                        <i id='btnCart' class="fa-solid fa-cart-shopping p-2 pe-4 fs-5 rounded-0 cart-ani"><span class="position-absolute top-0 start-50  badge rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span></i>
                    </div>
                    <button id='logoutUser' class="btn border-start-0 border-end-0 rounded-0 btn-primary fa-sm py-3 px-4 d-none">Log Out</button>
                    <button id='signinUser' onclick="window.location.href = 'login.html';" class="btn border-start-0 border-end-0 rounded-0 btn-primary fa-sm py-3 px-4 d-none">Sign In</button>
                </div>
            </div>
        </div>
    </nav>
    <!-- Cart Items -->
    <div id="cart-menu" class="crt-menu flex-column justify-content-between">
        <div class="sticky-md-top">
            <!-- Header -->
            <div class="d-flex justify-content-between bb-crt-item py-2">
                <h2>Cart Items</h2>
                <i class="fa-solid fa-xmark trash-ani fs-3 p-2 px-3"></i>
            </div>
            <!-- items -->
            <div class="scroll">
                <div id='cart' class="row mt-4">
                    
                </div>
            </div>
            <!-- Checkout -->
            <div class="sticky-md-bottom bt-crt-item bg-black pt-3">
                <div class="d-flex justify-content-between">
                    <h3>Subtotal:</h3>
                    <h3 id="subtotal">$4000.00</h3>
                </div>
                <div class="row g-2">
                    <div class="col-md-6">
                        <button
                            class="btn border-start-0 border-end-0 rounded-0 btn-primary fa-sm p-4 w-100 my-1">Clear
                            Cart</button>
                    </div>
                    <div class="col-md-6">
                        <button
                            class="btn border-start-0 border-end-0 rounded-0 btn-primary fa-sm p-4 w-100 my-1">Check
                            Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
})()

$('#cart-menu').toggle(0);
$('#cart-menu .fa-xmark').click(function () {
    $('#cart-menu').toggle(300);
})
$('#nav .fa-cart-shopping').click(function () {
    $('#cart-menu').toggle(300);
})


var user = JSON.parse(localStorage.getItem('user'));
console.log(user);



(function uiManip() {
    console.log(user.is_admin);
    // var editPrd = document.getElementsByClassName('editPrd');
    // var deletePrd = document.getElementById('deletePrd');
    var addPrd = document.getElementById('addPrd');
    // var infoPrd = document.getElementById('infoPrd');
    var signinUser = document.getElementById('signinUser');
    var logoutUser = document.getElementById('logoutUser');
    // var addCart = document.getElementById('addCart');
    // var removeCart = document.getElementById('removeCart');
    var btnCart = document.getElementById('btnCart');
    console.log(logoutUser);


    //Authontication manipulation UI
    if (user.is_admin) {
        console.log("i am a fuckin admin");
        signinUser.classList.add('d-none')
        logoutUser.classList.remove('d-none')
        btnCart.classList.add('d-none')
        addPrd.classList.remove('d-none')
        // editPrd.classList.remove('d-none')
        // deletePrd.classList.remove('d-none')
        // infoPrd.classList.remove('d-none')
        // addCart.classList.add('d-none')
        // removeCart.classList.add('d-none')
    }
    else {
        signinUser.classList.add('d-none')
        logoutUser.classList.remove('d-none')
        console.log(logoutUser);
        btnCart.classList.remove('d-none')
        addPrd.classList.add('d-none')
        // editPrd.classList.add('d-none')
        // deletePrd.classList.add('d-none')
        // infoPrd.classList.remove('d-none')
        // addCart.classList.remove('d-none')
        // removeCart.classList.remove('d-none')
    }
})()