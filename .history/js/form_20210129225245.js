window.onload = function (){

  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");


  plus.addEventListener("click", increase);

  function increase()
  {
    document.querySelector(".nbr-value").value = 0;
  }
}