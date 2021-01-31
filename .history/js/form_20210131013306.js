window.onload = function (){

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);

  let i = 0;
  let initialPrice = 50;
  let newPrice = increase();
  function increase()
  {
    // price * 10 / 100 = 10% reduce
    i++
    let items = document.querySelector(".nbr-value").value = i;
    let qty = parseInt(items);
    let priceBeforeDiscount = initialPrice * qty;
    document.querySelector(".old-price").innerHTML = priceBeforeDiscount;
    priceAfterDiscount -= newPrice * 10 / 100;
    document.querySelector(".new-price").innerHTML = priceAfterDiscount;
    
    return priceAfterDiscount;
  }

  function decrease()
  {
    if(i >= 1)
    {
      i--
      let items = document.querySelector(".nbr-value").value = i;
      let qty = parseInt(items);
      let currentPrice = qty * newPrice;
      console.log(currentPrice);
    }
  }

}