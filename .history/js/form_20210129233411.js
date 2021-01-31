window.onload = function (){

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);
  let i = 0;
  currentPrice = 50;
  discount = 100 * currentPrice / 100;
  console.log(discount);
  console.log(100*10/100);

  function increase()
  {
    // price * 10 / 100 = 10% reduce
    i++
    document.querySelector(".nbr-value").value = i;

  }

  function decrease()
  {
    if(i >= 1)
    {
      i--
      document.querySelector(".nbr-value").value = i;
    }
  }

}