window.onload = function (){

  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");


  plus.addEventListener("click", increase);

  let i = 0;
  function increase()
  {
    i++
    let price = document.querySelector(".nbr-value").value = i;
    console.log(price);
  }
}