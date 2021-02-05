window.onload = function() {

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);


  let i = 0;
  let initialPrice = 50;
  let priceAfterDiscount = increase();

  function increase() {
      i++
      let items = document.querySelector(".nbr-value").value = i;
      let qty = parseInt(items);
      let newPrice = initialPrice * qty;
      let priceBeforeDiscount = newPrice; // impossible de renommer newPrice ligne15. Obligé de re assigner ici. Pourquoi ?
      document.querySelector(".old-price").innerHTML = priceBeforeDiscount;
      newPrice -= newPrice * 10 / 100;
      let priceAfterDiscount = newPrice; // meme chose ici pour ligne 18
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


  const items = document.querySelectorAll(".detail-article");

items.forEach((item) => {
    const btns = item.querySelectorAll("button");
    const oldPrice = item.querySelector(".old-price");
    const newPrice = itel.querySelector(".new-price");
    const quantity = item.querySelector(".nbr-value");

    const [minus, plus] = btns;
  
    minus.addEventListener("click", () => {
      quantity.value--;
      quantity.dispatchEvent(new Event("change"));
    });
  
    plus.addEventListener("click", () => {
      quantity.value++;
      quantity.dispatchEvent(new Event("add"));
    });
  
    quantity.addEventListener("add", () => {
        i++
        let items = document.querySelector(".nbr-value").value = i;
        let qty = parseInt(items);
        let newPrice = initialPrice * qty;
        let priceBeforeDiscount = newPrice; // impossible de renommer newPrice ligne15. Obligé de re assigner ici. Pourquoi ?
        document.querySelector(".old-price").innerHTML = priceBeforeDiscount;
        newPrice -= newPrice * 10 / 100;
        let priceAfterDiscount = newPrice; // meme chose ici pour ligne 18
        document.querySelector(".new-price").innerHTML = priceAfterDiscount;
    });
  });

}