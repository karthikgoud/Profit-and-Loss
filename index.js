const buyInput = document.querySelector("#buy-price");
const numberOfStocks = document.querySelector("#quantity");
const sellInput = document.querySelector("#sell-price");
const checkBtn = document.querySelector("#check-btn");
const outputEl = document.querySelector("#output");

const main = document.querySelector("#main");

const gifProfit = document.querySelector(".gif-profit");
const gifLoss = document.querySelector(".gif-loss");

checkBtn.addEventListener("click", clickHandler);

//handler functions
function clickHandler() {
  const buyingPrice = Number(buyInput.value);
  const sellingPrice = Number(sellInput.value);
  const stockQuantity = Number(numberOfStocks.value);

  if (buyingPrice && sellingPrice && stockQuantity) {
    calculateProfitAndLoss(buyingPrice, stockQuantity, sellingPrice);
  } else {
    showOutput("Invalid : Enter all input fields");
  }
}

// logic
function calculateProfitAndLoss(buyPrice, quantity, sellPrice) {
  if (buyPrice > sellPrice) {
    // buy 100 , sell 60
    const loss = (buyPrice - sellPrice) * quantity;
    const lossPercent = (loss / (buyPrice * quantity)) * 100;

    showOutput(
      `Oops!, Your loss is Rs ${loss} & loss percentage ${lossPercent.toFixed(
        2
      )}%`
    );

    // style
    lossGif();
  } else if (sellPrice > buyPrice) {
    // buy 60 , sell 100
    const profit = (sellPrice - buyPrice) * quantity;
    const profitPercent = (profit / (buyPrice * quantity)) * 100;
    showOutput(
      `Yay!, Your profit is Rs ${profit} & profit percentage is ${profitPercent.toFixed(
        2
      )}%`
    );
    profitGif();
  } else {
    showOutput("no gain no pain");
  }
}

function showOutput(message) {
  outputEl.innerHTML = `<p>${message}</p>`;
  outputEl.style.display = "block";
}

function lossGif() {
  gifLoss.style.display = "block";
  gifProfit.style.display = "none";
  main.style.backgroundColor = "tomato";
  main.style.color = "black";
  outputEl.style.color = "black";
}

function profitGif() {
  gifProfit.style.display = "block";
  gifLoss.style.display = "none";
  main.style.backgroundColor = "limegreen";
  main.style.color = "black";
  outputEl.style.color = "black";
}
