// Nav Bar
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
// API
(async function getProducts(){
    var response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=713e5b505cc52f5aa68161a6f9c471c1`);
    var finalResponse = await response.json();
    diaplayProduct(finalResponse.results);
    console.log(products);
})()
function diaplayProduct(products) {
    var temp = ``;
    for (let i = 0; i < products.length; i++) {
        temp += `
            <div class="col-3 py-2">
                <div class="text-center border-grad">
                    <!-- Picture -->
                    <div class="text-center p-3">
                        <img class="w-100" src="https://image.tmdb.org/t/p/w500/${products[i].poster_path}">
                    </div>
                    <!-- Details -->
                    <div class="my-2">
                        <h3>${products[i].title}</h3>
                        <h4>${products[i].vote_average}</h4>
                    </div>
                    <!-- Buttons -->
                    <div class="d-flex justify-content-center my-4">
                        <i class="fa-solid fa-cart-plus fs-3 px-2"></i>
                        <i class="fa-solid fa-cart-arrow-down fs-3 px-2"></i>
                        <i class="fa-solid fa-circle-info fs-3 px-2"></i>
                    </div>
                </div>
            </div>`
    }
    document.getElementById('products').innerHTML = temp;
}