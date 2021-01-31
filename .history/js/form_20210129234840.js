window.onload = function (){

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);
  let i = 0;

  function increase()
  {
    // price * 10 / 100 = 10% reduce
    i++
    document.querySelector(".nbr-value").value = i;
    reduce();

  }

  function decrease()
  {
    if(i >= 1)
    {
      i--
      document.querySelector(".nbr-value").value = i;
    }
  }

  function reduce()
  {
    currentPrice = 50;

    while(currentPrice > 0 && currentPrice < 1000)
    {
      let discount = currentPrice * 10 / 100;
      currentPrice - discount;
      
    }

    console.log(currentPrice);
  }

}