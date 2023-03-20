document.getElementById("nav-placeholder").innerHTML = `
<div class="container-fluid">
        <!-- Logo -->
        <div class="navbar-nav me-2">
            <a href="index.html"><i class="fa-solid fa-pencil px-2 py-2 fs-5 rounded-0 skew"></i></a>
        </div>
        <!-- Navigation Tabs -->
        <ul class="navbar-nav m-auto">
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
        <!-- Cart & Athuntication -->
        <div class="navbar-nav me-2">
            <i class="fa-solid fa-cart-shopping px-2 py-2 fs-5 rounded-0 skew"></i>
            <i class="fa-solid fa-right-to-bracket px-2 py-2 fs-5 rounded-0 skew"></i>
            <i class="fa-solid fa-user-plus px-2 py-2 fs-5 rounded-0 skew"></i>
        </div>
    </div>`;