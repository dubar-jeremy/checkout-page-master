window.onload = function (){

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);
  
  let i = 0;
  let currentPrice = 50;
  let test = increase();
  console.log(test);

  function increase()
  {
    // price * 10 / 100 = 10% reduce
    i++
    let items = document.querySelector(".nbr-value").value = i;
    let qty = parseInt(items);
    let newPrice = currentPrice * qty;
    newPrice -= newPrice * 10 / 100;
    console.log(newPrice);
    
    return qty;
  }

  function decrease()
  {
    console.log(test);
    if(i >= 1)
    {
      i--
      document.querySelector(".nbr-value").value = i;

    }
  }

}