window.onload = function() {

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);

  let i = 0;
  let initialPrice = 50;
  let priceAfterDiscount = increase();

  function increase() {
      // price * 10 / 100 = 10% reduce
      i++

      let items = document.querySelector(".nbr-value").value = i;
      let qty = parseInt(items);
      let newPrice = initialPrice * qty;
      let priceBeforeDiscount = newPrice; // obligé de re assigner ici plutot qu'à la ligne 16 sinon erreur ??
      document.querySelector(".old-price").innerHTML = priceBeforeDiscount;
      newPrice -= newPrice * 10 / 100;
      let priceAfterDiscount = newPrice; // meme chose ici ??
      document.querySelector(".new-price").innerHTML = priceAfterDiscount;
      return priceAfterDiscount;
  }

  function decrease() {
      if (i >= 1) {
          i--
          let items = document.querySelector(".nbr-value").value = i;
          let qty = parseInt(items);
          let currentPrice = qty * priceAfterDiscount;
          document.querySelector("old-price").innerHTML = currentPrice;
          console.log(currentPrice);
      }
  }

}