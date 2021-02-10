window.onload = function () {
  document.getElementById("email").addEventListener("input", mailCheck);
  document.getElementById("tel").addEventListener("input", mobileCheck);
  document.getElementById("name").addEventListener("input", nameCheck);
  document.getElementById("postalCode").addEventListener("input", postalCodeCheck);

  function mailCheck() {
    let mailVerify = this.value;
    let regex = /^[a-zA-Z]*$/.test(mailVerify);
    let span = document.querySelector(".checkMail");

    if (regex) {
      span.classList.replace("fa-times", "require");
      span.style.color = "green";
      span.innerHTML = "Valide";
      span.classList.replace("require", "fa-check");
      console.log(regex);
    } else {
      if (!span.classList.contains("fa-check")) {
        span.classList.add("fa-check");
      }
      span.classList.replace("fa-check", "fa-times");
      span.style.color = "red";
      span.innerHTML = " Adresse mail incorrect";
      console.log(regex);
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
      console.log(regex);
    } else {
      if (!span.classList.contains("fa-check")) {
        span.classList.add("fa-check");
      }
      span.classList.replace("fa-check", "fa-times");
      span.style.color = "red";
      span.innerHTML = " Numéro incorrect";
      console.log(regex);
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
      console.log(regex);
    } else {
      if (!span.classList.contains("fa-check")) {
        span.classList.add("fa-check");
      }
      span.classList.replace("fa-check", "fa-times");
      span.style.color = "red";
      span.innerHTML = " Numéro incorrect";
      console.log(regex);
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
      console.log(regex);
    } else {
      if (!span.classList.contains("fa-check")) {
        span.classList.add("fa-check");
      }
      span.classList.replace("fa-check", "fa-times");
      span.style.color = "red";
      span.innerHTML = " Numéro incorrect";
      console.log(regex);
    }

    if (mailVerify.length == "") {
      span.classList.replace("fa-check", "require");
      span.style.color = "black";
      span.innerHTML = " Champs requis";
    }
  }

  // Items

  const plus = document.querySelector(".plus").addEventListener("click", increase);
  const minus = document.querySelector(".minus").addEventListener("click", decrease);

  let i = 0;
  let initialPrice = 50;
  let priceAfterDiscount = increase();

  function increase() {
    // price * 10 / 100 = 10% reduce
    i++;

    let items = (document.querySelector(".nbr-value").value = i);
    let qty = parseInt(items);
    let newPrice = initialPrice * qty;
    let priceBeforeDiscount = newPrice;
    document.querySelector(".old-price").innerHTML = priceBeforeDiscount;
    newPrice -= (newPrice * 10) / 100;
    let priceAfterDiscount = newPrice;
    document.querySelector(".new-price").innerHTML = priceAfterDiscount;
    return priceAfterDiscount;
  }

  function decrease() {
    if (i >= 1) {
      i--;
      let items = (document.querySelector(".nbr-value").value = i);
      let qty = parseInt(items);
      let newPrice = initialPrice * qty;
      document.querySelector(".new-price").innerHTML = newPrice;
      let oldPrice = qty * priceAfterDiscount;
      document.querySelector(".old-price").innerHTML = oldPrice;
      console.log(oldPrice);
    }
  }
};
