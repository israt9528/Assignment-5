// function to get value of elements
function getValue(id) {
  const value = parseInt(document.getElementById(id).innerText);
  return value;
}

function getElement(id) {
  return document.getElementById(id);
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

    const info = {
      title: serviceName,
      number: serviceNumber,
      date: new Date().toLocaleTimeString(),
    };
    callHistoryData.push(info);
    // console.log(callHistory);
    for (let info of callHistoryData) {
      const callHistory = getElement("call-history");

      const div = document.createElement("div");
      div.innerHTML = `
    <div
            class="bg-[#fafafa] rounded-lg p-3 mt-4 flex justify-between items-center"
          >
            <div>
              <h3 class=" font-medium">${info.title}</h3>
              <p class="text-[#5c5c5c]">${info.number}</p>
            </div>
            <div class="text-sm">${info.date}</div>
          </div>
    `;
      callHistory.appendChild(div);
    }
  });
}

let callHistoryData = [];

// clear button features
document.getElementById("clear-btn").addEventListener("click", function () {
  getElement("call-history").style.display = "none";
});
