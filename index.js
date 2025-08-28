// function to get value of elements
function getValue(id) {
  const value = parseInt(document.getElementById(id).innerText);
  return value;
}

// count feature
const heart = document.getElementsByClassName("heart-icon");
for (let icon of heart) {
  icon.addEventListener("click", function () {
    let count = getValue("count") + 1;
    const newCount = document.getElementById("count");
    newCount.innerText = count;
  });
}

const call = document.getElementsByClassName("call-btn");
for (let btn of call) {
  btn.addEventListener("click", function (e) {
    // check for sufficient coins
    let coin = getValue("coin");
    if (coin < 20) {
      alert(`emergency-service.netlify.app says
 You don't have sufficient coins! Need at least 20 coins to make a call.`);
      return;
    }
    // make alert for click
    let serviceName =
      e.target.parentNode.parentNode.querySelector(".service-name").innerText;
    let serviceNumber =
      e.target.parentNode.parentNode.querySelector(".number").innerText;
    alert(`emergency-service.netlify.app says
 Calling ${serviceName} ${serviceNumber}...`);
    // reduce coin
    coin = coin - 20;
    const newCoin = document.getElementById("coin");
    newCoin.innerText = coin;
  });
}
