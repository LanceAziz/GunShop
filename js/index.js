// Nav Bar
document.getElementById("nav-placeholder").innerHTML = `
<div class="container-fluid">
        <!-- Logo -->
            <div class="col-4 navbar-nav">
                <a href="index.html"><i class="fa-solid fa-person-rifle px-2 py-2 fs-5 rounded-0 skew"></i></a>
            </div>
        <!-- Navigation Tabs -->
            <ul class="navbar-nav m-auto col-4 d-flex justify-content-center">
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
            <div class="navbar-nav col-4 d-flex justify-content-end">
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
                        <h3>${stringTrimmer(products[i].title)}</h3>
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

//Trims The Product Name So Its not too Long
function stringTrimmer(str){
    if(str.length > 28){
        str = `${str.slice(0, 28)}...`;
    }
    return str;
}