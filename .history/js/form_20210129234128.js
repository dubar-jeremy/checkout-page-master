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
      discount;
    }
  }

  function reduce()
  {
    currentPrice = 50;

    while(currentPrice > 0 && < 1000)
    {
      discount = currentPrice * 10 / 100;
    }
  }

}