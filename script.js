const priceElem=document.querySelector("#priceBox");
const currencySelect = document.querySelector("#currencySelect");

const rates = {
  USD: 1,
  INR: 83.2,
  EUR: 0.92,
  GBP: 0.78
};

function showPrice() {
  fetch("https://api.coinlore.net/api/ticker/?id=90")
    .then(res => res.json())
    .then(data => {
      const usd = parseFloat(data[0].price_usd);
      const curr = currencySelect.value;
      const price = usd * rates[curr];
      priceElem.innerText = price.toFixed(2) + " " + curr;
    })
    .catch(() => {
      priceElem.innerText = "Error";
    });
}

currencySelect.addEventListener("change", showPrice);
setInterval(showPrice, 1000);