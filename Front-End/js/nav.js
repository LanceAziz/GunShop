// Nav Bar
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
                        <i class="fa-solid fa-cart-shopping p-2 pe-4 fs-5 rounded-0 cart-ani"><span class="position-absolute top-0 start-50  badge rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span></i>
                        </div>
                    <button class="btn border-start-0 border-end-0 rounded-0 btn-primary fa-sm px-4">Log Out</button>
                    <a href="Register.html"><button class="btn border-start-0 border-end-0  h-100 rounded-0 btn-primary fa-sm px-4">Sign In</button></a>
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
                <div class="row mt-4">
                    <div class="col-md-2">
                        <img class="w-100" src="Images/demo.jpg" alt="">
                    </div>
                    <div class="col-md-8 p-2">
                        <h2 class="fs-6" id="name">Name</h2>
                        <h2 class="fs-6">QTY: <span id="Qty">2</span></h2>
                        <h2 class="fs-6" id="price">$2000.00</h2>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-trash trash-ani fs-5"></i>
                    </div>
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
$('#cart-menu').toggle(0);
$('#cart-menu .fa-xmark').click(function () {
    $('#cart-menu').toggle(300);
})
$('#nav .fa-cart-shopping').click(function () {
    $('#cart-menu').toggle(300);
})
