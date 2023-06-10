const decreaseNumber = (price,quantity, total) => {
  var getPrice = document.getElementById(price).textContent;
  console.log(getPrice,'price');
  var getTotal = document.getElementById(total);
  console.log(getTotal,'Total');
  var getQuantity = document.getElementById(quantity);
  console.log(getQuantity,'quantity');
  var productTotal=document.getElementById("product_total_amt")

  if (getQuantity.value <= 0) {
    Swal.fire({
      icon: "warning",
      title: "Minimum quantity will be 1",
    });
    getQuantity.style.background = "red";
    getQuantity.style.color = "white";
  } else {
    getQuantity.style.background = "white";
    getQuantity.style.color = "red";
    getQuantity.value = parseInt(getQuantity.value) - 1;
   
  }
  
  getTotal.innerText =parseInt(getPrice) * parseInt(getQuantity.value) ;
  all_product_price=parseInt(document.getElementById("total").textContent) + parseInt(document.getElementById("total2").textContent);
  productTotal.innerText=all_product_price;
  document.getElementById('total_cart_amt').innerText=all_product_price + 50;
  
};

const CheckOut=()=>{
  Swal.fire({
    icon: "success",
    title: "Taka Pu*ki diya dukiye dibo!!",
  });
}

const increaseNumber = (price,quantity, total) => {
  var getPrice = document.getElementById(price).textContent;
  // console.log(getPrice,'price');
  var getTotal = document.getElementById(total);
  // console.log(getTotal,'Total');
  var getQuantity = document.getElementById(quantity);
  // console.log(getQuantity,'quantity');
  var productTotal=document.getElementById("product_total_amt")

  if (getQuantity.value >= 5) {
    Swal.fire({
      icon: "warning",
      title: "Can't purchase more than 5 products!",
    });
    getQuantity.style.background = "red";
    getQuantity.style.color = "white";
  } else {
    getQuantity.style.background = "white";
    getQuantity.style.color = "red";
    getQuantity.value = parseInt(getQuantity.value) + 1;
   
  }
  
  getTotal.innerText =parseInt(getPrice) * parseInt(getQuantity.value) ;
  all_product_price=parseInt(document.getElementById("total").textContent) + parseInt(document.getElementById("total2").textContent);
  productTotal.innerText=all_product_price;
  document.getElementById('total_cart_amt').innerText=all_product_price + 50;
  
};



