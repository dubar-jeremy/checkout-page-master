window.onload = function() {

  document.querySelector(".plus").addEventListener("click", increase);
  document.querySelector(".minus").addEventListener("click", decrease);
  document.querySelector(".toto").addEventListener("click", increase);
  document.querySelector("toto1").addEventListener("click", decrease);

  let i = 0;
  let initialPrice = 50;
  let priceAfterDiscount = increase();

  function increase() {
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
      if (i > 1) {
          i--
          let items = document.querySelector(".nbr-value").value = i;
          let qty = parseInt(items);
          let newPrice = initialPrice * qty;
          document.querySelector(".new-price").innerHTML = newPrice;
          let oldPrice = qty * priceAfterDiscount;
          document.querySelector(".old-price").innerHTML = oldPrice;
          console.log(oldPrice);
      }
  }

}