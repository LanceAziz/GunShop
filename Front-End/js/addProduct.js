//Form Inputs
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productType = document.getElementById('productType');
let productCaliber = document.getElementById('productCaliber');
let Descriptions = document.getElementById('Descriptions');


// clear data(form input)
function ClearData() {
  productName.value = "";
  productPrice.value = "";
  productType.value = "";
  productCaliber.value = "";
  Descriptions.value = "";
}


function ShowSuccessMsg() {
  $("#successMsg").fadeIn().next().delay(500).fadeOut();

}

//Add Product Function
async function AddProduct() {
  let product = {
    name: productName.value,
    price: productPrice.value,
    type: productType.value,
    caliber: productCaliber.value,
    description: Descriptions.value
  }
  console.log(product);
  var response = await fetch(`http://localhost/GunShop-Backend/Back-End/public/api/product/store`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  console.log(response);
  ClearData();
  ShowSuccessMsg();

}
//Submit Product Action 
document.querySelector('#productSubmition').addEventListener('click', AddProduct);

function Validation() {

  if (productName.value == "" || productPrice.value == "" || productType.value == "" || productCaliber.value == "") {
    document.getElementById("#productSubmition").setAttribute("disabled")
  }
  else {
    document.getElementById("submit").removeAttribute("disabled")

  }
}
//please restore! :_)