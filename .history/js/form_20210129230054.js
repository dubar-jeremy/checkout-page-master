window.onload = function (){

  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");


  plus.addEventListener("click", increase);

  function increase()
  {
    $i++
    let price = document.querySelector(".nbr-value").value = i;
    console.log(price);
  }
}