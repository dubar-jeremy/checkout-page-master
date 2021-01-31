window.onload = function (){

  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  let i = 0;

  plus.addEventListener("click", increase);

  function increase()
  {
    i++
    let price = document.querySelector(".nbr-value").value = i;
    console.log(price);
  }

  function decrease()
  {
    i--;
    let price = document.querySelector(".nbr-value").value = i;

  }
}