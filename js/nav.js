// Nav Bar
document.getElementById("nav-placeholder").innerHTML = `
<nav class="navbar navbar-expand-lg sticky">
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
                    <button class="btn border-start-0 border-end-0 rounded-0 btn-primary fa-sm px-4">Sign In</button>
                </div>
            </div>
        </div>
    </nav>`;