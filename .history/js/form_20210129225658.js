window.onload = function (){

  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");


  plus.addEventListener("click", increase);

  function increase()
  {
    let price = document.querySelector(".nbr-value").value += 1;
    console.log(price);
  }
}