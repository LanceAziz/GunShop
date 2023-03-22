// Nav Bar
document.getElementById("nav-placeholder").innerHTML = `
<nav class="navbar navbar-expand-lg">
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
                <div class="d-flex justify-content-center">
                    <i class="fa-solid fa-cart-shopping p-2 fs-5 rounded-0 cart-ani"></i>
                    <i class="fa-solid fa-user-tie p-2 fs-5 rounded-0"></i>
                    <button class="btn border-start-0 border-end-0 rounded-0 btn-primary fa-sm px-4">Sign In</button>
                    <button class="btn border-start-0 border-end-0 rounded-0 btn-primary fa-sm px-4">Sign Up</button>
                </div>
            </div>
        </div>
    </nav>`;
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
            <div class="col-lg-3 col-md-4 col-sm-6 py-2">
                <div class="text-center border-grad">
                    <div class="d-flex justify-content-end p-2">
                        <i class="fa-solid fa-pen fs-6 px-2 edit-ani"></i>
                        <i class="fa-solid fa-trash fs-6 px-2 trash-ani"></i>
                    </div>
                    <!-- Picture -->
                    <div class="text-center px-3 pt-1 pb-3">
                        <img class="w-100" src="https://image.tmdb.org/t/p/w500/${products[i].poster_path}" alt="Images/Product_Default.png">
                    </div>
                    <!-- Details -->
                    <div class="my-2">
                        <h3 class="Prd-Title">${stringTrimmer(products[i].title)}</h3>
                        <h4 class="prd-Price">${products[i].vote_average}</h4>
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
//Trims The Product Name So Its not too Long
function stringTrimmer(str){
    if(str.length > 28){
        str = `${str.slice(0, 28)}...`;
    }
    return str;
}