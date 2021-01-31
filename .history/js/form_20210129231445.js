window.onload = function (){

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);
  let i = 0;

  function increase()
  {
    i++
    let price = document.querySelector(".nbr-value").value = i;
    console.log(price);
  }

  function decrease()
  {
    if(i >= 1)
    {
      i--
      let price = document.querySelector(".nbr-value").value = i;
    }

  }
}