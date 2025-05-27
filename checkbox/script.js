const cb_red = document.getElementById("cb_red");
const cb_blue = document.getElementById("cb_blue");
const btn = document.getElementById("btn");
const body = document.body;
btn.onclick = function () {
  if(cb_red.checked && cb_blue.checked) {
    body.style.backgroundColor = "rgb(152, 130, 219)";
  }else if (cb_red.checked) {
    body.style.backgroundColor = "rgb(222, 159, 159)";
  } else if (cb_blue.checked) {
    body.style.backgroundColor = "rgb(146, 146, 223)";
  }else{
    body.style.backgroundColor = "rgb(255, 255, 255)";
  }
};

const payBtn = document.getElementById("payBtn");
const visa = document.getElementById("visa_rb");
const paypal = document.getElementById("paypal_rb");
const mastercard = document.getElementById("mastercard_rb");
const message = document.getElementById("payment_message");

payBtn.onclick = function () {
  if(visa.checked) {
    message.textContent = "Visa Selected";
  } else if (paypal.checked) {
    message.textContent = "Paypal Selected";
  } else if (mastercard.checked) {
    message.textContent = "Mastercard Selected";
  }
};

