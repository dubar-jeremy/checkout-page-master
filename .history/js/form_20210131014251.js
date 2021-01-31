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
    let newPrice = initialPrice * qty;
    console.log(newPrice);
    
    let test = document.querySelector(".old-price").innerHTML = newPrice;
    console.log(test);
    newPrice -= newPrice * 10 / 100;
    document.querySelector(".new-price").innerHTML = newPrice;
    
    return newPrice;
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