window.onload = function (){

  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  let i = 0;

  plus.addEventListener("click", increase);
  minus.addEventListener("click", decrease);

  function increase()
  {
    i++
    let price = document.querySelector(".nbr-value").value = i;
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