
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productType = document.getElementById('productType');
let productCaliber = document.getElementById('productCaliber');
let Descriptions = document.getElementById('Descriptions');

document.querySelector('#productSubmition').addEventListener('click', async function () {
    let product={
        name:productName.value,
        price:productPrice.value,
        type:productType.value,
        caliber:productCaliber.value,
        description:Descriptions.value
    }  
    var response = await fetch(`https://localhost/GunShop-Backend/Back-End/public/api/store`,{
      method:"POST",body:JSON.stringify(product)
    });
    console.log(response);
  }
)















