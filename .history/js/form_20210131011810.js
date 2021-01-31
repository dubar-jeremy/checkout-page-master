window.onload = function (){

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);
  
  let i = 0;
  let initialPrice = 50;

  function increase()
  {
    // price * 10 / 100 = 10% reduce
    i++
    let items = document.querySelector(".nbr-value").value = i;
    let qty = parseInt(items);
    let newPrice = initialPrice * qty;
    newPrice -= newPrice * 10 / 100;
    console.log(newPrice);
    
    return newPrice;
  }

  function decrease()
  {
    if(i >= 1)
    {
      i--
      let items = document.querySelector(".nbr-value").value = i;
      let qty = parseInt(items);
      let newPrice = qty * initialPrice;
      newPrice += newPrice * 10 / 100;
      newPrice = newPrice - 10;
      console.log(newPrice)

    }
  }

}