// Form Inputs
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productCaliber = document.getElementById('productCaliber');
let productDescription = document.getElementById('productDescription');
let productCapacity = document.getElementById('productCapacity');
let productAction = document.getElementById('productAction');
let productRounds = document.getElementById('productRounds');

// Shows Certain Inputs Based on Type
document.getElementById('Gun-option').addEventListener('click', function () {
  document.getElementById('Gun').classList.remove('d-none')
  document.getElementById('Ammo').classList.add('d-none')
})
document.getElementById('Ammo-option').addEventListener('click', function () {
  document.getElementById('Ammo').classList.remove('d-none')
  document.getElementById('Gun').classList.add('d-none')
})

// Clear Product Form
function ClearData() {
  productName.value = "";
  productPrice.value = "";
  productDescription.value = "";
  productCapacity.value = "";
  productRounds.value = "";
}

// Add Product Function
async function AddProduct() {
  let product = {
    name: productName.value,
    price: productPrice.value,
    type: document.querySelector('input[name="productType"]:checked').value,
    caliber: productCaliber.value,
    description: productDescription.value,
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
  data = await response.json();
  let isCreated = response.status == 201 ? true : false;
  ShowMsg(data, isCreated);
  ClearData();
}

// Submit Product Action 
document.querySelector('#productSubmition').addEventListener('click', AddProduct);

// Shows Message Based on Response
function ShowMsg(data, isCreated) {
  if (isCreated) {
    $("#Msg").html(data);
    $("#Msg").addClass('alert-success border-success');
    $("#Msg").removeClass('alert-danger border-danger');
    $("#Msg").fadeIn(300).delay(1500).fadeOut(400);
  }
  else {
    $("#Msg").html('Error');
    $("#Msg").addClass('alert-danger border-danger');
    $("#Msg").removeClass('alert-success border-success');
    $("#Msg").fadeIn(300).delay(1500).fadeOut(400);

  }
}

// function Validation() {
//   if (productName.value == "" || productPrice.value == "" || productType.value == "" || productCaliber.value == "") {
//     document.getElementById("#productSubmition").setAttribute("disabled")
//   }
//   else {
//     document.getElementById("submit").removeAttribute("disabled")
//   }
// }

//please restore! :_)



