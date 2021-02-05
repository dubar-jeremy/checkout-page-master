window.onload = function() {

    const articlesDetails = document.querySelectorAll(".details-article");

    articlesDetails.forEach((article) => {
        const plus = article.querySelectorAll(".plus");
        const minus = article.querySelectorAll(".minus");
        const quantity = article.querySelector(".quantity"); 

    plus.addEventListener("click", increase;

    increase(){
        console.log(plus);
    }
        
    });

}

// window.onload = function() {

//   const plus = document.querySelector(".plus").addEventListener("click", increase);
//   const minus = document.querySelector(".minus").addEventListener("click", decrease);


//   let i = 0;
//   let initialPrice = 50;
//   let priceAfterDiscount = increase();

//   function increase() {
//       i++
//       let items = document.querySelector(".nbr-value").value = i;
//       let qty = parseInt(items);
//       let newPrice = initialPrice * qty;
//       let priceBeforeDiscount = newPrice; // impossible de renommer newPrice ligne15. Obligé de re assigner ici. Pourquoi ?
//       document.querySelector(".old-price").innerHTML = priceBeforeDiscount;
//       newPrice -= newPrice * 10 / 100;
//       let priceAfterDiscount = newPrice; // meme chose ici pour ligne 18
//       document.querySelector(".new-price").innerHTML = priceAfterDiscount;
//       return priceAfterDiscount;
//   }

//   function decrease() {
//       if (i > 1) {
//           i--
//           let items = document.querySelector(".nbr-value").value = i;
//           let qty = parseInt(items);
//           let newPrice = initialPrice * qty;
//           document.querySelector(".new-price").innerHTML = newPrice;
//           let oldPrice = qty * priceAfterDiscount;
//           document.querySelector(".old-price").innerHTML = oldPrice;
//           console.log(oldPrice);
//       }
//   }
// }