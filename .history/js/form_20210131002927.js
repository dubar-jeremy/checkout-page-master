window.onload = function (){

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);
  let i = 0;

  let currentPrice = 50;
  //let discount = currentPrice * 10 / 100;
  let total = currentPrice - discount;

  function increase()
  {
    // price * 10 / 100 = 10% reduce
    i++
    let items = document.querySelector(".nbr-value").value = i;
    let qty = parseInt(items);
    let newPrice = currentPrice * qty;
    newPrice -= newPrice * 10 / 100;
    console.log(newPrice);

  }

  function decrease()
  {
    if(i >= 1)
    {
      i--
      document.querySelector(".nbr-value").value = i;
      total
    }
  }

}