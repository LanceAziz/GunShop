// API
// (async function getProducts() {
//     var response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=713e5b505cc52f5aa68161a6f9c471c1`);
//     var finalResponse = await response.json();
//     diaplayProduct(finalResponse.results);
//     console.log(products);
// })()
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
                        <a href="ProductDetails.html"><i class="fa-solid fa-circle-info fs-3 px-2"></i></a>
                    </div>
                </div>
            </div>`
    }
    document.getElementById('products').innerHTML = temp;
}
//Trims The Product Name So Its not too Long
function stringTrimmer(str) {
    if (str.length > 28) {
        str = `${str.slice(0, 28)}...`;
    }
    return str;
}

//Products
var link = document.querySelectorAll(".ph3")
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (e) {
        var choice = e.target.text;
        console.log(choice);
        sessionStorage.setItem('choice', JSON.stringify(choice));
        getproudect();
    })
}
var recipes = [];
(function getproudect() {
    choice = JSON.parse(sessionStorage.getItem('choice'));
    console.log(choice);
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("Get", `http://localhost/GunShop/Back-End/public/api/product/showType/${choice}`);
    httpRequest.send();

    httpRequest.addEventListener("readystatechange", function () {
        if (httpRequest.readyState == 4) {
            console.log(httpRequest.response);
            recipes = JSON.parse(httpRequest.response);
            console.log(recipes);
            displayRecipes()
        }
    })
})();
function displayRecipes() {
    var cols1 = '';
    var cols2 = '';
    for (var i = 0; i < recipes.length; i++) {
        cols1 +=
            `
        <div class="col-lg-3 col-md-4 col-sm-6 py-2">
            <div class="text-center border-grad">
                <div class="d-flex justify-content-end p-2">
                    <i id='editPrd' class="fa-solid fa-pen fs-6 px-2 edit-ani d-none"></i>
                    <i id='deletePrd' class="fa-solid fa-trash fs-6 px-2 trash-ani d-none"></i>
                </div>
                <!-- Picture -->
                <div class="text-center px-3 pt-1 pb-3">
                <img class="w-100" src="Images/Product_Default.png" alt="">
                </div>
                <!-- Details -->
                <div class="my-2">
                    <h3 class="Prd-Title">${stringTrimmer(recipes[i].name)}</h3>
                    <h4 class="prd-Price">${recipes[i].price} EGP</h4>
                </div>
                <!-- Buttons -->
                <div class="d-flex justify-content-center my-4">
                    <a id='addCart' href="#"><i class="fa-solid fa-cart-plus fs-3 px-2 d-none"></i></i></i></a>
                    <a id='removeCart' href="#"><i class="fa-solid fa-cart-arrow-down fs-3 px-2 d-none"></i></i></a>
                    <a href="ProductDetails.html"><i class="fa-solid fa-circle-info fs-3 px-2"></i></a>
                </div>
            </div>
        </div>`
        cols2 +=
            `
            <div class="col-md-4">
            <img class="w-100" src="Images/Product_Default.png" alt="">
        </div>
        <div class="col-md-6 p-2">
            <h2 class="fs-6" id="name">${stringTrimmer(recipes[i].name)}</h2>
            <h2 class="fs-6">QTY: <span id="Qty">2</span></h2>
            <h2 class="fs-6" id="price">${recipes[i].price}</h2>
        </div>
        <div class="col-md-2 d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-trash trash-ani fs-5"></i>
        </div>`
    }
    document.getElementById("products").innerHTML = cols1;
    document.getElementById("cart").innerHTML = cols2;

}
