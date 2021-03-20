window.onload = function () {
  document.getElementById("email").addEventListener("input", mailCheck);
  document.getElementById("tel").addEventListener("input", mobileCheck);
  document.getElementById("name").addEventListener("input", nameCheck);
  document
    .getElementById("postalCode")
    .addEventListener("input", postalCodeCheck);

  // TO DO : Regex and style errors message.

  function mailCheck() {
    let mailVerify = this.value;
    let regex = /^[a-zA-Z]*$/.test(mailVerify);
    let span = document.querySelector(".checkMail");

    if (regex) {
      span.classList.replace("fa-times", "require");
      span.style.color = "green";
      span.innerHTML = "Valide";
      span.classList.replace("require", "fa-check");
    } else {
      if (!span.classList.contains("fa-check")) {
        span.classList.add("fa-check");
      }
      span.classList.replace("fa-check", "fa-times");
      span.style.color = "red";
      span.innerHTML = " Adresse mail incorrect";
    }

    if (mailVerify.length == "") {
      span.classList.replace("fa-check", "require");
      span.style.color = "black";
      span.innerHTML = " Champs requis";
    }
  }

  function mobileCheck() {
    let mailVerify = this.value;
    let regex = /^\+?\s*(\d+\s?-?.?){10,}$/.test(mailVerify);
    let span = document.querySelector(".checkMobile");

    if (regex) {
      span.classList.replace("fa-times", "require");
      span.style.color = "green";
      span.innerHTML = "Valide";
      span.classList.replace("require", "fa-check");
    } else {
      if (!span.classList.contains("fa-check")) {
        span.classList.add("fa-check");
      }
      span.classList.replace("fa-check", "fa-times");
      span.style.color = "red";
      span.innerHTML = " Numéro incorrect";
    }

    if (mailVerify.length == "") {
      span.classList.replace("fa-check", "require");
      span.style.color = "black";
      span.innerHTML = " Champs requis";
    }
  }

  function nameCheck() {
    let mailVerify = this.value;
    let regex = /^[a-zA-Z]*$/.test(mailVerify);
    let span = document.querySelector(".checkName");

    if (regex) {
      span.classList.replace("fa-times", "require");
      span.style.color = "green";
      span.innerHTML = "Valide";
      span.classList.replace("require", "fa-check");
    } else {
      if (!span.classList.contains("fa-check")) {
        span.classList.add("fa-check");
      }
      span.classList.replace("fa-check", "fa-times");
      span.style.color = "red";
      span.innerHTML = " Numéro incorrect";
    }

    if (mailVerify.length == "") {
      span.classList.replace("fa-check", "require");
      span.style.color = "black";
      span.innerHTML = " Champs requis";
    }
  }

  function postalCodeCheck() {
    let mailVerify = this.value;
    let regex = /^[0-9]*$/.test(mailVerify);
    let span = document.querySelector(".checkPostalCode");

    if (regex) {
      span.classList.replace("fa-times", "require");
      span.style.color = "green";
      span.innerHTML = "Valide";
      span.classList.replace("require", "fa-check");
    } else {
      if (!span.classList.contains("fa-check")) {
        span.classList.add("fa-check");
      }
      span.classList.replace("fa-check", "fa-times");
      span.style.color = "red";
      span.innerHTML = " Numéro incorrect";
    }

    if (mailVerify.length == "") {
      span.classList.replace("fa-check", "require");
      span.style.color = "black";
      span.innerHTML = " Champs requis";
    }
  }

  const articles = document.querySelectorAll(".details-article");

  articles.forEach((article) => {
    const btns = article.querySelectorAll("button");
    const oldPrice = article.querySelector(".old-price");
    const newPrice = article.querySelector(".new-price");
    let oldPriceValue = parseFloat(oldPrice.textContent).toFixed(2);
    let newPriceValue = parseFloat(newPrice.textContent).toFixed(2);
    const quantity = article.querySelector(".quantity");

    const [btnRemove, btnAdd] = btns;

    btnRemove.addEventListener("click", () => {
      if (quantity.value <= 1) {
        return false;
      }
      quantity.value--;
      quantity.dispatchEvent(new Event("change"));
    });

    btnAdd.addEventListener("click", () => {
      quantity.value++;
      quantity.dispatchEvent(new Event("change"));
    });

    quantity.addEventListener("change", () => {
      let prices = document.querySelectorAll(".new-price");
      oldPrice.textContent = quantity.value * oldPriceValue;
      newPrice.textContent = quantity.value * newPriceValue;
      let totalContainer = document.querySelector(".total");
      let totalPrice = 0;
      for (price of prices) {
        totalPrice += parseFloat(price.textContent);
      }

      totalContainer.textContent = totalPrice;
    });
  });
};
