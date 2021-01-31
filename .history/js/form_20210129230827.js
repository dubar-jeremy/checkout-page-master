window.onload = function (){

  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  let i = 0;
  let price = document.querySelector(".nbr-value").value = i;

  plus.addEventListener("click", increase);
  minus.addEventListener("click", decrease);

  function increase()
  {
    i++
    console.log(price);
  }

  function decrease()
  {
    i--
    while(i > 0)
    {
      let price = document.querySelector(".nbr-value").value = i;
    }

  }
}