// Form Inputs
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productType = document.getElementById('productType');
let productCaliber = document.getElementById('productCaliber');
let Descriptions = document.getElementById('Descriptions');
let productCapacity = document.getElementById('productCapacity');
let productAction = document.getElementById('productAction');
let productRounds = document.getElementById('productRounds');


//radio
document.getElementById('inlineRadio1').addEventListener('click', function () {
  document.getElementById('Gun').classList.remove('d-none')
  document.getElementById('Ammo').classList.add('d-none')
})
document.getElementById('inlineRadio2').addEventListener('click', function () {
  document.getElementById('Ammo').classList.remove('d-none')
  document.getElementById('Gun').classList.add('d-none')
})


// Clear Product Form
function ClearData() {
  productName.value = "";
  productPrice.value = "";
  productType.value = "";
  productCaliber.value = "";
  Descriptions.value = "";
}


//Add Product Function
async function AddProduct() {
  let product = {
    name: productName.value,
    price: productPrice.value,
    type: productType.value,
    caliber: productCaliber.value,
    description: Descriptions.value,
    capacity: productCapacity.value,
    Action: productAction.value,
    Rounds: productRounds.value
  }
  console.log(product);
  var response = await fetch(`http://localhost/GunShop/Back-End/public/api/product/store`, {
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